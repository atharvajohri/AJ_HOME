const express = require("express")
const app = express()
const path = require('path')

console.log("ENV", process.env.NODE_ENV)

app.use(express.static(path.join(__dirname, '..', 'dist')))

app.listen(3020, () => console.log('Running on 3020'))