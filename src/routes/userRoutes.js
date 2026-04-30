import express from "express";
import { getUser, updateUser,deleteUser } from "../controllers/userControllers.js";

const userRoutes = express.Router();

userRoutes.get("/", getUser);
userRoutes.put("/", updateUser);
userRoutes.delete("/:id", deleteUser);

export default userRoutes;
