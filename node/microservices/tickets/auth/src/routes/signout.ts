import { Router } from 'express';

const router = Router();

router.get('/api/users/signout', (req, res) => {
	req.session = null;
	return res.send({});
});

export { router as signOutRouter };
