import mongoose from "mongoose";
import personalDetails from "../model/personalDetails.js";

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    address:{
        type : String,
        required : true
    },
    personalDetails:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "personalDetails.js"
    }
})

export default mongoose.model("users",userSchema);

// {
//     "_id": "670f94c1bcc28c88742fc633",
//     "name": "Harish",
//     "email": "harish007@gmail.com",
//     "address": "London",
//      "personDetails":{
//       "dob":"10/03/2003",
//       "userId":"_id"
// }
//     "__v": 0
// },

// 1 to 1 -- personalDetails
// 1 to n -- educationDetails
// n to n -- 