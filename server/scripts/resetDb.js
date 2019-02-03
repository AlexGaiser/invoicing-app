//import db from models.js
const {db} = require ('../models.js')

const main = async()=>{
    await db.sync({force: true});
    process.exit();
}

main();