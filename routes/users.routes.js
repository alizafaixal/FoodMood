let express = require('express');
let router = express.Router();
let User = require('../model/user.model').User;
let bcrypt = require('bcrypt');
let auth = require('../controllers/auth');

router.post('/login', async(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;

    let users = await User.find().where({email: email});

    if(users.length > 0){
        let result = await bcrypt.compare(password, users[0].password);
        if(result){
            let token = auth.generateToken(users[0]);
            res.cookie('auth_token', token);
            res.send(
                {
                    redirectURL: '/admin',
                    message : 'User logged in'
                }
            );
        }else{
            res.send({message : 'User not found'});
        }
        
    }else{
        res.send({message : 'User not found'});
    }
});

router.post('/register', async(req,res) =>{
    let email = req.body.email;
    let password = req.body.password;
    let encryptPassword = await bcrypt.hash(password, 12);
    let users = await User.find().where({email: email});
    if(users.length === 0){
        let newUser = new User({
            email: email,
            password: encryptPassword
        })
        await newUser.save();
        res.send( { message:'User registered'});
    }else{
        res.send({ message: 'Email already exists, please login'});
    }
});

module.exports = router;