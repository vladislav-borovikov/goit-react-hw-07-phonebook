import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const phonebookApi = createApi({
    reducerPath: 'phonebookApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://627a5ce973bad50685878b0a.mockapi.io/api/v1/' }),
    tagTypes: ['CONTACT'],
    endpoints: (builder) => ({
      fethPhonebook: builder.query({
        query: () => '/contacts',
        providesTags: ['CONTACT'],
      }),
      createContact: builder.mutation({
          query: (newContact) => ({
              url: '/contacts',
              method: 'POST',
              body: newContact
          }),
        invalidatesTags: ['CONTACT'] 
      }),
      deleContact: builder.mutation({
          query: (idContact) => ({
            url: `/contacts/${idContact}`,
            method: 'DELETE',
          }),
        invalidatesTags: ['CONTACT'] 
      })
    }),
  })
  

export const { useFethPhonebookQuery, useDeleContactMutation, useCreateContactMutation } = phonebookApi

