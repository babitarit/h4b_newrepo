import express, { Router } from "express";
import { deleteUser, showUser, updateUser } from "../controllers/userController";
const router: Router = express.Router();


router.get("/user/:id", showUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/user", (req, res) => {
    res.json({ status: "ok" });
});
export default router;
