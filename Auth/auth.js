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


router.post('/auth', (req, res) => {
	let u_name = req.body.u_name
	let u_pwd = req.body.u_pwd
	let obj = { u_name, u_pwd }
	//connect to mongodb
    mcl.connect(url, (err, conn) => {
    	if (err)
            console.log('Error in connection:- ', err)
    	else {
        	let db = conn.db(dbName)
            db.collection('users').find(obj).toArray((err, array) => {
                if (err)
                    console.log(err)
                else {
                    if (array.length > 0)
                    	res.json({ 'auth': 'success', 'user': u_name })
                    else
                    	res.json({ 'auth': 'failed' })
                    console.log('Auth response sent')
                    conn.close()
                }
        	})
    	}
	})
})

 
module.exports = router