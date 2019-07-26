require('dotenv').config()
const express = require('express')
const app = express ()
const massive = require('massive')
const ctrl = require('./controller')

app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.addProduct)


massive(CONNECTION_STRING)
.then((database) => {
    app.set('db', database)
    app.listen(SERVER_PORT, () => console.log(`Powerman ${SERVER_PORT}`))
}).catch(err => console.log(err, `Can't connect to database`))