import * as yup from "yup";
const passwordStrengthTest = (value: any, context: any) => {
  const passwordScore = context.options.context.passwordScore || 0;
  return passwordScore >= 3;
};
export const resetPasswordValidation = yup.object().shape({
  oldPassword: yup.string().required("Old password is required"),
  newPassword: yup
    .string()
    .required("Password is required")
    .test("password", "Password is not strong enough", passwordStrengthTest),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});
