const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: [true, "First name is required"],
        minLength: [3, "First name must be longer than 3 characters"]
    },
    lastName: { 
        type: String,
        required: [true, "Last name is required"],
        minLength: [3, "Last name must be longer than 3 characters"]
    }
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);

