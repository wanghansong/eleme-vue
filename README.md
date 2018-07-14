# eleme-vue
## 项目描述：

UI设计稿在resource目录下

项目采用vue+vue-router+vuex+element UI

`/src/components/`目录下是存放一些公共组件，如：header、nav

`/src/pages/`放各个页面，每个页面一个文件夹，每个文件夹下再建个components文件夹放组成该页面的组件

整个项目包含三个路由：

`/goods`商品页面

`/ratings`评论页面

`/seller`商家页面

这三个页面有公共的header、nav

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
