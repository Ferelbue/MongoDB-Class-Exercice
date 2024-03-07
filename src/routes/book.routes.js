
import { Router } from "express";
import { createBook, deleteBookById, getBooks, udpateBookById } from "../controllers/book.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router()

router.post('/', auth, createBook)
router.get('/', auth, getBooks)
router.put('/:id', auth, udpateBookById)
router.delete('/:id', auth, deleteBookById)

export default router


