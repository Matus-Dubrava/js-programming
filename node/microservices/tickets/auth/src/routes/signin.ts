import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { BadRequestError } from '@md-tickets-1/common';
import { validateRequest } from '@md-tickets-1/common';
import { User } from '../models/user';
import { Password } from '../services/password';

const router = Router();

router.post(
	'/api/users/signin',
	[
		body('email').isEmail().withMessage('missing or incorrect email'),
		body('password')
			.trim()
			.notEmpty()
			.withMessage('you must provide a password'),
	],
	validateRequest,
	async (req: Request, res: Response) => {
		// check whether there is a user with provided email address
		const { password, email } = req.body;

		const user = await User.findOne({ email });
		if (!user) {
			throw new BadRequestError('Ivalid login credentials');
		}

		// compare password with stored-in hash
		if (!(await Password.compare(user.password, password))) {
			throw new BadRequestError('Invalid login credentials');
		}

		// create jwt and send it back in a cookie
		const userJwt = jwt.sign(
			{
				email: user.email,
				id: user._id,
			},
			process.env.JWT_KEY!
		);
		req.session = {
			jwt: userJwt,
		};

		return res.send(user);
	}
);

export { router as signInRouter };
