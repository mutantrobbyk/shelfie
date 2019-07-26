require('dotenv').config()
const express = require('express')
const app = express ()
const massive = require('massive')

app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING)
.then((database) => {
    app.set('db', database)
    app.listen(SERVER_PORT, () => console.log(`Powerman ${SERVER_PORT}`))
}).catch(err => console.log(err, 'cannot connect to database'))