<template>
  <div id="app">
    <v-app>
      <v-system-bar app>
        <v-btn
          @click="rota('Home')"
        >
          Home
        </v-btn>

        <v-spacer/>
        <v-btn
          v-if="user"
          @click="rota('Login')"
        >
          Login
        </v-btn>
        
        <v-btn
          v-else
        >
          Meu perfil
        </v-btn>

        <v-btn
          v-if="user"
          @click="rota('novaConta')"
        >
          Criar conta
        </v-btn>
        <v-btn
          v-else
          @click="sair()"
        >
          Sair
        </v-btn>
      </v-system-bar>

      <v-app-bar app>
        <v-col>
          <v-toolbar-title>Lista Filmes SAMUEL WILLIAN DE SOUZA</v-toolbar-title>
        </v-col>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import router from '@/router'
import loginServices from '@/firebase/login'

export default {
  data: () => ({
    user: true,
  }) ,
  methods:{
    rota(name){
      router.push({name: name})
    },
    sair(){
      loginServices.logout()
      this.user = loginServices.logged();
    },
  },
  updated(){
    this.user = loginServices.logged();
  }
}
</script>