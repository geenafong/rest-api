'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },    
    emailAddress: {
        type: String,
        required: [true, 'Email Address is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },})

const CourseSchema = new Schema({
    user:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
       },
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },    
    estimatedTime: String,
    materialsNeeded: String
})

UserSchema.pre("save", function(next){
    bcrypt.genSalt(saltRounds, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(this.password, salt, function (err, hash) {
          if (err) return next(err);
          this.password = hash;
          next();
        });
      });
    });

const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports.Course = Course;
module.exports.User = User;