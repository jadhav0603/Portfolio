const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())

app.post('/',async (req,res)=>{
    const {email,Name,subject,message} = req.body
    try {
        const collection = mongoose.connection.db.collection('visiters')
        
        const result = await collection.insertOne({email,Name,subject,message})
        res.status(200).json({msg:"Successfully Posted Message, Thank You!",result})
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})


app.listen(PORT, async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('server successfully connected and running')
        console.log(`server running on ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})