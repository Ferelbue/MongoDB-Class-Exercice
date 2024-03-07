
import Loan from "../models/Loan.js"


export const createLoan = async (req, res) => {
    try {
        const bookTitle = req.body
        const userId = req.tokenData.userId

        console.log(userId)
        console.log(bookTitle.bookTitle)
        // const title = req.body.title

        if (!bookTitle || !userId) {
            return res.status(400).json(
                {
                    success: false,
                    message: "title user and date required"
                }
            )
        }

        const today = new Date();

        const loanDays = 5;

        today.setDate(today.getDate() + loanDays);

        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const day = ('0' + today.getDate()).slice(-2);
        const hour = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        const loanDate = year + "-" + month + "-" + day + "  " + hour + ":" + minutes + ":" + seconds;

        const newLoan = await Loan.create(
            {
                bookTitle: bookTitle.bookTitle,
                userId,
                returnDate: loanDate
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
        // const books = await Loan.find().select('title');

        const printLoans = [];
        const userInfo = req.tokenData

        const loans = await Loan.find(
            {
                userId: userInfo.userId
            }
        )


        console.log(loans)

        for (let i = 0; i < loans.length; i++) {

            const { _id, bookTitle, userId, returnDate, ...rest } = loans[i]
            printLoans.push({ _id, bookTitle, userId, returnDate })
        }

        res.status(200).json(
            {
                success: true,
                message: "Loans retrieved",
                data: printLoans
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Loans cant retrieved",
                error: error.message
            }
        )
    }
}

export const udpateLoanById = async (req, res) => {
    try {

        const loanId = req.params.id
        console.log(loanId)

        if (!loanId) {
            return res.status(400).json(
                {
                    success: true,
                    message: "LoandID and return date requared",
                }
            )
        }

        const today = new Date();

        const loanDays = 5;

        today.setDate(today.getDate() + loanDays);

        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const day = ('0' + today.getDate()).slice(-2);
        const hour = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        const loanDate = year + "-" + month + "-" + day + "  " + hour + ":" + minutes + ":" + seconds;


        const loanUpdated = await Loan.findOneAndUpdate(
            {
                _id: loanId
            },
            {
                returnDate: loanDate
            },
            {
                new: true
            }
        )

        if (!loanUpdated) {
            return res.status(400).json(
                {
                    success: true,
                    message: "LoandID doesnt exists in the DB",
                }
            )
        }

        res.status(200).json(
            {
                success: true,
                message: "Loan updated",
                data: loanUpdated
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
        const loanId = req.params.id


        const loanDeleted = await Loan.findOneAndDelete(
            {
                _id: loanId
            },
            {
                new: true
            }
        )

        if (!loanDeleted) {
            return res.status(400).json(
                {
                    success: true,
                    message: "LoandID doesnt exists in the DB",
                }
            )
        }

        res.status(200).json(
            {
                success: true,
                message: "Loan deleted",
                data: loanDeleted
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Loan cant deleted",
                error: error.message
            }
        )
    }
} 