import mongoose from "mongoose"





mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
    },
    password: String,
    image: String,
}, { timestamps: true })


//user model
export const Users = mongoose.models.Users || mongoose.model("Users", userSchema)