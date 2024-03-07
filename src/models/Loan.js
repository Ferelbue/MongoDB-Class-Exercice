
import { Schema, model } from "mongoose";

export const LoanSchema = new Schema(
    {
        bookTitle: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        returnDate: {
            type: Date,
            required: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Loan = model('Loan', LoanSchema)

export default Loan