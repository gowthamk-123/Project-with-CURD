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
//create restapi
router.get("/", (req, res) => {
	//connect to mongodb
    mcl.connect(url, (err, conn) => {
    	if (err)
  	      console.log('Error in connection',err)
    	else {
        	let db = conn.db(dbName)
            db.collection('product').find().toArray((err, array) => {
                if (err)
                    console.log('Error:- ', err)
                else {
                    console.log('Data Sent')
                    res.json(array)
                    conn.close()
                }
        	})
    	}
	})
})

module.exports = router