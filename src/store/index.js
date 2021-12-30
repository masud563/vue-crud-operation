import { computed } from 'vue'
import { createStore } from 'vuex'

export default createStore({
  state: {
    users: []
  },

  getters: {
    totalUsers: (state) =>{
      return state.users.length
      console.log(state.users.length)
    }
  },

  mutations: {

    loadUsers(state, payload) {
      state.users = payload
    },

    addUser(state, payload){
      state.users.push(payload)
      console.log(`user data added`, this.state.users)
    },

    updateUser(state, payload){
      console.log(payload)
      state.users[payload.id - 1] = payload
    },

    deleteUser(state, payload){
      state.users.splice(payload.userId - 1, 1)
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
            id: this.state.users.length,
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
    },

    updateUserDb(context, payload) {
      const baseUrl = 'https://jsonplaceholder.typicode.com/users/'
      const updateId = payload.userId
      const finalUrl = baseUrl + updateId

      fetch( finalUrl, {
        method: 'PUT',
        body: JSON.stringify({
          id: parseInt(payload.userId),
          name: payload.name,
          email: payload.email,
          username: payload.userName
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((res) => res.json())
      .then((data) => {
        context.commit('updateUser', data)
      });
    },

    deleteUserDb(context, payload){
      const baseUrl = 'https://jsonplaceholder.typicode.com/users/'
      const deleteId = payload.userId
      const finalUrl = baseUrl + deleteId

      fetch(finalUrl, {
        method: 'DELETE',
      })
      .then((res)=>res.json())
      .then((data)=>{
        context.commit('deleteUser',payload)
      })
    }
  },
  modules: {
  }
})
