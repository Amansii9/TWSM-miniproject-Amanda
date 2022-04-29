const mongoose = require("mongoose");

// What the schema inside the database should contain.
const MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
});

// Create model from schema
const MessageModel = mongoose.model("messagecollection", MessageSchema);
module.exports = MessageModel;