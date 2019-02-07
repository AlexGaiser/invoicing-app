const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const SALT = 5;


//accessing a database called invoice_db so that models can be placed
const db = new Sequelize({
    database: 'invoice_db',
    dialect: 'postgres',
    // 
    operatorsAliases: false,
    define:{
        underscored: true
    }
    // 
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
    billable_hours:{
        type:Sequelize.FLOAT
    },
    rate: {
        type: Sequelize.FLOAT
    },
    hourly_earnings:{
        type: Sequelize.FLOAT
    },
    extra_fees: {
        type: Sequelize.FLOAT
    },
    total_amount: {
        type: Sequelize.FLOAT
    },
    client_name:{
        type: Sequelize.STRING
    },
    client_email:{
        type: Sequelize.STRING
    },
    client_phone:{
        type: Sequelize.INTEGER
    },
    client_street:{
        type: Sequelize.TEXT
    },
    client_city:{
        type: Sequelize.STRING
    },
    client_zip: {
        type: Sequelize.STRING
    }
    
})



const User = db.define('user',{
    password:Sequelize.STRING,
    business_name:{
        type: Sequelize.STRING
    },
    name:{
        type:Sequelize.STRING
    },
    username:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    user_email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    user_phone:{
        type: Sequelize.BIGINT
    },
    user_street:{
        type: Sequelize.TEXT
    },
    user_city:{
        type: Sequelize.STRING
    },
    user_zip: {
        type: Sequelize.STRING
    }
    
})

User.beforeCreate((user, options)=>{
    const password_digest = bcrypt.hashSync(user.password, 10);
    user.password = password_digest;
})

const Client = db.define('client',{
    client_name:{
        type: Sequelize.STRING
    },
    client_email:{
        type: Sequelize.STRING
    },
    client_phone:{
        type: Sequelize.INTEGER
    },
    client_street:{
        type: Sequelize.TEXT
    },
    client_city:{
        type: Sequelize.STRING
    },
    client_zip: {
        type: Sequelize.STRING
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