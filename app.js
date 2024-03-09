const express = require('express');
const app = express();
const cookiesParser = require('cookie-parser');


//middleware function post,front->json
app.use(express.json());  //global middleware hai
app.listen(3001);
app.use(cookiesParser()); //cookieparser ko invoke kardiya 


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


//  mini app
// const userRouter = express.Router();
const userRouter = require('./foodApp/Routers/userRouter.js');
// const authRouter = express.Router();
const authRouter = require('./foodApp/Routers/authRouter.js');

// base route , router to use
app.use('/user', userRouter);      //global middleware 
app.use('/auth', authRouter);





