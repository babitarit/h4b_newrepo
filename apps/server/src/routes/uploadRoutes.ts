import express, { Router } from "express";
import { uploadFiles } from "../controllers/speechController";
import fileUpload from "../lib/fileUpload";
const router: Router = express.Router();

router.post("/", fileUpload, uploadFiles);
export default router;
