import tmdbFunc from '@/api/tmdb/tmdbFunc'

export default{
    save(email, lista){
        localStorage.setItem(`_listfilmes${email}`, JSON.stringify(lista));
    },
    load(email){
        return JSON.parse(localStorage.getItem(`_listfilmes${email}`) || '[]')
    },
    loadFilmes(email){
        var listaID = JSON.parse(localStorage.getItem(`_listfilmes${email}`) || '[]')
        var listaFilmes = [];

        for(var cont = 0; cont < listaID.length; cont++){
            tmdbFunc.buscaID(listaID[cont])
            .then((filme) => {
                listaFilmes.push(filme.data)
            })
        }
        
        return listaFilmes;
    }
}