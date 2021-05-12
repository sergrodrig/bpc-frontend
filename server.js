const express = require('express')
const serveStatic = require('serve-static')

const path = require('path')
const app = express()

app.use(serveStatic(path.join(__dirname, 'dist')))
app.all('*', function (req, res) {
  res.redirect('/')
})

app.listen(80)
