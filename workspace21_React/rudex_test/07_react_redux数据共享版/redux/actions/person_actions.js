import {ADD_PERSON } from "../contant";

export const createAddPersonAction = (personObj)=>({type:ADD_PERSON,data:personObj})