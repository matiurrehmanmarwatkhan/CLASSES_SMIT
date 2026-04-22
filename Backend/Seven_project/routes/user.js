import { Router } from "express";
import { profile } from "../controllers/user.js";

const routes = Router();

routes.get("/profile", profile);

export default routes;
