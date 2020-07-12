import express from 'express';
import { json } from 'body-parser';
import 'express-async-errors';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signOutRouter } from './routes/signout';
import { signInRouter } from './routes/signin';
import { signUpRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();

app.set('trust proxy', true);

app.use(json());
app.use(
	cookieSession({
		signed: false,
		secure: process.env.NODE_ENV !== 'test',
	})
);

if (process.env.NODE_ENV === 'development') {
	app.use((req, res, next) => {
		const { method, url } = req;
		console.log(`${method} ${url}`);
		return next();
	});
}

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.all('*', async (req, res, next) => {
	throw new NotFoundError();
});

app.use(errorHandler);

export { app };
