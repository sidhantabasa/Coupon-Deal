import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(30).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your mail"),
  password: Yup.string().min(8).required("Please enter your Password"),
  confirmpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must be Same"),
});
