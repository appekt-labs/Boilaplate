import mongoose, { Document, Model } from "mongoose"


mongoose.Promise = global.Promise;
interface IUser extends Document {
    name?: string,
    email: string,
    password: string
    image?: string,
    isVerified: boolean,
    isSubscribed: boolean,
    verificationToken: null | string
    resetPasswordToken: string | null
}
const userSchema = new mongoose.Schema<IUser>({
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
    isSubscribed: {
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


type TUserModel = Model<IUser>;
//user model
export const Users: TUserModel = mongoose.models.Users || mongoose.model("Users", userSchema)


