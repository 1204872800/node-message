var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')
var date=require('./date')
var comments = [{
  name: '张1',
  message: '今天的天气真美丽!!!',
  dateTime: '2018/8/12'
}, {
  name: '张2',
  message: '今天的天气真美丽!!!',
  dateTime: '2018/8/12'
}, {
  name: '张3',
  message: '今天的天气真美丽!!!',
  dateTime: '2018/8/12'
}]

//1.创建服务器
//2.引入fs读文件的模块,服务器收到请求之后就把相应的数据传过去
//3.引入模块引擎,把读到的文件经过处理之后传到客户端
//4.引入路径核心模块,把路径和请求的字符串分开
//5.往数据库里添加新数据后重定向到首页,就可以看到页面刷新了
http.createServer(function (req, res) {
  //使用url.parse方法将路径解析为一个可以操作的对象
  //第二个参数为true就是直接将查询字符串转为一个对象
  var pathurl = url.parse(req.url, true)
  var pathname = pathurl.pathname
  // console.log(pathname);
  // console.log(url);
  if (pathname === '/') {
    fs.readFile('./view/index.html', function (error, data) {
      if (error) {
        return res.end('404 not found')
      }
      data = data.toString() 
      var ret = template.render(data, {
        comments
      })
      res.end(ret)
    })
    //我们为了方便处理这些静态文件都把文件放到public目录下
    //那些资源可以被访问,那些不可以访问都由我们灵活的控制
  } else if (pathname.indexOf('/public/') === 0) {
    fs.readFile('.' + pathname, function (error, data) {
      if (error) {
        return res.end('404 not found')
      }
      res.end(data)
    })
  } else if (pathname === '/post') {
    fs.readFile('./view/post.html', function (error, data) {
      if (error) {
        return res.end('404 not found')
      }
      res.end(data)
    })
  } else if (pathname === '/pinglun') {
    var query = pathurl.query
     query.dateTime=date
    comments.unshift(query)
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  }else{
       fs.readFile('./view/404.html', function (error, data) {
      if (error) {
        return res.end('404 not found')
      }
      res.end(data)
    })
  }



}).listen(3000, function () {
  console.log('3000端口的服务器启动了!!!');

})