//require express
const express =require('express')
//require dotenv to use env file variable
require('dotenv').config();
//require cors for frontend and backend connection
const cors=require('cors');

//store as variable
const app=express();
const PORT=process.env.PORT ||1001

//for the frontend request we use json and aslo cors for in time of connections
app.use(express.json());
app.use(cors());

//listen server with port
app.listen(PORT,()=>{
  try {
    console.log("server is running on port 1001")
  } catch (error) {
      console.log("Error",error.message);
  }
});