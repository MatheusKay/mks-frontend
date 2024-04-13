import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Products = {
  count: number
  products: {
    id: number
    name: string
    brand: string
    description: string
    photo: string
    price: string
    createdAt: string
    updatedAt: string
  }[]
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products'
  }),
  endpoints: (builder) => ({
    getProductsACS: builder.query<
      Products,
      { page?: number; rows?: number; sortBy?: string; orderBy?: string }
    >({
      query: (queryParameters) => ({
        url: '',
        params: {
          page: queryParameters.page || 1,
          rows: queryParameters.rows || 10,
          sortBy: queryParameters.sortBy || 'name',
          orderBy: queryParameters.orderBy || 'ASC'
        }
      })
    })
  })
})

export const { useGetProductsACSQuery } = api

export default api
