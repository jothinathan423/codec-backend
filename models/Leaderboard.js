const mongoose = require('mongoose');

const LeaderBoardSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true,
        default : 0
    }
})