const  mongoose = require('mongoose')
const ProblemsSchema  = new mongoose.Schema({
    ProblemTitle: {
        type : String
        //required : true 
    },
    ProblemDescription:{
        type : String
        //require : true
    },
    ProblemExamples : {
        type :String
        //require:true
    }
    //difficulty,timecomplexity,spacecomp,topic[],company

})
module.exports = mongoose.model('ProblemInput', ProblemsSchema);