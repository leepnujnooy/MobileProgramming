<template>
  <v-container>
    <transition-group class="pl-0" name="list" tag="ul">
      <v-card class="mb-2 " v-for="(todoItem, index) in propsdata" :key="todoItem">
        <v-card-actions>
          <v-list-item>
            <v-list-item-avatar>
              <input type="checkbox" :checked="todoItem.completed == true" @change="toggleComplete(todoItem)">
          
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="todoItem" ></v-list-item-title>
              <v-list-item-subtitle>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action @click="editTodo(todoItem,index)">
              <v-btn icon>
                <v-icon>fa-solid fa-wrench</v-icon>
              </v-btn>
            </v-list-item-action>
            <v-list-item-action @click="detailTodo(todoItem,index)">
              <v-btn icon>
                <v-icon>fa-solid fa-info</v-icon>
              </v-btn>
            </v-list-item-action>
            <v-list-item-action @click="removeTodo(todoItem, index)">
              <v-btn icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </transition-group>
        <modal v-if="editModal" @close="editModal = false">
          <h3 slot="header">수정</h3>
            <span slot="footer" >
                수정할 내용을 입력하세요.<input type="text" v-model="editTodoObj.text" onfocus="this.select()" v-on:keypress.enter="editTodoAction()"><button type="button" @click="editTodoAction()">수정</button>
                <i class="close-modal-btn fa fa-times" aria-hidden="true" @click="editModal = false"></i>
            </span>
        </modal>
        <modal v-if="detailModal" @close="detailModal = false">
          <h3 slot='header'>상세한 정보</h3>
            <span slot='footer'>
              할 일의 상세한 정보를 기입하세요.<input type="text" v-model="detailTodoObj.value" onfocus="this.select()" v-on:keypress.enter="detailTodoAction(detailTodoObj.value)">
              <button type="button" @click="detailTodoAction()">수정</button>
              <i class="close-modal-btn fa fa-times" aria-hidden="true" @click="detailModal = false"></i>
            </span>
        </modal>
  </v-container>
  
</template>

<script>
import Modal from './common/ExportModal.vue'
export default {
  props: ["propsdata"],
  data() {
    return {
      editModal : false,
      detailModal : false,
      currentTodo: {
      },
      editTodoObj : {
        key : '',
        index : '',
        text : ''
      },
      detailTodoObj : {
        key: '',
        value : '',
        index : ''
      }
    }
  },

  methods: {
    removeTodo(todoItem, index) {
      this.$emit("removeTodo", todoItem, index);
    },
    editTodo(todoItem,index) {
      console.log(todoItem,index)
      this.editTodoObj.index = index
      this.currentTodo = this.propsdata[index]
      this.editTodoObj.text = this.currentTodo
      this.editTodoObj.key = todoItem
      this.editModal = !this.editModal
    },
    editTodoAction() {
      const obj = this.editTodoObj;
      this.$emit("editTodo",obj.key,obj.index,obj.text)
      this.editModal = false
    },
    detailTodo(value,index) {
      this.detailTodoObj.index = index
      this.detailTodoObj.value = value
      this.currentTodo = this.propsdata[index]
      this.detailTodoObj.key = this.currentTodo
      console.log(this.detailTodoObj.value,this.detailTodoObj.key)
      this.detailModal = !this.detailModal
    },
    detailTodoAction() {
      const obj2 = this.detailTodoObj;
      this.$emit("detailTodo",obj2.value,obj2.index,obj2.key)
      this.detailModal = false
    },
    toggleComplete(todoItem){
      this.$emit("toggleComplete",todoItem)
    }
  },
  components : {
    Modal: Modal
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.done{
  text-decoration: line-through;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>