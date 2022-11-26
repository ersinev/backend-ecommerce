const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const mongoose = require('mongoose')
const { Schema} = mongoose;
main().catch(err => console.log(err));

app.use(express.json());

async function main() {
  await mongoose.connect('mongodb://localhost:27017/eCommerce');
}

const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const user = new Schema({
    name: String,
    password: String,
    email: String 
  });

  const UserModel = mongoose.model('users', user);
  
  // const doc = new Person({
  //   //     name: 'Ersin',
  //   //     password: 'ersin123',
  //   //     email: 'ersin@hotmail.com'
  //   //   });
      
  //   // await doc.save();
  //   // console.log('adad')




app.post('/login', async (req,res)=>{
    const{username,password} = req.body
   UserModel.findOne({name:username},(errs,doc)=>{
      if(doc!=null && password==doc.password){
        res.send({isSuccess:true, user:{username:doc.name,email:doc.email}})
      }
      else{
       res.send('user not find')
      }
    })
    
   console.log('dsdsdsds')
    
})

const ev = (eer,asa)=>{
  if(eer){
    console.log('hata')
  }
  else{

  }
}

app.listen(4000, ()=>{
    console.log('asdaasdasdasdasdad')
})

