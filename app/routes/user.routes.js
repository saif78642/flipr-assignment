// routes/userRoutes.ts
import express from "express";
import {adminLogin} from "../controllers/admin.js";
import {registerUser, registerAdmin} from "../controllers/register.js";
import {getAllUsers,getUserProfile,updateProfile} from "../controllers/users.js";
import {checkUsernameAvailability} from "../controllers/username.js";
import {login} from "../controllers/login.js";
import { verifyUserToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/admin-login', adminLogin);
router.post("/register", registerUser);
router.post("/register-admin", registerAdmin);
router.post("/login", login);
router.get("/get/users", getAllUsers);
router.get('/check-username/:username', checkUsernameAvailability);
router.get('/user/profile', verifyUserToken, getUserProfile);
router.put('/user/profile', verifyUserToken, updateProfile);

export default router;
