<template>
<v-app style=" background-image: url('/img/icons/backcolor.png')">
    <v-app-bar app color="transparent" dark>
    <div class="d-flex align-center">
        <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="/img/icons/noteicn.png"
        transition="scale-transition"
        width="40"
        />
    </div>

    <v-spacer></v-spacer>

    <v-btn text>
        <span></span>
        <v-icon color="white">mdi-dots-vertical</v-icon>
    </v-btn>
    </v-app-bar>

    <v-main>
        
    <v-form>
        <v-container>
            <div>
                <v-img src="/img/icons/noteicn.png" transition="scale-transition"/>
                <h2>{{ msg }}</h2>
            </div>
                
            <v-row align="center" justify="center">
                <v-col cols="6" sm="3">
                <v-text-field v-model="email" label="email" hint="이메일 형식으로 입력"
                >
                </v-text-field>
                </v-col>
                <v-col cols="6" sm="3">
                <v-text-field
                    v-model="password"
                    label="Password"
                    hint="6자 이상의 숫자"
                    counter
                    >
                </v-text-field>
                
            </v-col>
            </v-row>
            </v-container>
    </v-form>
    <v-btn outlined @click="addUser"> 회원가입 </v-btn>
    <v-btn outlined @click="login"> 로그인 </v-btn>
    <v-btn>
        
    </v-btn>

    </v-main>
</v-app>
</template>

<script>
import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged,
} from "firebase/auth";

export default {
data() {
    return {
    msg: "할일 어플리케이션",
    auth: getAuth(),
    email: "",
    password: "",
    };
},
methods: {
    addUser() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          //var user = userCredential.user;
        this.msg = "loggined as " + userCredential.user.email;
          // ...
        })
        .catch((error) => {
        this.msg = error;
          // var errorCode = error.code;
          // var errorMessage = error.message;
          // ..
        });
    },
    login() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
        console.log(userCredential.user);
        this.name = userCredential.user.email;
        this.$router.push({ path: "todo" });
          // ...
        })
        .catch((error) => {
        this.msg = error;
        });
    },
},
beforeCreate() {
    onAuthStateChanged(getAuth(), (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(user.email);
        this.$router.push({ path: "todo" });
        // ...
    } else {
        console.log("not logged in");
        // User is signed out
        // ...
    }
    });
},
};
</script>

<style>
</style>