import * as yup from "yup";
const passwordStrengthTest = (value: any, context: any) => {
  const passwordScore = context.options.context.passwordScore || 0;
  return passwordScore >= 3;
};
export const forgotPasswordValidation = yup.object().shape({
  newPassword: yup
    .string()
    .required("Password is required")
    .test("password", "Password is not strong enough", passwordStrengthTest),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});
