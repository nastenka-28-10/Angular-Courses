export interface UserInterface {
  login: string;
  password: string;
}

export interface AuthData {
  token: string;
}

export interface UserInfo {
  id: number;
  fakeToken: string;
  name: {
    first: string;
    last: string;
  };
  login: string;
  password: string;
}
