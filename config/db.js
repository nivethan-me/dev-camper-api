const mongoose = require('mongoose')

const connectDB = async () =>{
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MONGODB Connected: ${conn.connection.host}`);
  }
  catch(err){
    console.log(`Error: ${err.message}`)
  }
}

module.exports = connectDB;