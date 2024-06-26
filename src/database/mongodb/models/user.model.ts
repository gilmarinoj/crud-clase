import mongoose from "mongoose";
import { Roles } from '../../../domain/entities/roles/roles';

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
            type: [String],
            enum: Object.values(Roles),
            default: ['ADMIN_ROLE'],
        },
        img:{
            type: String,
        },
    });

export const UserModel = mongoose.model('User', userSchema);
