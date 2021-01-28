import axios from "axios"

export const tmdb =  axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
}) 

export const api_key = '0fbd64a94a72f9a9103abee89e21b124'