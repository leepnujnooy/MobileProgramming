import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        todoItems:[]
    },
    getters:{
        getTodos: state =>{
            return state.todoItems;
        }
    },
    mutations:{
        addTodo: (state,value) =>{
            state.todoItems.push(value);
            localStorage.setItem(value,value);
        },
        removeTodo: (state,payload) => {
            state.todoItems.splice(payload.index,1);
            localStorage.removeItem(payload.todoItem);
        },
        clearAll: state => {
            state.todoItems = [];
            localStorage.clear();
        },
        editTodoAction: (state,payload) =>{
            console.log(payload)
            state.todoItems.splice(payload.editTodoObjindex,1);
            localStorage.removeItem(payload.currentObj,payload.currentObj);
            localStorage.setItem(payload.editTodoObj,payload.editTodoObj);
            state.todoItems.push(payload.editTodoObj);
        }
    }
});
//editTodo(todoItem,index,text) {
//    this.todoItems.splice(index,1,text)
//    localStorage.setItem(text,text)
//    localStorage.removeItem(todoItem,todoItem)
//    },