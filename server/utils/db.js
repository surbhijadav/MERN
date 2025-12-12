const mongoose = require("mongoose");


// const URI = process.env.mongoDB_URI
const URI = "mongodb://localhost:27017/mern_admin"
// mongoose.connect(URI)

const connectDB = async() => {
        try {
          
          await mongoose.connect(URI);
          console.log("database connected successfully");
            
        } catch (error) {
            console.error("database connection failed");
            process.exit(0);
        }
}


module.exports = connectDB;