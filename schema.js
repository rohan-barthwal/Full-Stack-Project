const mongoose = require('mongoose');
const validator = require('validator'); 
const express = require('../database/conn')

// creating schema

const test = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true,
        //custom validation
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },

    fullname: {
        type: String,
        minLength: [10, "please enter the name of atleast 10 characters"],
        maxLength: [20, "please enter the name of atmost 20 characters"],
        required:true
    },

    password: {
        type: String,
        required: true,
        minLength: [8, "please enter the password of atleast 10 characters"],
        unique:true
    },

    phoneNumber: {
        type: Number,
        minLength: [10, "please enter the password of  10 digits"],
        unique:true,
        required:true
    }

    


})




//creating collection
const collection = new mongoose.model("collection", test);

//exporting
module.exports = collection;

