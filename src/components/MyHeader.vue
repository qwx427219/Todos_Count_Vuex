<template>
  <div class="header">
    <input type="text" placeholder="请输入一个待办任务的名字，按回车添加" v-model="todoName" @keyup.enter="addTodo" />
  </div>
</template>

<script>
  export default {
    name: 'MyHeader',
    data(){
      return {
        todoName: ''
      }
    },
    methods: {
      addTodo(){
        this.$store.commit('todosAbout/ADD_TODO', this.todoName)
        this.todoName = ''
      }
    }
  }
</script>

<style scoped>
  .header{
    width: 100%;
  }

  .header input {
    width: 100%;
    height: 30px;
    background-color: #eee;
    padding: 2px;
    margin-left: -3px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 15px;
  }
</style>