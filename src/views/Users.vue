<template>
  <AddUser />
  <UpdateUser />
  <DeleteUser />
  <div class="filter">
    <label>Filter:</label>
    <select v-model="filterTable">
      <option value="fullDetails">Full Details</option>
      <option value="name">Name Only</option>
      <option value="email">Email Only</option>
      <option value="userName">Username Only</option>
    </select>
  </div>
  
  <div class="table">
    <table border = 1 >
      <tr>
        <th>userId</th>
        <th v-if="isNameOnly||showAll">name</th>
        <th v-if="isEmailOnly||showAll">email</th>
        <th v-if="isUserNameOnly||showAll">userName</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td v-if="isNameOnly||showAll">{{user.name}}</td>
        <td v-if="isEmailOnly||showAll">{{user.email}}</td>
        <td v-if="isUserNameOnly||showAll">{{user.username}}</td>
      </tr>
    </table>
  </div>

  <div class="pagination">
    <label>Go to: </label>
    <Pagination :userPerPage="userPerPage" :currentPage="currentPage" />
  </div>
</template>

<script>
import { ref,computed, watch } from '@vue/runtime-core'
import {useStore } from 'vuex'
import AddUser from '../components/AddUser.vue'
import UpdateUser from '../components/UpdateUser.vue'
import DeleteUser from '../components/DeleteUser.vue'
export default {

name: 'Users',

components:{AddUser, UpdateUser, DeleteUser},

setup(){
  const store = useStore()
 
  store.dispatch('fetchUsers')

  const users = computed(()=>store.state.users)

  const filterTable = ref('fullDetails')
  const showAll = ref(true)
  const isNameOnly = ref(true)
  const isEmailOnly = ref(true)
  const isUserNameOnly = ref(true)
  watch(filterTable,()=>{
    showAll.value = filterTable.value === 'fullDetails'

   isNameOnly.value = filterTable.value === 'name'
  
    isEmailOnly.value = filterTable.value === 'email'
  
    isUserNameOnly.value = filterTable.value === 'userName'
  })

  
  return {users, filterTable, showAll, isNameOnly, isEmailOnly, isUserNameOnly}
}
}
</script>

<style>

</style>