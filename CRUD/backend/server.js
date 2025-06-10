// Express ek Node.js ka package hai jo web server banane ka kaam asaan aur optimized bana deta hai.
// Express hume ek function provide karta hai jise hum call karke ek app (server instance) bana sakte hain.
// Yeh app hume routes, middleware, request-response handling jaise features asaani se use karne deta hai.

const express = require("express");         // Express package ko import kar rahe hain
const app = express();                      // Express function ko call karke ek app bana rahe hain
const mongoose = require("mongoose");
const dotenv =  require("dotenv")
const cors = require("cors")
app.use(cors())
dotenv.config();

const userRoute = require("./routes/userRoute")
// const User = require("./models/userModel")
// Cannot destructure property 'name' of 'req.body' as it is undefined.
//to do this we can body parser package ko or express .json ko
app.use(express.json());
//jo bhi data aa raha woh change ho jaye ga json mai in the backend

mongoose.connect(process.env.URI). // this on the it create merndb 
then(()=>{
    console.log("connected Successfully")
    app.listen(process.env.PORT || 8000, (err)=>{
        if(err) console.log("error", err)
            console.log("running successfully at", process.env.PORT)
    })
}).catch((err)=>{
    console.log("error",err)
})

app.get("/favicon.ico", (req, res) => res.status(204).end());
// Yahaan express() ek function hai — jab hum ise call karte hain, yeh ek running server object return karta hai.
// Yehi object:
// routes (like /home, /about) handle karta hai,
// requests aur responses manage karta hai,
// middleware apply karta hai.
// 👉 Is object ko hi hum "server instance" kehte hain.

//
//like user ne ui mai data fill kiya then usko backend mai store karna hai and usko bolte hai create operation
// create operation  
// to store data we make route or api



//get single user as per id or email or name or age


app.use(userRoute) // we also write like this app.use("/api/user",userRoute) then http://localhost:5000/api/router