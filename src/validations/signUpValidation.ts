// import * as yup from "yup";

// export const signUpValidation = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   email: yup.string().email("Enter valid email"),
//   // contact_number: yup.number().required('Phone Number is required'),
//   contact_number: yup
//     .string()
//     .matches(/^\d+$/, "Phone Number must be a number")
//     .min(7, "Phone Number must be at least 7 digits")
//     .required("Phone Number is required"),
//   password: yup
//     .string()
//     .required("Password is required")
//     .min(6, "Password must be at least 6 characters")
//     .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
//     .matches(
//       /[!@#$%^&*(),.?":{}|<>]/,
//       "Password must contain at least one special character"
//     ),
// });
import * as yup from "yup";

const passwordStrengthTest = (value: any, context: any) => {
  const passwordScore = context.options.context.passwordScore || 0;
  return passwordScore >= 3;
};
export const signUpValidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  contact_number: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Invalid phone number"
    ),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .test("password", "Password is not strong enough", passwordStrengthTest),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});
