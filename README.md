## 知乎web端 (WIP)

##主要技术栈   

前端: react、redux、redux-saga、immer   
后端: koa、mongodb


## 备注   
请在根目录新建.env文件 将MONGOOSE_URI的值改成自己mongodb地址
```
MONGOOSE_URI=mongodb+srv://mongodb地址
JWT_SECRET=zhihu-jwt-secret
```

## 相关脚本

### `npm run dev`
运行项目，server在5000端口，client在3000端口

### `yarn build`

打包项目，打包目录在/app/public

## 预览地址    
https://zhihu-clone.herokuapp.com/  (免费的heroku服务器 会比较卡) 



