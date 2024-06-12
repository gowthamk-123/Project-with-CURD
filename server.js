let express = require('express')
let bodyparser = require('body-parser')
let cors = require('cors')
//create rest object
let app = express()
//set JSON as MIME type
app.use(bodyparser.json())
//client is not sending form data-> encoding JSON
app.use(bodyparser.urlencoded({ extended: false }))
//enable CORS-> Cross Origine Resource Sharing-> communication among various ports
app.use(cors())
//create port
let port = process.env.PORT || 8080
//import fetch insert update delete modules
let auth =require('./Auth/auth')
let fetch = require('./fetch/fetch')
let fetchCart = require('./fetchCart/fetchCart')
let insert = require('./insert/insert')
let createuser=require('./insert/insert')
let insertCart=require('./insert/insert')
let update = require('./update/update')
let updateCart = require('./update/update')
let remove = require('./delete/delete')
let deleteCart = require('./delete/delete')
//use above module
app.use("/auth",auth)
app.use("/fetch", fetch)
app.use("/fetchCart", fetchCart)
app.use("/insert", insert)
app.use("/insert/insert/createuser", createuser)
app.use("/insert/insert/cartInsert", insertCart)
app.use("/update", update)
app.use("/update/update/updateCart", updateCart)
app.use("/delete", remove)
app.use("/delete/delete/deleteCart", deleteCart)
//assign port no
app.listen(port, () => {
console.log("Server listening port no:- ", port)
})
/*
*/
// >node server
// Test following URLs with postman
// http://localhost:8080/fetch
// http://localhost:8080/insert
// http://localhost:8080/update
// http://localhost:8080/delete
// body-> raw-> json
// (get)
// (post)
// (put)
// (delete