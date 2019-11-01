const jwt = require('koa-jwt');

const secret = process.env.JWT_SECRET;

const auth = jwt({ secret });

module.exports = auth;
