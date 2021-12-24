<template>
  <div class="delete-user">
    <form @submit.prevent="deleteUser">
      <table border="1">
        <tr>
          <td><input type="text" placeholder="userId" v-model="userId"></td>
          <td><button >Delete User</button></td>
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

    const deleteUser = () =>{
      if(userId.value){
         store.dispatch('deleteUserDb',{userId: parseInt(userId.value)})
      }else{
        console.log(`eror`)
      }
     
    }
    return {
      userId,
      deleteUser
    }
  }
}
</script>

<style>

</style>