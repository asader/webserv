// dependecies
const Koa = require('koa');
const logger = require('koa-logger');
const serve = require('koa-static');

// server
const app = new Koa();

// logger
app.use(logger());

app.use(serve('uploads'));

// response
app.use(function *() {
    this.body = 'Добро пожаловать!';
});

app.listen(3000);