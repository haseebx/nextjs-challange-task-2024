export type UserState = {
  // user: User;
  token: string | null;
  isAuthenticated: boolean;
  status: string;
  error: string | undefined;
  isNavigated: boolean;
  // info: string | any;
};

export interface ILoginRequest {
  emailOrPhone: string;
  password: string;
}
export interface ISignupRequest {
  name: string;
  email: string;
  password: string;
  contact_number: string;
  profile_pic?: string;
  roleId: string;
}

export interface ILoginResponse {
  // data: IData;
  token: string;
  user: ResponseUser;
}
export interface ResponseUser {
  id: string;
  name: string;
  email: string;
  contact_number: string;
  email_verified:String;
  status:string;
  roleId: string;
}
// Signin With Google
export interface ISignInGoogle {
  token: string;
}
interface User {
  role: any;
  id: string;
  name: string;
  email: string;
  contact_number?: string;
  email_verified: boolean;
  roleId?: Role;
  profile_pic?: string;
}

export interface ISigninResponse {
  token: string;
  user: User;
}
export interface IAdminResponse {
  id: string;
  role: string;
}
export interface IMeUserResponse {
  id: string;
  role: string;
}
interface Role {
  id: string;
  role: string;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   contact_number: string;
//   email_verified: boolean;
//   roleId: Role;
// }
interface Role {
  id: string;
  role: string;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}

export interface UserResponse {
  user: User;
}
export interface IverifyOtp {
  phone: string;
}
export interface IverifyOtpResponse {
  msg: string;
}
export interface IverifyOtpPh {
  otp: string;
  phone: string;
}
export interface IForgotPassOtp {
  phoneNumber: string;
}