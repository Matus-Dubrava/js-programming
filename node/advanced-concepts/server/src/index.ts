import cluster from 'cluster';
import crypto from 'crypto';
import express from 'express';

process.env.UV_THREADPOOL_SIZE = 1;

// is this file being executed in master mode?
if (cluster.isMaster) {
    // execute index.js in child mode
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
} else {
    // child, act like server and do noting else
    const app = express();

    app.get('/', (req: express.Request, res: express.Response): void => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hi There');
        });
    });

    app.get('/fast', (req: express.Request, res: express.Response): void => {
        res.send('this was fast');
    });

    app.listen(5000);
}
