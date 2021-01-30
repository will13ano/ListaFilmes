import {api_key} from '@/api/tmdb/tmdb'
import {tmdb} from '@/api/tmdb/tmdb'

export default {
    buscaNome(nome, page){
        return tmdb.get(`search/movie?api_key=${api_key}&language=pt-BR&query=${nome}&page=${page}`)
    },
    buscaID(id){
        return tmdb.get(`movie/${id}?api_key=${api_key}&language=pt-BR`)
    }
}