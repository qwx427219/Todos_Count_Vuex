<template>
  <div class="container">
    <MyHeader></MyHeader>
    <MyContent></MyContent>
    <MyFooter></MyFooter>
    <hr>
    <MyCount></MyCount>
  </div>
</template>

<script>
  import MyHeader from './components/MyHeader.vue'
  import MyContent from './components/MyContent.vue'
  import MyFooter from './components/MyFooter.vue'
  import MyCount from './components/MyCount.vue'

  export default {
    name: 'App',
    components: {
      MyHeader,
      MyContent,
      MyFooter,
      MyCount
    },
    mounted(){
      console.log(this);
    }
  }
</script>

<style>
  body {
    display: flex;
    justify-content: space-evenly;
  }

  .container {
    width: 500px;
    background-color: #ccc;
    padding: 5px;
    border-radius: 10px;
  }
</style>
