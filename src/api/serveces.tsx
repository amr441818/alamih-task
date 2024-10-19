import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";
export const servecesApi = createApi({
  reducerPath: "servecesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://celiac-backend.oc.kian.work/api/v1/",
    prepareHeaders(headers, api) {
      const token = localStorage.getItem("celiacToken");
      if (token) {
        const convertedToken = JSON.parse(token);

        headers.set("Authorization", `Bearer ${convertedToken}`);
      }

      // headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      headers.set("Accept-Language", "ar");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    GetScientificResearches: builder.query<any, void>({
      query: () => ({
        url: "scientific-researches",
        method: "GET",
        headers: {
          "Accept-Language": "ar",
        },
      }),
    }),
    getTranslatedBooks: builder.query<any, void>({
      query: () => ({
        url: "translated-books",
        method: "GET",
        headers: {
          "Accept-Language": "ar",
        },
      }),
    }),
    getGuidanceManual: builder.query<any, void>({
      query: () => ({
        url: "guidance-manual",
        method: "GET",
        headers: {
          "Accept-Language": "ar",
        },
      }),
    }),

    getAllClinics: builder.query<any, void>({
      query: () => ({
        url: "clinics",
        method: "GET",
        headers: {
          "Accept-Language": "ar",
        },
      }),
    }),

    createCeliacCard: builder.mutation<any, any>({
      query: (userData) => ({
        url: "celiac-card-request",
        method: "POST",
        body: userData,
      }),
      // invalidatesTags: ['UserDel1'],
    }),
    createJobHiring: builder.mutation<any, any>({
      query: (userData) => ({
        url: "job-request",
        method: "POST",
        body: userData,
      }),
      // invalidatesTags: ['UserDel1'],
    }),
    createFoodBasket: builder.mutation<any, any>({
      query: (userData) => ({
        url: "food-basket-request",
        method: "POST",
        body: userData,
      }),
      // invalidatesTags: ['UserDel1'],
    }),
    createHajRequest: builder.mutation<any, any>({
      query: (userData) => ({
        url: "hajj-request",
        method: "POST",
        body: userData,
      }),
      // invalidatesTags: ['UserDel1'],
    }),
    createReservation: builder.mutation<any, any>({
      query: (formData) => ({
        url: "create-reservation",
        method: "POST",
        body: formData,
      }),
      // invalidatesTags: ['UserDel1'],
    }),
    createVolunteerRequest: builder.mutation<void, any>({
      query: (formData) => ({
        url: "volunteer-request",
        method: "POST",
        body: formData,
      }),
      // invalidatesTags: ['UserDel1'],
    }),

    availableDayTime: builder.mutation<any, any>({
      query: (formData) => ({
        url: "calendar-days/list",
        method: "POST",
        body: formData,
      }),
      // invalidatesTags: ['UserDel1'],
    }),
  }),
});
export const {
  useGetScientificResearchesQuery,
  useAvailableDayTimeMutation,
  useGetTranslatedBooksQuery,
  useGetGuidanceManualQuery,
  useCreateCeliacCardMutation,
  useGetAllClinicsQuery,
  useCreateJobHiringMutation,
  useCreateReservationMutation,
  useCreateHajRequestMutation,
  useCreateVolunteerRequestMutation,
  useCreateFoodBasketMutation
  
} = servecesApi;
