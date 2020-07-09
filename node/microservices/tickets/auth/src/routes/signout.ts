import { Router } from 'express';

const router = Router();

router.get('/api/users/signout', (req, res) => {
	return res.send('hi there');
});

export { router as signOutRouter };
