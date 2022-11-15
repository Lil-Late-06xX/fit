const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()



app.use( express.static(path.join(__dirname + '/folder')))
app.use(bodyParser.json())

console.log(__dirname);



app.get('/', (req, res) => {

    res.sendFile( path.join(__dirname ,'index.html') )

})

















let port = process.env.PORT






app.listen( port || 3000)