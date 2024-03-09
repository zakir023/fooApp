// check the user login or not
// let flage=true; //user loged in or not 

const jwt = require('jsonwebtoken');
const  JWT_KEY=require('../Routers/authRouter');

function protectRoute(req, res, next) {
      if (req.cookies.login)
       {
            // console.log(req.cookies);
            let isVarified=jwt.verify(req.cookies.login,JWT_KEY);
            if(isVarified)
            {
                  next();
            }
            else{
                  return res.json({
                        message:"user not verified"
                  })
            }

           
      }
      else {
            res.json({
                  message: "operation not allowed"
            })
      }
}

module.exports = protectRoute;