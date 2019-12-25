const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

//Initial application-api
const app = express();
app.use(express.json());
app.use(cors())

//Connect with table of Mongo
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })
requireDir('./src/models')

//Routes
app.use("/api", require("./src/routes"))

//Port of server
app.listen(3001)    