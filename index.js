const Koa = require('koa');
const logger = require('koa-logger');
const app = new Koa();

// logger
app.use(logger());

// response
app.use(function *() {
    this.body = 'qwasderfasder!';
});

app.listen(3000);