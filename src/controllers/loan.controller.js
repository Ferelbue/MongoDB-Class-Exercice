
import Loan from "../models/Loan.js"



export const createLoan = async (req, res) => {
    try {
        const { bookTitle, userId, returnDate } = req.body
        // const title = req.body.title

        if (!bookTitle || !userId || !returnDate) {
            return res.status(400).json(
                {
                    success: false,
                    message: "title user and date required"
                }
            )
        }

        const newLoan = await Loan.create(
            {
                // title: title
                bookTitle,
                userId,
                returnDate
            }
        )

        res.status(201).json(
            {
                success: true,
                message: "Loan created",
                data: newLoan
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Loan cant created",
                error: error.message
            }
        )
    }
}

export const getLoan = async (req, res) => {
    try {
        // const books = await Book.find().select('title').skip().limit();
        const books = await Book.find().select('title');

        res.status(200).json(
            {
                success: true,
                message: "Book retrieved",
                data: books
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Book cant retrieved",
                error: error.message
            }
        )
    }
}

export const udpateLoanById = async (req, res) => {
    try {
        const { title } = req.body

        const bookId = req.params.id

        if (!title) {
            return res.status(400).json(
                {
                    success: true,
                    message: "title required",
                }
            )
        }

        const bookUpdated = await Book.findOneAndUpdate(
            {
                _id: bookId
            },
            {
                title: title
            },
            {
                new: true
            }
        )

        res.status(200).json(
            {
                success: true,
                message: "Book updated",
                data: bookUpdated
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Book cant retrieved",
                error: error.message
            }
        )
    }
}


export const deleteLoanById = async (req, res) => {
    try {
        const bookId = req.params.id


        const bookDeleted = await Book.findOneAndDelete(
            {
                _id: bookId
            }
        )

        res.status(200).json(
            {
                success: true,
                message: "Book deleted",
                data: bookDeleted
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Book cant deleted",
                error: error.message
            }
        )
    }
} 