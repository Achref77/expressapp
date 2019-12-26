const express = require("express");
const app = express();
const hbs = require("hbs");

app.use((req, res, next) => {
  let requestAt = new Date().getHours();
  console.log(requestAt);
  if (requestAt > 9) next();
  else res.sendFile(__dirname +'/public/404 not found.html');
});

app.use(express.static(__dirname + "/public"));

app.listen(3000, err => {
  if (err) console.log("server is not runing");
  else console.log("server is runing in port 3000");
});

// app.set('view engine',hbs)
// app.get('/connected_user',(req,res)=>{
//     // res.send()
//     // res.sendFile()
//     res.render('user.hbs')
// })

// app.get('/contact',(req,res)=>{
//     res.sendFile(__dirname +'/public/home.html')
// })

// app.get('/contact',(req,res)=>{
//     res.sendFile(__dirname +'/public/ourservices.html')
// })

// app.get('/contact',(req,res)=>{
//     res.sendFile(__dirname +'/public/contact.html')
// })

// app.use(express.static(__dirname+'/public'))

// adddatereq=(req,res,next)=>{
//     let requestAt = new Date()
//     console.log(requestAt)
//     next()
// }

// // console.log(app)
// app.get('/users/:nom',adddatereq,(req,res)=>{
//     console.log(req.params)
//     res.send(req.params.nom +'is connected')
// })

// app.get('/product',(req,res)=>{
//     res.send("hello this the product page")
// })
// app.get('/user',(req,res)=>{
//     res.send("hello this the user page")
// })
// app.get('/story',(req,res)=>{
//
