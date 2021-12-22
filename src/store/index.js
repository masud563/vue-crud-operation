import { createStore } from 'vuex'

export default createStore({
  state: {
    users: null
  },
  mutations: {
    loadUsers(state, payload) {
      state.users = payload
      console.log('users data loaded', state.users)
    },
    addUser(state, payload){
      state.users.push(payload)
      console.log(`user data added`)
    }
  },
  actions: {
    fetchUsers(context) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>{context.commit('loadUsers', data)})
    },
    addUserDb(context, payload){
      fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'POST',
        body: JSON.stringify({
            id: (parseInt(this.state.users.length) +1),
            name: payload.name,
            username: payload.userName,
            email: payload.email
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
      })
      .then((res) => res.json())
      .then((data)=> context.commit('addUser',data))
    }
  },
  modules: {
  }
})
