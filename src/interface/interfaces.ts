import { ReactNode } from 'react';


export interface IProps {
  company: string;
  adress: string;
  children:ReactNode;
  loginT: string;
  stateFun:(val:string)=>void;
}
export interface IUserData {
  userName: string;
  email: string;
  address: string;
  password: string;
}
export interface IFormInput {
  type: string;
  id: string;
  name: keyof IUserData;
  placeholder: string;
}