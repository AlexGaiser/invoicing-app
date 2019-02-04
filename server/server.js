// initializing dependencies and packages:
const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser');


const { Invoice, User, Client } = require('./models')

app.use(bodyParser.json())
app.use(logger('dev'))


// establishing port that server will run on
const PORT = process.env.PORT || 9000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))


// setting route for root directory
app.get('/main', async (req, res)=>{
    try{
        res.json({
            "message":"this is the root directory"
        })
    }
   catch(e){
       res.json({"message":e.message})
   }
})

// setting routes for records directory
app.get('/records', async (req,res)=>{
    const records = await Invoice.findAll({})
    console.log(records)
    try{
    res.json({records})
    }
    catch(e){
        res.json({"message":e.message})
    }
})

app.post('/records', async (req,res)=>{
    try{
       res.json({
        
    }) 
    }
    catch(e){
        res.json({"message":e.message})
    }
})

app.put('/records', async (req,res)=>{
    try{
        res.send({"message":"record updated"})
    }
    catch(e){
        res.json({"message":e.message})
    }
})

// setting routes for users
app.get('/users', async (req,res)=>{
    try{
    res.json({"message":"this is where information for all users will be displayed."})
    }
    catch(e){
        res.json({"message":e.message})
    }
})

app.get('/users/:id', async (req,res)=>{
    try{
        const message = `this is the display page for user ${req.params.id}`
        res.json({"message":message})
    }
   
    catch(e){
        res.json({"message":e.message})
    }
})