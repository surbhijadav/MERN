const {z, object, email} = require("zod")

// creating an object Schema


const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(255),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email" })
    .min(3)
    .max(255),

  phone: z.coerce
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(20),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be at least 7 characters" })
    .max(255),
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