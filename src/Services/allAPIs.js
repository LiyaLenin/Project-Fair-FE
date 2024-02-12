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
//addproject Api

export const addprojectAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/addproject`,reqBody,reqHeader)
}
//homeproject Api

export const getHomeProjectAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/home-projects`,"","")
}
//getallproject api
export const getAllProjectAPI=async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-projects?search=${searchKey}`,"", reqHeader)
}
//userproject
export const getUserProjectAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-projects`,"",reqHeader)
}
//edit project
export const editProjectAPI=async(id, reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/project/edit/${id}`,reqBody,reqHeader)
}

// remove project
export const deleteProjectAPI = async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/project/remove/${id}`,{},reqHeader)
}
//user edit

export const updateUserProfileAPI = async (reqBody, reqHeader)=>{
    return await commonAPI("PUT", `${SERVER_URL}/user/edit`, reqBody, reqHeader)
}

