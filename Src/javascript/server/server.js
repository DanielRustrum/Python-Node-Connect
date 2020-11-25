const express = require('express')
const instance = require("./trigger")

const app = express()
let server

app.get('/', async function (req, res) {
  let result = undefined
  let call = req.query.call.split("!")
  let args = req.query.args

  res.set('Content-Type', 'application/json');
  res.send(call)

  if(call[0] === "t") 
    result = await instance.callTrigger(call[1], args);
  else if (call[0] === "i")  
    result = await instance.checkInstance(call[1]);
  else;

  if (result !== undefined) {
    res.status(200).send(result)
  } else {
    // res.status(404).send({})
  } 
})

const start = (port) => {
  server = app.listen(port)
}

process.on("exit", ()=> {
  server.close()
})

module.exports = {
  start: start
}