<template>
  <div id="app">
    <v-app>
      <v-app-bar app>
        <v-row>
        <router-link class="none" :to="'/'">
          <v-app-bar-nav-icon><v-icon color="#E53935">mdi-popcorn</v-icon></v-app-bar-nav-icon>
        </router-link>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-col>
          <v-toolbar-title>Lista Filmes</v-toolbar-title>
        </v-col>
        
        <v-spacer></v-spacer>
        

        <v-col>
          <router-link class="none" v-if="!user" :to="'/login'"><p class="none">Login</p></router-link>
          <router-link class="none" v-else :to="'/mylist'"><p class="none">Minha Lista</p></router-link>
        </v-col>

        <v-col>
          <router-link class="none" v-if="!user" :to="'/novaConta'"><p class="none">Criar Conta</p></router-link>
          <v-btn
            v-else
            @click="sair()"
          >
            Sair
          </v-btn>
        </v-col>
        </v-row>
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
import loginServices from '@/firebase/login'

export default {
  data: () => ({
    user: true,
  }) ,
  methods:{
    sair(){
      loginServices.logout()
      this.user = false;
    },
  },
  updated(){
    this.user = loginServices.logged();
  },
  mounted(){
    this.user = loginServices.logged();
  }
}
</script>

<style>
.none{
  color: black;
  font-style: unset;
  text-decoration: none;
}
</style>