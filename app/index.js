const Koa = require('koa');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const error = require('koa-json-error');
const parameter = require('koa-parameter');
const mongoose = require('mongoose');
const path = require('path');
// import Koa from 'koa';
// import koaBody from 'koa-body';
// import koaStatic from 'koa-static';
// import error from 'koa-json-error';
// import parameter from 'koa-parameter';
// import mongoose from 'mongoose';
// import path from 'path';

const app = new Koa();

const { connectionString } = require('./config');

// 连接数据库
mongoose.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
  () => {
    console.log('database connected');
  }
);
mongoose.connection.on('error', console.error);

const registerRoutes = require('./routes');

// server静态文件目录
app.use(koaStatic(path.join(__dirname, 'public')));

// 处理错误
app.use(
  error({
    // postFormat: (e, { stack, ...rest }) => process.env.NODE_ENV === 'production' ? rest : { stack, ...rest }
    postFormat: (e, { stack, ...rest }) =>
      process.env.NODE_ENV === 'production' ? { stack, ...rest } : rest
  })
);

// 文件上传
app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, '/public/uploads'),
      keepExtensions: true
    }
  })
);

// 支持url参数
app.use(parameter(app));

//注册路由
registerRoutes(app);

app.listen(3000, () => console.log('server started on port 3000'));
