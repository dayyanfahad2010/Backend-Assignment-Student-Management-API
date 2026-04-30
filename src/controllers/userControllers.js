import { UserModel } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { successResponse } from "../responseHandler/successResponse.js";

export const updateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"].split(" ")[1];

    if (!authHeader) throw new Error("Unauthorized ,No token found");
    const UpdateProfile = req.body;
    const decoded = await jwt.verify(authHeader, process.env.JWT_SCRET_KEY);

    const findUser = await UserModel.findOne({ _id: decoded.id });
    if (!findUser) throw new Error("Invalid token");
    const user =await UserModel.findByIdAndUpdate(decoded.id,{...req.body}) 
    console.log(user);
    
    successResponse(res,"Successfully Updated Pofile",{id:decoded.id,email:decoded.email,...req.body})
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const authHeader = req.headers["authorization"].split(" ")[1];
    if (!authHeader) throw new Error("Unauthorized ,No token found");

    const decoded = await jwt.verify(authHeader, process.env.JWT_SCRET_KEY);
    if(userId !== decoded.id) throw new Error("Invalid token")

    const findUser = await UserModel.findByIdAndDelete({ _id: userId });
    if (!findUser) throw new Error("User not Found");
    
    
    successResponse(res,"User Deleted Successfully")
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const { id } = req.query;
    const findUsers = await UserModel.findById({_id:id})
    if (!findUsers) throw new Error("No User Found");
    const {_id ,email,firstName ,lastName ,age}=findUsers
    successResponse(res,"User fetched successfully",{_id,email,firstName,lastName,age})
  } catch (error) {
    next(error);
  }
};
