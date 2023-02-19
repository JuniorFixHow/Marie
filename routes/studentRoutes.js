import express from "express";
import { createStudent, getAllStudent, getStudent } from "../controllers/studentcontrollers.js";

const router = express.Router();

//create students

router.post('/', createStudent);
router.get('/', getAllStudent);
router.get('/:studentid', getStudent);

export default router