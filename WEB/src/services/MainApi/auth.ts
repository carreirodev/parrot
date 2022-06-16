import { AxiosError } from "axios";
import baseAPi from "./config";

interface SignIn {
    email: string, 
    password: string
}

interface User extends SignIn {
    idUser: number,
    name: string,
    apartment: string,
}

export const postUser = async (user: Omit<User, "id">) => {
    try {
        const response = await baseAPi.post("/usuario", user)
        return response.data
    } catch (error: any) {
        alert(`Error:`+ error.response.data)
    }
}

export const postSignIn = async (signIn: SignIn) => {
    try {
        const response = await baseAPi.post("/signin", signIn)
        return response.data
    } catch (error: any) {
        
    }
}