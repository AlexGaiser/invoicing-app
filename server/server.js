// initializing dependencies and packages:
const express = require('express')
// const cors = require('cors');
const { passport, sign } = require('./auth');
const bcrypt = require('bcrypt')
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
// these routes maybe should be merged with invoices
app.get('/records',
    passport.authenticate('jwt', {session:false}),
    async (req,res)=>{
    
    const records = await Invoice.findAll({})

    console.log(records)
    try{
    res.json({records})
    }
    catch(e){
        res.json({"message":e.message})
    }
})

app.get('/records/:id', 
    passport.authenticate('jwt', {session:false}),
    async (req, res)=>{
    const userId = req.params.id
    try{
        const userInfo = await User.findOne({
            where:{id:userId},
            include:[Invoice]})
        console.log(userInfo);
        res.json({
            userInfo
        })
    }
   
    catch(e){
        res.json({"message":e.message})
    }
})

app.post('/records', 
    passport.authenticate('jwt', {session:false}),

    async (req,res)=>{
    console.log(req.body)
    
    try{
        const newInvoice = await Invoice.create(req.body)
        res.json({newInvoice})
        console.log('success=======================================================>')
    }
    catch(e){
        res.status({
            "message": e.message
        })
    }
})



// setting routes for users
//| ---------------------------------------------------|

app.get('/users', 
    passport.authenticate('jwt', {session:false}),
    
    async (req,res)=>{
    try{
        const allUsers = await User.findAll({})
    res.json({allUsers})
    }
    catch(e){
        res.json({"message":e.message})
    }
})

app.post('/users',
    
    async(req, res)=>{
    try{
        // console.log('running'.repeat(100));
        const newUser = await User.create(req.body);
        console.log(newUser);
        
       
        const {id, name} = newUser.dataValues
        const token = sign({
            id,
            name
        });
        res.json(token)
            // , token)     
    }
    catch(e){
        res.json({
            "message":e.message,
            "route":"/users"
        })
    }
})

app.get('/users/:id', 
    passport.authenticate('jwt', {session:false}),

    async (req,res)=>{

    const userId = req.params.id
    try{
        const userInfo = await User.findByPk(userId)
        console.log(userInfo);
        res.json({
            userInfo
        })
    }
    catch(e){
        res.json({"message":e.message})
    }
})

// routes for invoices
//| ---------------------------------------------------|
app.get('/invoice/:id',
    passport.authenticate('jwt', {session:false}),
    async (req,res)=>{
        const invoiceId = req.params.id
        try{
           const invoice = await Invoice.findByPk(invoiceId)
           res.json({invoice})
        } 
        catch(e){
            res.json({
                "message":e.message,
                "route":"/invoice"       })
        }
    })

app.put('/invoice/:id', 
    passport.authenticate('jwt', {session:false}),
    
    async (req,res)=>{
    const invoiceId = req.params.id
    try{
        const editInvoice= await Invoice.findByPk(invoiceId)
        
        editInvoice.update(req.body)
        
        res.json({
            "message":"record updated", 
            editInvoice
        })
    }
    catch(e){
        res.json({"message":e.message})
    }
})

app.delete('/invoice/:id', 
    passport.authenticate('jwt', {session:false}),
    async (req,res)=>{
    try{
        const invoiceId = req.params.id
        console.log(invoiceId)
        const deleteInvoice = await Invoice.findByPk(invoiceId)
        deleteInvoice.destroy()
        res.json(deleteInvoice)
    }
    catch(e){
        res.json({
            "message": e.message,
            "route":"/invoice/"
        })  
    }
})

// app.get('/clients/:name', async (req,res)=>{
//     const name = req.params.name.split('_').join(' ')
//     console.log(name)
//     try{
//         const client = await Client.findOne({
//             where: {client_name: name}
//         })
//         res.json(client)
//     }
//     catch(e){
//         res.json({
//             "message": e.message,
//             "route":"/clients/"
//         })  
//     }
// })


app.post('/login',     
    async (req,res)=>{
    try{
        const { username, password} = req.body;
        const user = await User.find({where:{username}})
        const passwordValid = await bcrypt.compare(password, user.password)
        const {id, name} = user
        if(passwordValid){
            const token = sign({
                id, username, name
            })
            res.json({token, id:id})
        }
        else
            {
                throw Error('Invalid Credentials');
            }
    }
    catch(e){
        res.json({"message":e.message,
        "route": '/login'
        })
    }
})