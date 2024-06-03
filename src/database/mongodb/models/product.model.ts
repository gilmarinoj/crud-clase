import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required!']
        },
        price: {
            type: Number,
            required: [true, 'Price is required!']
        },
        description: {
            type: String,
            required: [true, 'Description is required!']
        },
        img: {
            type: String 
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: 'Category',
            required: [true, 'Category is required!']
        }
    }
)

export const ProductModel = mongoose.model('Product', productSchema);