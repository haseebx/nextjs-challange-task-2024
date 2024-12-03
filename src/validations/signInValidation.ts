import * as yup from "yup";

export const signInValidation = yup.object().shape({
  emailOrPhone: yup
    .string()
    .required("Phone Number or Email is required")
    .matches(
      /^(?:\+?\d{1,3})?\d{10,14}$|^[\w._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Please enter a valid Phone Number or Email"
    ),
  password: yup.string().required("Password is Required"),
});
      