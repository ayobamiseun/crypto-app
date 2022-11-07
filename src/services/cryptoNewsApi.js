import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const  cryptoNewsHeaders  = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'a923b824cbmsh73480737b6dfb20p11cbdajsn6b3b1a04efa7',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  };

  const baseUrl = "bing-news-search1.p.rapidapi.com";
  const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
  
    //   getCryptoDetails: builder.query({
    //     query: (coinId) => createRequest(`/coin/${coinId}`),
    //   }),
  
      // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    //   getCryptoHistory: builder.query({
    //     query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    //   }),
  
      // Note: To access this endpoint you need premium plan
    //   getExchanges: builder.query({
    //     query: () => createRequest('/exchanges'),
    //   }),
    }),
  });
  
  export const { useGetCryptoNewsQuery } = cryptoNewsApi;


  