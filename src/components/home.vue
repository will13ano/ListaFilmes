<template>
    <v-container fluid>
        <v-text-field
        label="Buscar Filme"
        v-model="toSearch"
        append-icon='mdi-feature-search'
        @click:append="search()"
        v-on:keyup.enter="search()"
        ></v-text-field>

        <v-container style="display: flex; flex-wrap: wrap;">
            <v-card
                class="mx-auto"
                width="400"
                outlined
                v-for="filme in resultadoBusca" :key="filme.id"
            >
                <v-list-item>
                    <v-list-item-content>
                        <div class="overline mb-3">
                            {{filme.original_title}}
                        </div>
                        <v-list-item-title class="headline mb-4">
                            {{filme.title}}
                        </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        width="100"
                        height="150"
                    ><img :src="`http://image.tmdb.org/t/p/original/${filme.poster_path}`"/>
                    </v-list-item-avatar>
                </v-list-item>
            </v-card>
        </v-container>
    </v-container>
</template>

<script>
import tmdbFunc from '@/api/tmdb/tmdbFunc'

export default {
    data: () => ({
        toSearch: '',
        resultadoBusca: [],
    }),
    methods: {
        search(){
          tmdbFunc.buscaNome(this.toSearch)
          .then((results) =>{
               this.resultadoBusca = results.data.results;
               console.log(this.resultadoBusca)
          })
        }
    }
}
</script>