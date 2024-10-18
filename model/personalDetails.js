import mongoose from "mongoose";

const personalDetailsSchema = new mongoose.Schema({
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
});

export default mongoose.model("personalDetails", personalDetailsSchema);


// personalDetailsSchema.findById()
//     .populate('personalDetails.js') 
//     .exec((err, user) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log(user);
//         }
//     });
