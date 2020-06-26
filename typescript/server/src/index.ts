import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
import { router } from './routes/loginRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['dsadusadsa'] }));

app.use(router);

app.listen(PORT, (): void => {
    console.log(`server listening on port ${PORT}`);
});
