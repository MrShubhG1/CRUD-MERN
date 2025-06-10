// Express ek Node.js ka package hai jo web server banane ka kaam asaan aur optimized bana deta hai.
// Express hume ek function provide karta hai jise hum call karke ek app (server instance) bana sakte hain.
// Yeh app hume routes, middleware, request-response handling jaise features asaani se use karne deta hai.

const express = require("express");         // Express package ko import kar rahe hain
// const app = express();                      // Express function ko call karke ek app bana rahe hain
// const mongoose = require("mongoose");
const User = require("../models/userModel")

const router = express.Router();
router.post("/",async (req, res)=>{ // post is use for basically beacause we put the data in DB
// we need to grab those data which come from ui
    // var name = req.body.name       //its a one way to take and there is shortcut to destructurized
    const {name,email,age} = req.body;
    // const User = require("./models/userModel")
    try {
        const userAdded = await User.create({
            name : name,
            email : email,
            age : age,
        })
        res.status(201).json(userAdded)
    } catch (error) {
        console.log(error)
        res.status(400).json({error:error.message})
    }


})

//


//this is we create our first api
router.get("/", async (req,res)=>{ // after writting  

    //
    // read operation
    try {
        const showAll = await User.find();
        res.status(200).json(showAll)
    } catch (error) {
        console.log(error)
        res.send(500).json({error:error.message})
    }
    //

    // res.send("api running") // this part show in UI
})

//get single user as per id or email or name or age
router.get("/:id", async(req, res)=>{// :id ye likhna hoga tabhi jake woh id humlog grab kar sakte hai
    const {id} = req.params; // basically url se id bahar nikalne k liye humlog req.params use karte hai and jo bhi user enter kar raha hai input field mai and waha se bahar niaklne k liye humlog req.body use karte hai
        try {
        const singleUser = await User.findById({_id:id});
        res.status(200).json(singleUser)
    } catch (error) {
        console.log(error)
        res.send(500).json({error:error.message})
    }
})

//delete operation
router.delete("/:id", async(req, res)=>{
    const {id} = req.params; // basically url se id bahar nikalne k liye humlog req.params use karte hai and jo bhi user enter kar raha hai input field mai and waha se bahar niaklne k liye humlog req.body use karte hai
        try {
        const singleUser = await User.findByIdAndDelete({_id:id}); //_id by default db bana k bhejta hai and dusra id jo hai jo user id hit kare ga usko bole gai
        res.status(200).json(singleUser)
    } catch (error) {
        console.log(error)
        res.send(500).json({error:error.message})
    }
})


//Update or put/patch operation
router.patch("/:id", async (req,res)=>{
    const {id} = req.params;
    const {name,email,age} = req.body
    try{
        const updateUser = await User.findByIdAndUpdate(id, req.body, {new: true,})
        res.status(200).json(updateUser)
    }catch(error){
        console.log(error)
        res.status(500).json({error:error.message})
    }
})


module.exports = router
// app.listen(40000, () => {
//     console.log("Server is running on port 40000");
// });

// app.listen(40000) // and run this port no. mean at this port we can see in UI that Api is running 



// User.create({...}) — What it does:
// This is a Mongoose method used to create and save a new document in a MongoDB collection in one step.
// ✅ It:
// Validates the data using the userModel schema.
// Creates a new User document.
// Saves it to the MongoDB collection.

