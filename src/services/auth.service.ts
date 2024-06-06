import { instance } from "../api/axios.api";
import {IUserLogin, IUserLoginResponse, IUserRegister } from "../types";

export const AuthService = {
    async registration(userData: IUserRegister): Promise<string | undefined> {
        const {data} = await instance.post<string>('auth/sign-up', userData);
        return data;
    },
    async login(userData: IUserLogin): Promise<IUserLoginResponse | undefined> {
        const {data} = await instance.post<IUserLoginResponse>('auth/sign-in', userData)
        
        return data;
    },

}