const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    fullName: { 
        type: String,
        required: [true, "Full name is required"],
        minLength: [3, "Name must be longer than 3 characters"]
    },
    position: { 
        type: String,
        required: [true, "Position is required"],
        minLength: [2, "Position must be longer than 1 character"]
    },
    games:{
        type: Object
    }
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);

