<template>
  <li>
    <input 
      type="checkbox" 
      :checked="todo.done"
      @change="changeTodoDone"
    /> 
    <span v-show="!isShow" @dblclick="changeShowStatus">{{todo.name}}</span>
    <input 
      type="text" 
      v-show="isShow" 
      v-model="todoName" 
      ref="ipt" 
      @blur="changeTodoName"
      @keyup.enter="changeTodoName"
    />
    <button @click="delTodo">删除</button> 
    <span class="time">{{todo.createTime}}</span> 
  </li>
</template>

<script>
  export default {
    name: 'MyItem',
    props: ['todo'],
    data(){
      return {
        isShow: false,
        todoName: this.todo.name
      }
    },
    methods: {
      delTodo(){
        this.$store.commit('todosAbout/DEL_TODO', this.todo.id)
      },
      changeTodoDone(e){
        this.$store.commit('todosAbout/CHANGE_TODO', {id: this.todo.id, done: e.target.checked})
      },
      changeTodoName() {
        this.$store.commit('todosAbout/CHANGE_TODO', {id:this.todo.id, name: this.todoName})
        this.isShow = false
      },
      changeShowStatus(){
        this.isShow = true
        this.$nextTick(() => {
          this.$refs.ipt.focus()
        })
      }
    }
  }
</script>

<style scoped>
  li {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    list-style: none;
    border: 1px solid black;
  }

  li input {
    margin-top: 5px;
  }

  li button {
    float: right;
    margin: 5px 5px;
    background-color: red;
    border: none;
    color: white;
    border-radius: 3px;
    cursor: pointer;
    display: none;
  }

  li:hover button {
    display: inline-block;
  }

  li button:hover {
    color: black;
  }

  li button:active {
    background-color: rgb(187, 7, 7);
  }
  
  .time {
    float: right;
    margin-right: 5px;
  }
</style>