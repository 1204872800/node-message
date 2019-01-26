var date = new Date()
date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()
var sz = function () {
  var ss = []
  s1 = 0
  s2 = 0
  s3 = 0
  s4 = 0
  s5 = 0
  s6 = 0
  for (let i = 0; i < 1000; i++) {
    ss.push(parseInt(Math.random() * 6 + 1))
  }

  for (let l = 0; l < ss.length; l++) {
    if (ss[l] === 1) {
      s1++
    } else if (ss[l] === 2) {
      s2++
    } else if (ss[l] === 3) {
      s3++
    } else if (ss[l] === 4) {
      s4++
    } else if (ss[l] === 5) {
      s5++
    } else {
      s6++
    }
  }
  sz=s1+s2+s3+s4+s5+s6
  return '1:'+s1+' '+'2:'+s2+' '+'3:'+s3+' '+'4:'+s4+' '+'5:'+s5+' '+'6:'+s6+'总数为:'+sz
}

module.exports = {
  date: date,
  sz: sz
}
// console.log(module.exports);