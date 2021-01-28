<template>
    <v-col
      cols="7"
    >
      <v-text-field
        v-model="email"
        label="E-mail"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Senha"
        :type="show1 ? 'text' : 'password'"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show1 = !show1"
        v-on:keyup.enter="login()"
      ></v-text-field>
      <v-row>
        <v-col>
          <v-btn
            @click="login()"
          >Login</v-btn>
        </v-col>
        <v-col>
          <v-btn
            @click="rota('novaConta')"
          >
            Criar conta
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
</template>

<script>
import loginServices from '@/firebase/login'
import router from '@/router'

export default {
  data: () => ({
    email: '',
    password: '',
    show1: false,
  }),
  methods: {
    login() {
      loginServices.doLogin(this.email, this.password)
    },
    rota(name){
      router.push({name: name})
    }
  }
}
</script>