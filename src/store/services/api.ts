import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Produto {
  id: number
  nome: string
  preco: number
  imagem: string
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-teste.vercel.app/' }), // Altere conforme sua API
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetProdutosQuery } = api
