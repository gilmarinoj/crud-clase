import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'name is required'],
        },
        email:{
            type: String,
        },
        password:{
            type: String,
        },
        roles:{
            type: Array<String>,
            default: ['USER_ROLE'],
        },
        img:{
            type: String,
        },
    });

export const UserModel = mongoose.model('User', userSchema);
