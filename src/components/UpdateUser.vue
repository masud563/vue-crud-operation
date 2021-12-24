<template>
  <div class="update-user">
    <form @submit.prevent="updateUser">
      <table border="1">
        <tr>
          <td><input type="text" placeholder="userId"
          v-model="userId"></td>
          <td><input type="text" placeholder="Name" v-model="name"></td>
          <td><input type="email" placeholder="Email" v-model="email"></td>
          <td><input type="text" placeholder="Username" v-model="userName"></td>
          <td><button >Update User</button></td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
  
export default {

  setup() {
    const store = useStore()
    const userId = ref('')
    const name = ref('')
    const email = ref('')
    const userName = ref('')
    const updateUser = () => {
      if(userId.value && name.value && email.value && userName.value){
        store.dispatch('updateUserDb',{userId:userId.value,
        name: name.value, email: email.value, userName: userName.value})
      }else{
        console.log(`error`)
      }
    }
    return {
      userId,
      name, 
      email, 
      userName,
      updateUser
    }
  }

}
</script>

<style>

</style>