//import modules
const express = require('express')
let mongodb = require('mongodb')
//import url
const url = require('../url')
//create mongoclient
let mcl = mongodb.MongoClient
//create router instance
let router = express.Router()
//database name
let dbName = 'Project'

router.post("/fetchCart", (req, res) => {
	let u_name = req.body.u_name
	let obj = { u_name }
	//connect to mongodb
    mcl.connect(url, (err, conn) => {
    	if (err)
            console.log('Error in connection:- ', err)
    	else {
        	let db = conn.db(dbName)
            db.collection('cart').find(obj).toArray((err, array) => {
                if (err)
                    console.log(err)
                else {
                    res.json(array)
                    console.log(`Cart response for ${obj.u_name} sent`)
                    conn.close()
                }
        	})
    	}
	})
})
 
//export router
module.exports = router
