const collection = require('./models/schema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "RohanApi";


const register = async (req, res) => {

    const {
        email,
        fullname,
        password,
        phoneNumber
    } = req.body;
    try {

        //checking existing user
        const existingUser = await collection.findOne({
            email: email
        });
        if (existingUser) {
            res.status(400).json({
                message: "User Already Exist"
            })
        }

        //hashing the password
        const hashPassword = await bcrypt.hash(password, 10);

        const result = await collection.create({
            email: email,
            fullname: fullname,
            password: hashPassword,
            phoneNumber: phoneNumber
        });

        //applying authorization using jsonwebtoken
        const token = jwt.sign({
            email: result.email,
            id: result._id
        }, SECRET_KEY)

        res.status(201).json({
            user: result,
            token: token
        })



    } catch (err) {
        console.log(err.message)
        res.status(500).json({
            message: err.message
        })
    }
}


//matching the credentials

const login = async (req, res) => {

    const {
        email,
        password
    } = req.body;
    try {

        const existingUser = await collection.findOne({
            email: email
        })
        if (!existingUser) {
            res.status(404).json("User Not Found");
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password)
        if (!matchPassword) {
            res.status(400).json({
                message: "Invalid Credentials"
            })
        }

        const token = jwt.sign({
            email: existingUser.email,
            id: existingUser._id
        }, SECRET_KEY)

        res.status(201).json({
            user: existingUser,
            token: token
        })
 
    } catch (err) {
        console.log(err.message);
        res.status(500).json({
            message: err.message
        })
    }

}

module.exports = {
    register,
    login
}