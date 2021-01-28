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
    ></v-text-field>

    <v-btn
      @click="novaConta()"
    >
      Criar conta
    </v-btn>
  </v-col>
</template>

<script>
import loginServices from '@/firebase/login'

export default {
  data: () => ({
    email: '',
    password: '',
    show1: false,
  }),
  methods:{
        novaConta(){
          loginServices.newAcc(this.email, this.password);
        }
  }
}
</script>