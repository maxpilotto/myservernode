const router = require('express').Router()
const mongo = require('../modules/mongo')
const util = require('../modules/util')

router.get('/:api', (q, a) => {
    const query = {
        api: q.params.api
    }

    mongo.collection('todos').find(query).toArray((e, result) => {
        if (util.isEmpty(result)) {
            a.send(util.E_404)
        } else {
            a.send(result)
        }
    })
})

router.get('/:api/:id', (q, a) => {
    const api = q.params.api
    const id = q.params.id
    const query = {
        api: api,
        _id: mongo.ObjectId(id)
    }

    mongo.collection('todos').find(query).toArray((e, result) => {
        if (util.isEmpty(result)) {
            a.send(util.E_404)
        } else {
            a.send(result)
        }
    })
})

router.post('/', (q, a) => {
    const status = {
        code: 200,
        message: 'Done'
    }
    const {
        method,
        _id,
        title,
        description,
        api
    } = q.body

    if (!method){
        status.code = 400
        status.message = 'No method provided'
        status.methods = ['create','update','delete']
    }else if (!api){
        status.code = 403
        status.message = 'No API key provided'
    }else{
        switch (method){
            case 'create':
                if (!title){
                    status.code = 400
                    status.message = 'No title provided'
                }else{
                    let record = {
                        title: title,
                        description: description,
                        api: api
                    }

                    mongo.collection('todos').insertOne(record, e => {
                        if (e){
                            status.code = 400
                            status.message = e
                        }
                    })
                }
                break;
    
            case 'update':
                if (!_id){
                    status.code = 400
                    status.message = 'No id provided'
                }else{
                    let record = {
                        title: title,
                        description: description,
                        api: api
                    }
                    let query = {
                        _id: mongo.ObjectId(_id)
                    }

                    mongo.collection('todos').updateOne(query,{$set: record}, e => {
                        if (e){
                            status.code = 400
                            status.message = e
                        }
                    })
                }
                break;
    
            case 'delete':
                if (!_id){
                    status.code = 400
                    status.message = 'No id provided'
                }else{
                    let query = {
                        _id: mongo.ObjectId(_id)
                    }

                    mongo.collection('todos').deleteOne(query, e => {
                        if (e){
                            status.code = 400
                            status.message = e
                        }
                    })
                }
                break;
        }
    }

    a.send(status)
})

module.exports = router