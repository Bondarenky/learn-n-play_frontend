import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMyCourses, IUserProfile } from "../types";
import { getTokenFromLocalStorage } from "../helpers/localstorage.helper";

export const userApi = createApi({
    reducerPath: "userInfo",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        prepareHeaders: (headers) => {
            const token = getTokenFromLocalStorage();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    tagTypes: ['User'],
    endpoints: build => ({
        getUser: build.query<IUserProfile, string>({
            query: () => ({
                url: "/users/current"
            }),
            providesTags: ['User'],
        }),
        getMySections: build.query<IMyCourses[], string>({
            query: (email: string) => ({
                url: `/themes/${email}`
            }),
            providesTags: ['User'],
        }),
    })
})

export const {useGetUserQuery, useGetMySectionsQuery} = userApi