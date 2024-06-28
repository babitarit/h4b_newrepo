import express, { Router } from "express";
import { deleteUser, updateUser } from "../controllers/userController";
const router: Router = express.Router();

router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
export default router;
