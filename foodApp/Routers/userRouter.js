const express = require('express');
const userRouter = express.Router();
const userModel = require('../models/userModel.js');
const protectRoute = require('./authHelper.js')
userRouter
      .route('/')
      .get(protectRoute, getUsers)    //path specific middleware hai
      .post(postUser)
      .patch(updateUser)
      .delete(deleteUser)

userRouter
      .route('/getCookies')
      .get(getCookies)

userRouter
      .route('/setCookies')
      .get(setCookies)

userRouter
      .route('/:id')
      .get(getUserById)


//2- Read user
async function getUsers(req, res) {
      // console.log(req.query);
      let allUsers = await userModel.find();
      // let user = await userModel.findOne({name:'Jasbir'});
      res.json({
            message: "list of all users",
            data: allUsers
      });
}


function postUser(req, res) {
      console.log(req.body);
      users = req.body;
      res.json({
            message: "data recived succesfully",
            user: req.body
      })
}
//3- update user
async function updateUser(req, res) {
      console.log('req.body->', req.body)
      let dataToBeupdated = req.body;
      // for (key in dataToBeupdated) {
      //       users[key] = dataToBeupdated[key];
      // }
      let user = await userModel.findOneAndUpdate({ email: "raju@gmail.com" }, dataToBeupdated)
      res.json({
            message: "data updated successfully",
            data: user
      })
}
//3- delete user
async function deleteUser(req, res) {
      // users = {};
      let dataToBeDeleted = req.body;
      let user = await userModel.findOneAndDelete(dataToBeDeleted);
      res.json({
            message: "data has been deleted",
            data: user
      })
}

// params
function getUserById(req, res) {
      console.log(req.params.id);
      console.log(req.params);
      res.send("user id received");

}


// cookies

function setCookies(req, res) {
      // res.setHeader('Set-Cookie','isLoggedIn=true')
      res.cookie('isLoggedIn', true, { maxAge: 1000 * 60 * 60 * 24, secure: true, httpOnly: true })
      // iss cookie ko koi access nahi kar sakta hai 
      res.cookie('isPrimeMember', true) //is cookie ko koi bhi access kar sakta hai 
      // q ki is ka httpOnly true nahi hai
      res.send('cookies has been set');
}

function getCookies(req, res) {

      let cookies = req.cookies.isLoggedIn;
      console.log(cookies);
      res.send('cookies recieved');
}




module.exports = userRouter;