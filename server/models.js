const Sequelize = require('sequelize');

//accessing a database called invoice_db so that models can be placed
const db = new Sequelize({
    database: 'invoice_db',
    dialect: 'postgres'
});

//defining models
const Invoice = db.define('invoice', {
    title: {
        type: Sequelize.TEXT
    },
    invoice_number: {
        type: Sequelize.BIGINT
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
        type: Sequelize.BIGINT
    }
})



const Client = db.define('Client',{
   
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

    User.hasMany(Invoice, {onDelete: 'cascade'})
    User.hasMany(Client, {onDelete: 'cascade'})

    Invoice.hasOne(Client, {onDelete: 'cascade'})
    

    Invoice.belongsTo(User, {onDelete: 'cascade'})
    // Invoice.belongsToMany(through:)
    Client.belongsTo(Invoice, {onDelete: 'cascade'})
   
    

    db.sync();

//export the created models
module.exports = {
    db,
    Invoice,
    User,
    Client
};