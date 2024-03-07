
import { Schema, model } from "mongoose";

export const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Book = model('Book', BookSchema)

export default Book