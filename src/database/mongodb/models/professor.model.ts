import mongoose from "mongoose";

const professorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required!']
        },
        email: {
            type: String,
            required: [true, 'Email is required!']
        },
        profession: {
            type: String,
            required: [true, 'Profession is required!']
        },
        gender: {
            type: String,
            required: [true, 'Gender is required!']
        },
        address: {
            type: String,
            required: [true, 'Address is required!']
        }
    }
)

export const ProfessorModel = mongoose.model('Professor', professorSchema);