import axios from "axios";

// BASE https://api.themoviedb.org
// URL KEY movie/now_playing?api_key=a5e392e03ce076f6916518aa1a3302c3&language=pt-BR
// Teste cartaz: https://api.themoviedb.org/3/movie/now_playing?api_key=a5e392e03ce076f6916518aa1a3302c3&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;