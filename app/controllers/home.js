const path = require('path');

class HomeCtl {
  index(ctx) {
    ctx.body = `<h1>hello there</h1><input />`;
  }

  upload(ctx) {
    const {
      file: { path: filePath }
    } = ctx.request.files;
    const basename = path.basename(filePath);

    ctx.body = { url: `${ctx.origin}/uploads/${basename}` };
  }
}

module.exports = new HomeCtl();
