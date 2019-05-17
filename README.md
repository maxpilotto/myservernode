# Getting started
```shell
npm install
npm start
```

# Routes
## GET `/api/v1/info`
Shows infos about the V1 API 

## GET `/api/v1/todos/:api_key`
Shows all the todos for that API key

## GET `/api/v1/todos/:api_key/:id`
Shows the todo for that API key and that id

## GET `/api/v2/info`
Shows infos about the V2 API

## POST `/api/v1/todos/`
#### Update 
```js
{
    _id: id,
    title: "title",
    description: "description",
    api: "api_key",
    method: "update"
}
```

#### Create
```js
{
    title: "title",
    description: "description",
    api: "api_key",
    method: "create"
}
```

#### Delete
```js
{
    _id: id,
    api: "api_key",
    method: "delete"
}
```

#### Query
```js
{
    _id: id,
    api: "api_key",
    method: "delete",
    title: "title",
    description: "description"
}
```


# API keys
+ 12345abcdef
+ mfi1j9jf91j
+ H4nSh0tF1rs7

# Sample requests
`/api/v1/todos/12345abcdef/`  
`/api/v1/todos/12345abcdef/5cda99e41c9d44000050e8de`  
`/api/v1/todos/H4nSh0tF1rs7/`  
`/api/v1/todos/H4nSh0tF1rs7/5cdaa2a01c9d44000050e8e1`  
`/api/v1/todos/H4nSh0tF1rs7/5cdbd7f01c9d4400000a07dd`  
`/api/v1/todos/mfi1j9jf91j/`  
`/api/v1/todos/mfi1j9jf91j/5cda9fe71c9d4400002fafa7`  
