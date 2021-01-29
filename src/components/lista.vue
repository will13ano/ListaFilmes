<template>
    <v-container >
            <div style="display: flex; justify-content: center;">
                <h1 v-if="lista.length == 0">Oh não! Sua lista está vazia :( </h1>
            </div>
            <v-row v-for="filme in lista" :key="filme.id">
            <v-col>
                <v-card
                    outlined
                    style="display: flex; flex-direction: row-reverse;"
                    elevation="13"
                    :color="filme.watched ? '#2E7D32' : ''"
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
                                @click="remove(filme)"
                            >
                                Remover
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-checkbox label="Assistido" v-model="filme.watched"></v-checkbox>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import loginServices from '@/firebase/login'
import listServices from '@/firebase/lista'


export default {
    data: () => ({
        lista: [],
        user: loginServices.atual(),
    }),
    methods: {
        remove(filme){
            window.alert(`Você removeu "${filme.title}" da Lista !`)

            this.lista.splice(this.lista.indexOf(filme) ,1)
            listServices.save(this.user.email, this.lista)
        }
    },
    created(){
        if(loginServices.logged()){
            this.lista = listServices.load(this.user.email)
        }   
    },
}
</script>