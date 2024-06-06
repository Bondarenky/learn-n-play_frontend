import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IClass, ISectionAdd, ITest, ITestAdd, ITestSubmit } from "../types";
import { getTokenFromLocalStorage } from "../helpers/localstorage.helper";

export const classesApi = createApi({
    reducerPath: "classesInfo",
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
    tagTypes: ["Classes"],
    endpoints: build => ({
        getClass: build.query<IClass, number>({
            query: (grade: number) => ({
                url: `/classes/${grade}`
            }),
            providesTags: ["Classes"]
        }),
        addSection: build.mutation<ISectionAdd, ISectionAdd>({
            query: (body: ISectionAdd) => ({
                url: `/themes/${body.grade}`,
                method: "POST",
                body
            }),
            invalidatesTags: ['Classes']
        }),
        deleteSection: build.mutation<string, string>({
            query: (sectionId: string) => ({
                url: `/themes/${sectionId}`,
                method: "DELETE",
                responseHandler: "text"
            }),
            invalidatesTags: ['Classes']
        }),
        addTest: build.mutation<ITestAdd, ITestAdd>({
            query: (body: ITestAdd) => ({
                url: "/tests",
                method: "POST",
                body
            }),
            invalidatesTags: ['Classes']
        }),
        deleteTest: build.mutation<string, string>({
            query: (id: string) => ({
                url: `/tests/${id}`,
                method: "DELETE",
                responseHandler: "text"
            }),
            invalidatesTags: ['Classes']
        }),
        getTest: build.query<ITest, string>({
            query: (id: string) => ({
                url: `/tests/${id}`
            }),
            providesTags: ["Classes"]
        }),
        sendTest: build.mutation<ITestSubmit, ITestSubmit>({
            query: (body: ITestSubmit) => ({
                url: `/grades`,
                method: "POST",
                body
            }),
            invalidatesTags: ['Classes']
        }),
    })
})

export const { 
                useGetClassQuery, 
                useAddSectionMutation, 
                useAddTestMutation, 
                useDeleteTestMutation, 
                useDeleteSectionMutation, 
                useGetTestQuery, 
                useSendTestMutation} = classesApi