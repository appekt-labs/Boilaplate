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
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String,
        default: null
    },
    resetPasswordToken: {
        type: String,
        default: null
    }
}, { timestamps: true })


//user model
export const Users = mongoose.models.Users || mongoose.model("Users", userSchema)