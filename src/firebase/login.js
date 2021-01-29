import {firebaseApp} from '@/firebase/index'
import router from '@/router'

export default {
    doLogin(email, senha) {
        firebaseApp.auth().signInWithEmailAndPassword(email, senha)
        .then(() => {
            window.alert("Bem vindo !");
            router.push({name: 'Home', params: {}})
        })
        .catch((error) => {
            window.alert(error.message);
        })
    },
    newAcc(email, senha) {
        firebaseApp.auth().createUserWithEmailAndPassword(email, senha)
        .then(() => {
            this.doLogin(email,senha);
        })
        .catch((error) =>{
            window.alert(error.message);
        });
    },
    logged() {
        const usuario = firebaseApp.auth().currentUser;

        if(usuario){
            return true
        }
        else{
            return false
        }
    },
    logout(){
        firebaseApp.auth().signOut()
        .then(() => {
            window.alert("Você se desconectou!")
        })
        .catch((error) => {
            window.alert(error.message)
        });
    },
    atual(){
        return firebaseApp.auth().currentUser;
    }
}