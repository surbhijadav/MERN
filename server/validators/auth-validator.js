const {z, object, email} = require("zod")

// creating an object Schema
const signupSchema =  z.object({
    username :z.string({required_error:"Name is require"})
    .trim()
    .min(3, {message:"Name must be atleast of 3 character"})
    .max(255, {message:"Name must not be more than 255 character"}),

    email :z.string({required_error:"email is require"})
    .trim()
    .email({message:"Invalid email"})
    .min(3, {message:"email must be atleast of 3 character"})
    .max(255, {message:"email must not be more than 255 character"}),

    phone :z.string({required_error:"phone number is require"})
    .trim()
    .min(10, {message:"phone number must be 10 character"})
    .max(20, {message:"phone number must not be more than 255 character"}),

    password :z.string({required_error:"password is require"})
    .trim()
    .min(7, {message:"password must be atleast of 7 character"})
    .max(255, {message:"password must not be more than 255 character"})
});

const loginSchema = z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email format" }),
  
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters" }),
  });

module.exports = {signupSchema,loginSchema};