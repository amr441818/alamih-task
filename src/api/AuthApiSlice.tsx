import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sunchase.backend.aait-d.com/api",
    prepareHeaders: (headers, { getState }) => {
      

  
      
     
      

      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation<any, any>({
      query: (formData) => ({
        url: "/register",
        method: "POST",
        body: formData,
      }),
    }),

    verify: builder.mutation<any, any>({
      query: (code) => ({
        url: "/verify",
        method: "POST",
        body: code,
      }),
    }),

    login: builder.mutation<any, any>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
 
    subscribe: builder.mutation<any, any>({
      query: (credentials) => ({
        url: "/newsletter",
        method: "POST",
        body: credentials,
      }),
    }),
 
 
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useSubscribeMutation
  
} = authApi;
