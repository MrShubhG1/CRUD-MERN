// first we take moongoose
const mongoose = require("mongoose")
// firt we make schema, schema he woh structure jo ki define kare ga data base mai kis type ka data rehne wala hai
const userSchema = new mongoose.Schema({
    name:{// object type  type k tarah store ho raha and isi ko bolte hai object type model 
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true, // this is use to take always email unique means this email should not be in the database
        required:true,
    },
    age:{
        type:Number,
    },
},{timestamps:true})

// abbb humlog dhacha bana liye hai jisko humlog schema bolte hai and userModel naam ka const  k andar store kar liya hai
// abb model kaam yehi ki DB se interaction karne mai model help karne wala hai

// mtbl schema ek dacha hai jo ki DB mai store rahe ga 
// and model ek way hai jiske through hum apne database se interact kar sakte hai
// mtlb jo apka crud operation hoga app dekho gai mai sara kuch model wala name k through  he karne wala hoon

//create Model
const User = mongoose.model('User', userSchema)
module.exports = User;
// collection ko use karen k liye async and await ka use karunga
