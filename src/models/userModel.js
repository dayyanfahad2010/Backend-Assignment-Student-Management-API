import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  password_reset_otp: String,
  password_reset_otpExpiry: Date,
  
  email_verification_otp: String,
  email_verification_otpExpiry: Date,
  
  isVerified: {
    type: Boolean,
    default: false,
  },
},{ 
  timestamps: { createdAt: 'created_at', updatedAt: false } 
});

export const UserModel = mongoose.model("users", authSchema);
