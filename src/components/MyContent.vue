<template>
  <div class="content">
      <transition-group
        tag="ul"
        v-show="$store.state.todosAbout.todos.length"
        appear
        enter-active-class="animate__animated animate__backInRight"
        leave-active-class="animate__animated animate__backOutRight"
      >
        <MyItem v-for="todo in todos" :key="todo.id" :todo="todo"></MyItem>
      </transition-group>
    <h1 v-show="!todos.length">暂无待办任务</h1>
  </div>
</template>

<script>
  import MyItem from './MyItem.vue'
  import 'animate.css';
  export default {
    name: 'MyContent',
    components: {
      MyItem
    },
    computed: {
      todos(){
        return this.$store.state.todosAbout.todos
      }
    }
  }
</script>

<style scoped>
  .content {
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
  }

  .content ul {
    width: 100%;
    padding: 0;
    margin: 10px 0;
    
  }
</style>