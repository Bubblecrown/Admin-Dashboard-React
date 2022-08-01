// response from login and register

export interface loginResult {
  result: string;
  token?: string;
  message: string;
}

export interface registerResult {
  result: string;
  token?: string;
  message: string;
}
