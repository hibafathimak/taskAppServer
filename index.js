require('dotenv').config()
require('./database/dbConnection')
const express=require('express')
const cors=require('cors')
const router=require('./routes/router')


const taskServer = express()

const PORT= 3000 || process.env.PORT

taskServer.use(cors())
taskServer.use(express.json())
taskServer.use(router)


taskServer.listen(PORT,()=>{
    console.log(`server started running at ${PORT} , waiting for client request`);
})

taskServer.get('/',(req,res)=>{
    res.status(200).send(`<h1>server started running and waiting for client request <h1?`)
})