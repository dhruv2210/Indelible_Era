const express = require('express');
const app=express();

//Middleware
const middleware=(req,res)=>{
  console.log("middleware");
  next();
}
middleware();



app.get('/',(req,res)=>{
  res.send(`Hello world`);

});
app.get('/about',middleware,(req,res)=>{
  res.send(`Hello abt world`);

});
app.get('/contact',(req,res)=>{
  res.send(`Hello cnt world`);

});
app.get('/',(req,res)=>{
  res.send(`Hello world`);

});
app.listen(3000,()=>{
    console.log("server");
})
