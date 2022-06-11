import { v1 } from 'uuid'
import moment from 'moment'
export default {
  namespaced: true,
  actions: {},
  mutations: {
    UPDATE_TODOS(state, todos) {
      state.todos = todos
    },
    ADD_TODO(state, todoName) {
      const todo = { id: v1(), name: todoName, createTime: moment().format('YYYY-MM-DD HH:mm:ss'), done: false }
      state.todos.unshift(todo)
    },
    DEL_TODO(state, id) {
      state.todos = state.todos.filter(todo => {
        return todo.id !== id
      })
    },
    CHANGE_TODO(state, { id, done, name }) {
      const index = state.todos.findIndex(todo => {
        return todo.id === id
      })
      if (typeof done !== 'undefined') state.todos[index].done = done
      if (typeof name !== 'undefined') state.todos[index].name = name
    },
    CHECK_ALL_TODO(state, doneAll) {
      state.todos.forEach(todo => {
        todo.done = doneAll
      })
    },
    CLEAR_ALL_DONE(state) {
      state.todos = state.todos.filter(todo => {
        return !todo.done
      })
    },
  },
  state: {
    todos: []
  },
  getters: {}
}