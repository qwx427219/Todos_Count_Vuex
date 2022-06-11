export default function (store) {
  const todos = JSON.parse(localStorage.getItem('todos'))
  // store.state.todosAbout.todos = todos

  // let state = JSON.parse(JSON.stringify(store.state))
  // state.todosAbout.todos = todos
  // store.replaceState(state)

  store.commit('todosAbout/UPDATE_TODOS', todos)

  store.subscribe((mutation, state) => {
    if (mutation.type.startsWith('todosAbout')) {
      const todos = JSON.stringify(state.todosAbout.todos)
      localStorage.setItem('todos', todos)
    }
  })
}