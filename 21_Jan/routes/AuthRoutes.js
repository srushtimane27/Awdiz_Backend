import { Router } from "express";
import { register } from "../Controllers/Auth.controllers.js";

const router = Router();

router.post('/register', register);

export default router;