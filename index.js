const v1 = require('./versions/v1')
const v2 = require('./versions/v2')
const express = require('express')
const mongo = require('./modules/mongo')
const port = process.argv[2] || 2223
const app = express()

app.use(express.urlencoded())

app.use('/api/v1', v1)
app.use('/api/v2', v2)

app.use((q, a) => {
	a.status(404).send('These are not the APIs you are looking for 👋')
});

mongo.connect((e) => {
	console.log('Connected to mongodb')

	app.listen(port)
})

console.log('Starting server @ localhost:' + port)