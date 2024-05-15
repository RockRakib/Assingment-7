import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assingment-7.vercel.app",
  }),
  tagTypes: ["comment", "supply", "test", "volunteer"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => "/community",
      providesTags: ["comment"],
    }),
    getSupplies: builder.query({
      query: () => "/dashboard/supplies",
      providesTags: ["supply"],
    }),
    getVolunteer: builder.query({
      query: () => "/volunteer",
      providesTags: ["volunteer"],
    }),
    getLeaderBoard: builder.query({
      query: () => "/dashboard/supplies",
    }),
    getTestimonials: builder.query({
      query: () => "/testimonial",
      providesTags: ["test"],
    }),
    getSupply: builder.query({
      query: (id) => `/dashboard/supplies/${id}`,
    }),
    addComment: builder.mutation({
      query: (data) => ({
        url: "/community",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),
    addSupply: builder.mutation({
      query: (data) => ({
        url: "/dashboard/create-supply",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["supply"],
    }),
    addTestimonial: builder.mutation({
      query: (data) => ({
        url: "/dashboard/create-testimonial",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["test"],
    }),
    addVolunteer: builder.mutation({
      query: (data) => ({
        url: "/volunteer",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["volunteer"],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useAddCommentMutation,
  useAddSupplyMutation,
  useGetSuppliesQuery,
  useGetSupplyQuery,
  useAddTestimonialMutation,
  useGetTestimonialsQuery,
  useGetLeaderBoardQuery,
  useGetVolunteerQuery,
  useAddVolunteerMutation,
} = apiSlice;
