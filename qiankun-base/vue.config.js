const url = 'http://okayx-gateway:9999'
// const url = 'https://open.okaygis.com'; // 测试
// 图片管理-以图搜图服务
const imgageUrl = 'http://172.16.20.243:5000'
// const imgageUrl = 'http://172.16.10.231:5000'
const newImgageUrl = 'http://172.16.10.120:5000'
// 图片配置url
const imgageDataUrl = 'http://172.16.10.120:5000/data?image_path='
// 推送服务
const pushIpPort = 'http://172.16.10.231:5010'
// 代理预览服务
const onlinePreviewIpPort = 'https://preview.okaygis.com/'

const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  devServer: {
    port: 8000,
    open: true,
    disableHostCheck: true,
    headers: {
      //因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域
      "Access-Control-Allow-Origin": "*"
    },
    proxy: {
      // ^/(admin|auth|oss|act|actuator|api|daemon|job|gen|monitor|wx|mp|pay|code)
      '^/(admin|auth|oss|act|actuator|api|daemon|job|gen|monitor|wx|mp|pay|code|es)': {
        target: url,
        ws: false, // 需要websocket 开启
        pathRewrite: {
          '^/': '/'
        }
      },
      '^/imageManage': {
        target: imgageUrl,
        ws: false, // 需要websocket 开启
        pathRewrite: {
          '^/imageManage': '/'
        }
      },
      // newImgageUrl
      '^/newImgageUrl': {
        target: newImgageUrl,
        ws: false, // 需要websocket 开启
        pathRewrite: {
          '^/newImgageUrl': '/'
        }
      },
      // imgageDataUrl
      '^/imgageData': {
        target: imgageDataUrl,
        ws: false, // 需要websocket 开启
        pathRewrite: {
          '^/imgageData': '/'
        }
      },
      '^/pushIpPort': {
        target: pushIpPort,
        ws: false, // 需要websocket 开启
        pathRewrite: {
          '^/pushIpPort': '/'
        }
      },
      '^/onlinePreview': {
        target: onlinePreviewIpPort,
        ws: false, // 需要websocket 开启
        pathRewrite: {
          '^/onlinePreview': '/'
        }
      },
      // 3.5 以后不需要再配置
    }
  },
};
