import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getTokenFromLocalStorage } from "../helpers/localstorage.helper";
import { IStudent, IUserRegister } from "../types";

export const studentsApi = createApi({
    reducerPath: "students",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        prepareHeaders: (headers) => {
            const token = getTokenFromLocalStorage();
            if (token ) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    tagTypes: ['Students'],
    endpoints: build => ({
        createStudent: build.mutation<IUserRegister, IUserRegister>({
            query: (body: IUserRegister) => ({
                url: "/teachers/students",
                method: "POST",
                body
            }),
            invalidatesTags: ['Students']
        }),
        getStudents: build.query<IStudent[], string>({
            query: (email: string) => ({
                url: `/grades/teachers/students/${email}`
            }),
            providesTags: ['Students']
        }),
        deleteStudent: build.mutation<string, string>({
            query: (id: string) => ({
                url: `/users/${id}`,
                method: "DELETE",
                responseHandler: "text"
            }),
            invalidatesTags: ['Students']
        })
    })
})

export const { useCreateStudentMutation, useGetStudentsQuery, useDeleteStudentMutation } = studentsApi