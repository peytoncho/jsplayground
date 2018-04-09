const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World'))
app.get('/gateway', function(req, res){res.send("This is gateway")})


console.log(__dirname)

//app.listen(3000, () => console.log("This is Example listening on port 3000"))