const express = require('express')
const app = express()

// const { Building, Architect, Style } = require('./models')

const PORT = process.env.PORT || 9000

app.get('/', (req, res)=>{
    res.json({
        "message":"this is the root directory"
    })
})


app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))