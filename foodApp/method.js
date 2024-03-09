// const express = require('express');
// const app = express();
// const userModel=require('./models/userModel');

// // const cookiesParser=require('cookie-parser');


// //middleware function post,front->json
// app.use(express.json());  //global middleware hai
// app.listen(3001);


// let users = [
//       {
//             'id': 1,
//             'name': 'Abhishek'
//       },
//       {
//             'id': 2,
//             'name': 'Jasbir'
//       },
//       {
//             'id': 3,
//             'name': 'Kartik'
//       }
// ];

// //  mini app
// const userRouter = express.Router();
// const authRouter = express.Router();
// // base route , router to use
// app.use('/user', userRouter);      //global middleware 
// app.use('/auth', authRouter);

// userRouter
//       .route('/')
//       .get(getUsers)    //path specific middleware hai
//       .post(postUser)
//       .patch(updateUser)
//       .delete(deleteUser)

// userRouter
//       .route('/:id')
//       .get(getUserById)

// authRouter
//       .route('/signup')
//       .get(middleware1, getSignUp, middleware2)
//       .post(postSignUp);



// // app.use(cookiesParser()); //cookieparser ko invoke kardiya 
// // //now we create a mini app 
// // //mini app
// // const userRouter = require('./foodApp/Routers/userRouter.js');
// // const authRouter=require('./foodApp/Routers/authRouter.js');
// // //base router,router to use
// // app.use('/user', userRouter);
// // app.use('/auth',authRouter);


// //2- Read user
// async function getUsers(req, res) {
//       // console.log(req.query);
//       let allUsers = await userModel.find();
//       // let user = await userModel.findOne({name:'Jasbir'});
//       res.json({
//             message: "list of all users",
//             data: allUsers
//       });
// }


// function postUser(req, res) {
//       console.log(req.body);
//       users = req.body;
//       res.json({
//             message: "data recived succesfully",
//             user: req.body
//       })
// }
// //3- update user
// async function updateUser(req, res) {
//       console.log('req.body->', req.body)
//       let dataToBeupdated = req.body;
//       // for (key in dataToBeupdated) {
//       //       users[key] = dataToBeupdated[key];
//       // }
//       let user = await userModel.findOneAndUpdate({ email: "raju@gmail.com" }, dataToBeupdated)
//       res.json({
//             message: "data updated successfully",
//             data: user
//       })
// }
// //3- delete user
// async function deleteUser(req, res) {
//       // users = {};
//       let dataToBeDeleted = req.body;
//       let user = await userModel.findOneAndDelete(dataToBeDeleted);
//       res.json({
//             message: "data has been deleted",
//             data: user
//       })
// }

// // params
// function getUserById(req, res) {
//       console.log(req.params.id);
//       console.log(req.params);
//       res.send("user id received");

// }

// // middleware
// function middleware1(req, res, next) {
//       console.log("middleware1 encounter");
//       next();

// }
// function middleware2(req, res) {
//       console.log("middleware2 encounter");
//       // next();
//       console.log("middleware 2 ended req/res cycle")
//       res.sendFile('./public/index.html', { root: __dirname })

// }

// // auth
// function getSignUp(req, res, next) {
//       console.log("getSignUp called");
//       next();

//       // res.sendFile('/foodApp/public/index.html', { root: __dirname })
// }

// // 2-read operation
// async function postSignUp(req, res) {

//       let dataObj = req.body;
//       let user = await userModel.create(dataObj);
//       // console.log('backend', user);
//       res.json({
//             message: "user signed up",
//             data: user
//       });
// }
