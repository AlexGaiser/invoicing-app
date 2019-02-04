// initializing dependencies and packages:
const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(logger('dev'))

// const { Record } = require('./models')

// establishing port that server will run on
const PORT = process.env.PORT || 9000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))


// setting route for root directory
app.get('/main', (req, res)=>{
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
app.get('/records', (req,res)=>{
    try{
    res.json({
        "message":"this is where records of the users sessions go"
    })
    }
    catch(e){
        res.json({"message":e.message})
    }
})

app.post('/records', (req,res)=>{
    try{
       res.json({
        
    }) 
    }
    catch(e){
        res.json({"message":e.message})
    }
})

app.put('/records', (req,res)=>{
    try{
        res.send({"message":"record updated"})
    }
    catch(e){
        res.json({"message":e.message})
    }
})

// setting routes for users
app.get('/users', (req,res)=>{
    try{
    res.json({"message":"this is where information for all users will be displayed."})
    }
    catch(e){
        res.json({"message":e.message})
    }
})

app.get('/users/:id',(req,res)=>{
    try{
        const message = `this is the display page for user ${req.params.id}`
        res.json({"message":message})
    }
   
    catch(e){
        res.json({"message":e.message})
    }
})