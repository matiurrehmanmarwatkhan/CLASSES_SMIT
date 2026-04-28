import { Router } from "express";
import { sendUser } from "../controller/auth.js";

const router = Router();

router.post("/user", sendUser);

export default router;
