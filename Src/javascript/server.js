const express = require('express')
const app = express()

// Trigger
app.get('/', function (req, res) {
  res.send('Hello World')
})

// Async Trigger
app.get('/async', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)