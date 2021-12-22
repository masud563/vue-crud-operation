<template>
  <div class="add-user">
    <form @submit.prevent="addUser">
      <table border="1">
        <tr>
          <td><input type="text" placeholder="Name" v-model="name"></td>
          <td><input type="email" placeholder="Email" v-model="email"></td>
          <td><input type="text" placeholder="Username" v-model="userName"></td>
          <td><button >Add User</button></td>
        </tr>
      </table>

    </form>

  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'



export default {
  setup(){
    const store = useStore()
    const name = ref('')
    const email = ref('')
    const userName = ref('')

    const addUser = () => {
      if(name.value && email.value && userName.value){
        store.dispatch('addUserDb',{name:name.value, email: email.value, userName: userName.value})
      }else{
        console.log(`eror`)
      }
    }

    return{
      name,
      email,
      userName,
      addUser,
    }
  }
}
</script>

<style>

</style>