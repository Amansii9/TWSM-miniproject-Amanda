// https://www.youtube.com/watch?v=I7EDAR2GRVo&ab_channel=PedroTech
// File used to start the API. Contains API and database setup.

const express = require("express"); // imports express library
const app = express(); // the app const is used to refer to the functions inside the express library.
const mongoose = require("mongoose");
const MessageModel = require("./models/Messages");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// connecting to the cluster in the Mongo DB
// database can only be accessed from the IP address "86.52.79.96/32", and only database users can access the database.
mongoose.connect("mongodb+srv://admin:adminpassword@messages.9kfni.mongodb.net/PortfolioDatabase?retryWrites=true&w=majority");

// get request: request data from front-end (req) and sends it to the database (res)
app.get("/getMessages", (req, res) => {
    // finds all the data inside the collection, call a callback function
    MessageModel.find({}, (err, result) => {
        if (err) {
            // if we get an error, send error to the front-end
            res.json(err);
        } else {
            // Send results from the table to the front-end
            res.json(result);
        }
    }); // returns all data inside collection
});

// post request:
app.post("/createMessage", async (req, res) => {
    const message = req.body; // data from the front-end that we will insert in the database
    const newMessage = new MessageModel(message); // add new message to database
    await newMessage.save(); // save the data
    res.json(message); // send back the information, so that we know that we get the correct information in the backend.
});

// runs the server
app.listen(3001, () => {
    // runs if the server is running
    console.log("The server is running.");
});