const router = require('express').Router()
const todos = require('../routes/todos')

router.use('/todos', todos)
router.use('/info', (q, a) => {
	a.send({
		version: '1.0',
		routes: [
			'/:api_key',
			'/:api_key/:todo_id'
		],
		author: 'github.com/maxpilotto'
	})
})

module.exports = router