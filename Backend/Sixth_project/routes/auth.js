import { Router } from "express";
import { signup } from "../controllers/auth.js";
import { appendFile } from "node:fs";

const router = Router();

router.get("/signup", signup);
