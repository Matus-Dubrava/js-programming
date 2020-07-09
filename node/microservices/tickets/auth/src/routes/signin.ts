import { Router } from 'express';

const router = Router();

router.get('/api/users/signin', (req, res) => {
	return res.send('hi there');
});

export { router as signInRouter };
