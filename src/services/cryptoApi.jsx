import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '8fc63b4210mshb84242c171adc21p17e6e8jsn0eaeee4ed843'
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
        })
    })
})

export const { useGetCryptosQuery, } = cryptoApi;