const fs = require('fs');

// 批量注册路由方法
module.exports = app => {
  fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js') return;
    const route = require(`./${file}`);
    app.use(route.routes()).use(route.allowedMethods());
  });
};
