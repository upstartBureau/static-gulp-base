// simple static server
const Static = require('node-static')
const http = require('http')

let file = new Static.Server('./dist')

http.createServer((req, res) => {
  req.addListener('end', () => {
    file.serve(req, res)
  }).resume()
}).listen(80)
