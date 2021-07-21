const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../.env')})
const express = require('express')
const cors = require('cors')


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())

// // routes
// app.use('/', require('./routes/index'))
app.use('/farmers', require('./routes/farmers'))
app.use('/address', require('./routes/address'))
app.use('/pests', require('./routes/pests'))
app.use('/diseases', require('./routes/diseases'))
app.use('/practices', require('./routes/practices'))
app.use('/farms', require('./routes/farms'))
app.use('/statistics', require('./routes/statistics'))


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))