import * as yup from "yup";

export const EmailVerificationValidation = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});
