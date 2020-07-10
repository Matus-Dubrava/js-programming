import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { User } from '../models/user';
import { BadRequestError } from '../errors/bad-request-error';
import { validateRequest } from '../middlewares/validate-request';

const router = Router();

router.post(
	'/api/users/signup',
	[
		body('email').isEmail().withMessage('Email must be valid'),
		body('password')
			.trim()
			.isLength({ min: 4 })
			.withMessage('Password must be longer than 4 characters'),
	],
	validateRequest,
	async (req: Request, res: Response) => {
		// verify whether the email is not already taken
		const { email, password } = req.body;

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			throw new BadRequestError('email in use');
		}

		const user = User.build({ email, password });
		await user.save();

		// generate JWT and store it on session object
		const userJwt = jwt.sign(
			{
				id: user.id,
				email: user.email,
			},
			process.env.JWT_KEY!
		);

		req.session = {
			jwt: userJwt,
		};

		return res.status(201).send(user);
	}
);

export { router as signUpRouter };
