import { Post } from "./Http";


export const LoginService=async (body)=>{
    return await Post('http://localhost:3001/api/auth/login',body)
}

export const SignInService=async (body)=>{
    return await Post('http://localhost:3001/api/auth/signIn',body)
}