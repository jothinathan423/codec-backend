const express = require('express');
const User = require('../models/User'); 
const router = express.Router();
const Admin = require('../models/Admin');
const ProblemInput  = require('../models/Problems_input');

//get all users
router.get('/userregister_list',async(req, res) => {
    const ListUsers = await User.find({});
    try{
        res.status(200).json({ListUsers});
    }
    catch (error) {
        res.status(500).json({ message: 'error users', error: error.message });
    }
});

//insert new problem statement
router.post('/Problem_Input', async (req ,res) => {
    const { ProblemTitle, ProblemTopic, Difficulty, ProblemDescription, ProblemExamples, Spacecomplexity, Timecomplexity } =req.body;
    try{
        const NewProblem = new ProblemInput({ ProblemTitle, ProblemTopic, Difficulty, ProblemDescription, ProblemExamples, Spacecomplexity, Timecomplexity });
        await NewProblem.save();
        res.status(201).json({message:'New problem sucessfully added', Problem: NewProblem});
    }
    catch(error){
        res.status(500).json({message:'please enter valid prolem',error: error.message});
    }
});

//get all problems
router.get('/allproblems', async (req, res) => {
    const ListUsers = await ProblemInput.find({});
    try {
        res.status(200).json({ ListUsers });
    }
    catch (error) {
        res.status(500).json({ message: 'error users', error: error.message });
    }
});

//filter problem by topic eg:array
router.get('/allproblems/topics/:topic', async (req, res) => {
    const parameter = req.params.topic;
    const ListUsers = await ProblemInput.find({ ProblemTopic: parameter });
    try {
        res.status(200).json({ ListUsers });
    }
    catch (error) {
        res.status(500).json({ message: 'error users', error: error.message });
    }
});

//filter problem by Difficulty eg:easy
router.get('/allproblems/difficulty/:topic', async (req, res) => {
    const parameter = req.params.topic;
    const ListUsers = await ProblemInput.find({ Difficulty: parameter });
    try {
        res.status(200).json({ ListUsers });
    }
    catch (error) {
        res.status(500).json({ message: 'error users', error: error.message });
    }
});



//new user registeration
router.post('/userregister', async (req, res) => {
    const { name, email, password, college } = req.body;
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const newUser = new User({ name, email, password, college });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});

//user login
router.post('/userlogin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Username not found' });
        }
        if (user.password !== password) {
            return res.status(400).json({ msg: 'password incorrect' });
        }
        res.json({ msg: 'logged in successfully' });
        
    }
    catch (err) {
        res.status(500).send('error in server');
    }
    
});


//admin register
router.post('/adminregister', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userexist = await Admin.findOne({ email: email });
        if (userexist) {
            res.status(400).json('user already exist')
        }
        const newAdmin = new Admin({ name, email, password });
        await newAdmin.save();
        res.status(201).json({ message: 'Admin registered successfully', user: newAdmin });

    }
    catch (err) {
        res.status(500).json('serve error');
    }
})

//admin login
router.post('/adminlogin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Admin.findOne({ email: email });
        if (!user) {
            res.status(400).json({message: 'invalid email address or email not found'});
        }
        if (user.password !== password) {
            res.status(400).json({ msg: 'incorrect password' });
        }
        res.status(200).json({ msg: 'logged in successfully' });
    }
    catch (err) {
        res.status(500).json({ msg: 'server error' });
    }
});


// router.post('/adminlogin', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await 
//     }
// })


// router.get('./getleaderboard', async (req, res) => {
//     try {
//         const leaderboard = await User.find().sort({ score: -1 });
//         res.json(leaderboard);

//     }
//     catch (err) {
//         res.status(500).json('error in server');
//     }
// });


module.exports = router;