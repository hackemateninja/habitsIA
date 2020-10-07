export interface LoginCompanyType {
  _id: string;
  name: string;
  logo?: any;
}

export interface LoginType {
  _id: string;
  user: string;
  avatar?: any;
  email: string;
  company?: LoginCompanyType;
  token: string;
  message?: string;
}
