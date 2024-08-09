import * as Yup from "yup"

export const signUpSchemas= Yup.object({
    name:Yup.string().min(2).max(25).required("Please Enter Your Name"),
    email:Yup.string().email().required("Please Enter Your Email"),
    message:Yup.string().min(5).required("Please Enter Your Message"),
    password:Yup.string().min(6).required("Please Enter Your Password"),
    Confirm_Password:Yup.string().required().oneOf([Yup.ref("password"),null],"Password must match")
})