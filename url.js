var url = require('url')
var pathurl = url.parse('/?name=qweqeq&message=weqweqweqweqwe', true)
var zf = '/pinglun?name=qweqeq&message=weqweqweqweqwe'
zf = zf.split('/')
zf = zf[1].split('?')
zf = zf[1].split('&')
zf0 = zf[0].split('=')
zf1 = zf[1].split('=')
var zfd1=zf0[0]
var zfd2=zf0[1]
var zfx1=zf1[0]
var zfx2=zf1[1]
var dx = {}
// 这里的对象名如果是变量的话就要加中括号

//这种方法不可行
//dx.zfd1=zfd2

//这种方法可行
dx[zfd1]=zfd2
dx[zfx1]=zfx2

console.log(dx);
