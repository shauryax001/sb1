export interface User {
  id: string;
  fullName: string;
  email: string;
}

export interface SignupData {
  fullName: string;
  email: string;
  password: string;
}

export interface SigninData {
  email: string;
  password: string;
}