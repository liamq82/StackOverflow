var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.send('hello world!')
})

var port = 3000

app.listen(port,()=>{
    console.log('listening on port ', + port)
})