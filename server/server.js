// Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Import dependencies
const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/connectToDb");
const userController = require("./controllers/userController");


// Create an express app
const app = express();

// Configure express app
app.use(express.json());
app.use(cors());

// Connect to database
connectToDb();

// Routing


app.get('/user', userController.fetchUsers)

app.get('/user/:id',userController.fetchUser)

app.post('/user',userController.createUser)

app.put('/user/:id',userController.updateUser )

app.delete('/user/:id',userController.deleteUser )

// Start our server
app.listen(process.env.PORT);