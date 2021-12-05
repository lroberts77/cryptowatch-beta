import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_CRYPTO_TOKEN
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

// api fetch structure
const createRquest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        GetCryptos: builder.query({
            query: (count) => createRquest(`/coins?limit=${count}`),
        }),
        GetCryptoDetails: builder.query({
            query: (coinId) => createRquest('/coins/${coinId}'),
        })
    })
})

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;