
import { Router } from "express";
import { createLoan, deleteLoanById, getLoan, udpateLoanById } from "../controllers/loan.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router()

router.post('/', auth, createLoan)
router.get('/', auth, getLoan)
router.put('/:id', auth, udpateLoanById)
router.delete('/:id', auth, deleteLoanById)

export default router


