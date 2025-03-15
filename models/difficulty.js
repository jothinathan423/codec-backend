const mongoose = require('mongoose')
const Difficulty = new mongoose.Schema({
    Easy: {
        type : String('Easy'),
        type : Number(2)
    },
    Medium: {
        type : String('Medium'),
        type : Number(4)
    },
    Hard :{
        type: String('Hard'),
        type :Number(8)

    },
    difficultyValue: {
        type: Number,
        default: function () {
            // Assign a numeric value based on the difficulty level
            switch (this.difficulty) {
                case 'Easy':
                    return 2 ;
                case 'Medium':
                    return 4;
                case 'Hard':
                    return 8;
                default:
                    return 0; // Default value (optional)
            }
        },
    },
});
// Create the model
const Problem = mongoose.model('Problem', ProblemSchema);

module.exports = Problem;