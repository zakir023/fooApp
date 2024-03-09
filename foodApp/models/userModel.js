
const mongoose = require('mongoose');
const emailValidator = require('email-validator');
const bcrypt=require('bcrypt');
// connect to mongoDB with our app
// first install the mongoose then connect the mongoDB

const db_link = 'mongodb+srv://admin:CNMaXkVx2TxGjCYe@cluster0.lfxkgwh.mongodb.net/';
mongoose.connect(db_link)
      .then(function (db) {
            // console.log(db)
            console.log('db connected');
      })
      .catch(function (err) {
            console.log(err);
      })

//creat a Schema

const usereSchema = mongoose.Schema({
      name: {
            type: String,
            required: true
      },
      email: {
            type: String,
            required: true,
            unique: true,
            validate: function () {
                  return emailValidator.validate(this.email);
            }
      },
      password: {
            type: String,
            required: true,
            minLength: 8
      },
      confirmPassword: {
            type: String,
            required: true,
            minLength: 8,
            validate: function () {
                  return this.confirmPassword == this.password;
            }
      }
});

// // pre post hooks
// // before save event occure in db
// usereSchema.pre('save',function(){
//       console.log('before saving in database',this); // this-:jis data ko hum save karne wale hain usko access karta hai 
// })
// // after save event occure in db
// usereSchema.post('save',function(doc){
//       console.log('after saving in database',doc);  //doc:data save hone ke bad hum data ko doc ke zariye save kar sakte hain
// })
// remove explor on own

usereSchema.pre('save', function () {
      this.confirmPassword = undefined;
})

// usereSchema.pre('save',async function(){
//       let salt= await bcrypt.genSalt();
//       let hashedString= await bcrypt.hash(this.password,salt);
//       // console.log(hashedString);
//       this.password=hashedString;
// })



// create model 
//and in the model we are passing two argument
const userModel = mongoose.model('userModel', usereSchema);
module.exports = userModel;




// create a user
// (async function createUser(){
//       let user={
//             name:'Jasbir',
//             email:'Jasbir@gmail.com',
//             password:'123456789',
//             confirmPassword:'123456789'
//       };
//       let data=await userModel.create(user);
//       console.log(data);
// })();

