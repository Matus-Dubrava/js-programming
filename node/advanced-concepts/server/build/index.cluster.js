"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cluster_1 = __importDefault(require("cluster"));
var crypto_1 = __importDefault(require("crypto"));
var express_1 = __importDefault(require("express"));
process.env.UV_THREADPOOL_SIZE = 1;
// is this file being executed in master mode?
if (cluster_1.default.isMaster) {
    // execute index.js in child mode
    cluster_1.default.fork();
    cluster_1.default.fork();
    cluster_1.default.fork();
    cluster_1.default.fork();
    cluster_1.default.fork();
    cluster_1.default.fork();
    cluster_1.default.fork();
    cluster_1.default.fork();
}
else {
    // child, act like server and do noting else
    var app = express_1.default();
    app.get('/', function (req, res) {
        crypto_1.default.pbkdf2('a', 'b', 100000, 512, 'sha512', function () {
            res.send('Hi There');
        });
    });
    app.get('/fast', function (req, res) {
        res.send('this was fast');
    });
    app.listen(5000);
}
