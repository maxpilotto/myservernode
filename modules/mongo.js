/**
 * Hey you, the hacker reading this, don't connect to the db there's nothing valuable there and it takes me 
 * around 10 minutes to make another throwaway account
 */
const user = 'CoolerAdmin'
const passwd = encodeURIComponent('Pa$$word')
const dbName = 'TodoList'

const mongo = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId;
const uri = `mongodb+srv://${user}:${passwd}@myservernode-mlbcd.mongodb.net/test?retryWrites=true`
const client = new mongo(uri, {
	useNewUrlParser: true
})

module.exports = {
	db: function () {
		return client.db(dbName)
	},
	connect: function (onConnect) {
		client.connect((e) => {
			onConnect(e)
		})
	},
	collection: function(name){
		return client.db(dbName).collection(name)
	},
	ObjectId
}