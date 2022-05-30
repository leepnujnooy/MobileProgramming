<template>
<v-app>
    <v-app-bar app color="#6A76AB" dark >
    <div class="d-flex align-center">
        <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src=""
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
    <TodoHeader />
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList
        v-bind:propsdata="todoItems" 
        @removeTodo="removeTodo"
        @editTodo="editTodo"
        @detailTodo="detailTodo"
        @toggleComplete="toggleComplete"
    ></TodoList>
    </v-main>
    
    <v-footer color="#6A76AB" dark>
    <TodoFooter v-on:removeAll="clearAll" />
    </v-footer>
</v-app>
</template>

<script>
import TodoFooter from "../components/TodoFooter.vue";
import TodoHeader from "../components/TodoHeader.vue";
import TodoList from "../components/TodoList.vue";
import TodoInput from "../components/TodoInput.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";


export default {
name: "App",

components: {
    TodoList,
    TodoFooter,
    TodoHeader,
    TodoInput,
},

data() {
    return {
    todoItems: [],
    name:"",
    auth: getAuth()
    };
},
methods: {
    clearAll() {
    localStorage.clear();
    this.todoItems = [];
    },
    addTodo(todoItem) {
      //localStorage.setItem(todoItem, JSON.stringify(value));//
    localStorage.setItem(todoItem,todoItem)

    this.todoItems.push(todoItem);
    },
    removeTodo(todoItem, index) {
    localStorage.removeItem(todoItem);
    this.todoItems.splice(index, 1);
    },
    editTodo(todoItem,index,text) {
    console.log(todoItem,index,text)
    this.todoItems.splice(index,1,text)
    localStorage.setItem(text,text)
    localStorage.removeItem(todoItem,todoItem)
    },
    detailTodo(value,index,todoItem){
    console.log(value,index,todoItem)
    this.todoItems.splice(index,1,todoItem)
    localStorage.setItem(todoItem,value)
    },
    toggleComplete(todoItem){
    todoItem.completed = !todoItem.completed;
    localStorage.setItem(todoItem.item,JSON.stringify(todoItem))
    }
},
created() {
    if (localStorage.length > 0) {
    for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
    }
    }
    onAuthStateChanged(this.auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        this.name = user.email;
        // ...
    } else {
        this.$router.replace({path:"/"});
        // ...
    }
    });
}
};
</script>

<style>
body {
text-align: center;
background-color: #f6f6f8;
}
input {
border-style: groove;
width: 200px;
}
.shadow {
box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

