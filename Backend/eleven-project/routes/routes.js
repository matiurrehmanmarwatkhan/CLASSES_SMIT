import { Router } from "express";
import { createBlog } from "../controllers/blog.js";

const router = Router();

router.post("/blogs", createBlog);

export default router;
