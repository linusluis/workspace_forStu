import { ADD_PERSON } from "../contant";
export const createAddPersonAction = (name,age) =>({type:ADD_PERSON,name,age});