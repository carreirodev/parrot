import axios from "axios";
import { User, SigIn, Post } from "./types";

const api = axios.create({baseURL: "http://localhost:4000"});

export const getUsers = ():Promise<User> =>{
    return  api.get<User>(`/user/`).then(renponse=>renponse.data)
}

export const createUser2 = async (user: Omit<User, 'id'>): Promise<User> => {
    try {
        return await api.post("/usuario",user);
    } catch (error) {
        return error as unknown as User;
    }

}

export const loginUser = async (signIn: SigIn) => {
    try {
        const response = await api.post("/login",signIn);
        return response.data
    } catch (error) {
        return error;
    }

}