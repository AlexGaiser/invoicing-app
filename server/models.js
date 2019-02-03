const Sequelize = require('sequelize');

//accessing a database called invoice_db so that models can be placed
const db = new Sequelize({
    database: invoice_db,
    dialect: 'postgres'
});

//defining models
const Invoice = db.define('invoice', {
    title: {
        type: Sequelize.TEXT
    },
    invoice_number: {
        type: Sequelize.INTEGER
    },
    date: {
        type: Sequelize.DATE
    },
    description:{
        type: Sequelize.TEXT
    },
    extra_details:{
        type: Sequelize.TEXT
    },
    logged_time: {
        type: Sequelize.TIME
    },
    rate: {
        type: Sequelize.FLOAT
    },
    extra_fees: {
        type: Sequelize.FLOAT
    },
    total_amount: {
        type: Sequelize.FLOAT
    },
    userId: {
        type: Sequelize.INTEGER
    },
    clientId: {
        type: Sequelize.INTEGER
    }
    
})



const User = db.define('User',{
    
    buisness_name:{
        type: Sequelize.STRING
    },
    user_email:{
        type: Sequelize.STRING
    },
    user_phone:{
        type: Sequelize.INTEGER
    },
    clientId:{
        type: Sequelize.STRING
    }
})



const Client = db.define('User',{
   
    client_name:{
        type: Sequelize.STRING
    },
    client_email:{
        type: Sequelize.STRING
    },
    client_phone:{
        type: Sequelize.INTEGER
    }
})


//Creating associations

    User.hasMany(Invoice)
    User.hasMany(Client)

    Invoice.hasOne(Client)
    
    Invoice.belongsTo(User)
    Client.belongsTo(Invoice)
   
    

    db.sync();
    
//export the created models
module.exports = {
    db,
    Invoice,
    User,
    Client
};