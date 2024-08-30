import { IFormInput } from "../interface/interfaces";

export const formInputList:IFormInput[]=[
  {
    type:"text",
    id:"userName" ,
    name:"userName",
    placeholder:'User Name'
  },
  {
    type:"email",
    name:"email",
    id:"email" ,
    placeholder:'Email'
  },
  {
    type:"text",
    name:"address",
    id:"address" ,
    placeholder:'Address'
  },
  {
    type:"password",
    name:"password",
    id:"password" ,
    placeholder:'Password'
  }
]