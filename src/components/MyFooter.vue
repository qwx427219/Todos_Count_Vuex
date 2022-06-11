<template>
  <div class="footer" v-show="todos.length">
    <span>
      <input type="checkbox" :checked="dones === todos.length" @change="doneAll"/> 
      <span>完成 {{dones}} / 总共 {{todos.length}}</span>
    </span> 
    <button @click="clearAllDone">清空已完成</button>
  </div>
</template>

<script>
  export default {
    name: 'MyFooter',
    computed: {
      todos(){
        console.log();
        return this.$store.state.todosAbout.todos
      },
      dones(){
        return this.$store.state.todosAbout.todos.reduce((pre, item)=>{
          if(item.done) {
            pre++
          }
          return pre
        }, 0)
      }
    },
    methods: {
      doneAll(e){
        this.$store.commit('todosAbout/CHECK_ALL_TODO', e.target.checked)
      },
      clearAllDone(){
        this.$store.commit('todosAbout/CLEAR_ALL_DONE')
      }
    }
  }
</script>

<style scoped>
  .footer {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
    height: 30px;
  }
</style>