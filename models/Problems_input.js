const  mongoose = require('mongoose')
const ProblemsSchema  = new mongoose.Schema({
    ProblemTitle: {
        type : String,
        require : true 
    },
    ProblemTopic: {
        type: String,
        require: true
    },
    Difficulty: {
        type: String,
        require: true
    },
    ProblemDescription:{
        type : String,
        require : true
    },
    ProblemExamples : {
        type :String,
        require : true
    },
    Spacecomplexity: {
        type: String,
        require: true
    },
    Timecomplexity: {
        type: String,
        require: true
    }
    //difficulty,timecomplexity,spacecomp,topic[]

})
module.exports = mongoose.model('ProblemInput', ProblemsSchema);