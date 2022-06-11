<template>
  <div class="container">
    <div class="header">
      <h1>{{count}}</h1>
      <h1>{{count10}}</h1>
    </div>
    <div class="content">
      <select v-model="num">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
      </select>
      <button @click="INCREMENT({num})">+</button>
      <button @click="DECREMENT({num})">-</button>
      <button @click="incrementOdd({num})">当count为偶数时加</button>
      <button @click="incrementAsync({num})">延迟1s后加</button>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'MyCount',
  data(){
    return {
      num: 1
    }
  },
  computed: {
    ...mapState('countAbout', ['count']),
    ...mapGetters('countAbout', ['count10'])
  },
  methods: {
    ...mapMutations('countAbout', ['INCREMENT', 'DECREMENT']),
    ...mapActions('countAbout', ['incrementOdd', 'incrementAsync'])
  }
}
</script>

<style scoped>
  .container {
    width: 400px;
    padding: 10px;
    border: 1px solid black;
  }

  .header {
    width: 100%;
    /* height: 50px; */
    background-color: #eee;
    line-height: 50px;
    text-align: center;
    margin-bottom: 10px;
  }

  .content {
    display: flex;
    justify-content: space-around;
  }
</style>

