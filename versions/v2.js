const router = require('express').Router()

router.use('/info', (q, a) => {
	a.send({
		version: '2.0',
		routes: [
			
		],
		author: 'github.com/maxpilotto'
	})
})

module.exports = router;