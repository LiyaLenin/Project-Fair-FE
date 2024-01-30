import { commonAPI } from "./commonAPI"
import{SERVER_URL} from "./serverUrl"



//register api
export const registerAPI=async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}

//login api
export const loginAPI=async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
}