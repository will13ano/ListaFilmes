<template>
    <v-container fluid>
        <v-row>
            <v-col
                cols='11'
            >
            <v-text-field
            outlined
            label="Buscar Filme"
            v-model="toSearch"
            append-icon='mdi-feature-search'
            @click:append="search()"
            v-on:keyup.enter="search()"
            ></v-text-field>
            </v-col>
            <v-col>
            <v-btn
                @click="clear()"
            ><v-icon>mdi-trash-can-outline</v-icon></v-btn>
            </v-col>
        </v-row>
        <v-container>
            <v-row v-for="filme in resultadoBusca" :key="filme.id">
                <v-col>
                    <v-card
                        outlined
                        style="display: flex; flex-direction: row-reverse;"
                        elevation="13"
                        widht="100%"
                    >

                        <img :src="`http://image.tmdb.org/t/p/original/${filme.poster_path}`" height="240" />
                        
                        <div>
                            <v-card-title>{{filme.title}}</v-card-title>
                            <v-card-subtitle>{{filme.original_title}}</v-card-subtitle>
                            <v-card-text>{{filme.overview}}</v-card-text>
                            <v-spacer></v-spacer>
                            <v-card-actions>
                                <v-btn
                                    @click="list(filme)"
                                >
                                   Adicionar a lista
                                </v-btn>
                            </v-card-actions>
                        </div>
                    </v-card>
                    <v-snackbar
                        v-model="snackbar"
                        timeout="2000"
                    >Adicionado a lista</v-snackbar>
                    <v-spacer></v-spacer>
                </v-col>
            </v-row>
        </v-container>
        <v-bottom-navigation hide-on-scroll>
            <v-btn
                @click="setPage(true)"
            >
                <span>Primeira</span>
                <v-icon>mdi-page-first</v-icon>
            </v-btn>
            <v-btn
                @click="prevPage()"
            >
                <span>Anterior</span>
                <v-icon>mdi-page-previous</v-icon>
            </v-btn>
            
            <v-btn
                @click="nextPage()"
            >
                <span>Proxima</span>
                <v-icon>mdi-page-next</v-icon>
            </v-btn>
            <v-btn
                @click="setPage(false)"
            >
                <span>Ultima</span>
                <v-icon>mdi-page-last</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </v-container>
</template>

<script>
import tmdbFunc from '@/api/tmdb/tmdbFunc'
import loginServices from '@/firebase/login'
import listServices from '@/firebase/lista'

export default {
    data: () => ({
        snackbar: false,
        page: '1',
        maxPages: '',
        toSearch: '',
        resultadoBusca: [],
        lista: []
    }),
    methods: {
        search(){
            this.page = '1';
            tmdbFunc.buscaNome(this.toSearch, this.page)
            .then((results) =>{
                this.resultadoBusca = results.data.results;
                this.maxPages = results.data.total_pages
            })
        },
        list(filme){
            var user = loginServices.atual()
            this.lista = listServices.load(user.email);
            var aux = true
            
            if(loginServices.logged()){
                for(var cont = 0; cont < this.lista.length && aux; cont++){
                    if(filme.title === this.lista[cont].title)
                        aux = false;
                }

                if(aux){
                    this.lista.push(filme)
                    listServices.save(user.email, this.lista);
                    this.snackbar = true;
                }
                else
                    window.alert("Filme já está na lista!")

            }
            else
                window.alert('Você precisa estar conectado para listar!')
        },
        nextPage(){
            if(this.page < this.maxPages){
                this.page++;
                tmdbFunc.buscaNome(this.toSearch, this.page)
                .then((results) =>{
                    this.resultadoBusca = results.data.results;
                })
            }
            else
                window.alert("Você já está na ultima pagina!")
        },
        prevPage(){
            if(this.page > 1){
                this.page--;
                tmdbFunc.buscaNome(this.toSearch, this.page)
                .then((results) =>{
                    this.resultadoBusca = results.data.results;
                })
            }
            else
                window.alert("Você já está na primeira pagina!")
        },
        setPage(num){
            if(num)
                this.page = 1;
            else
                this.page=this.maxPages

            tmdbFunc.buscaNome(this.toSearch, this.page)
                .then((results) =>{
                    this.resultadoBusca = results.data.results;
                })
        },
        clear(){
            this.toSearch= '';
            this.resultadoBusca = [];
            this.page = '1';
            this.maxPages = '';
        }
    }
}
</script>