<template>
  <button v-for="pageNumber in totalPages" :key="pageNumber">{{pageNumber}}</button>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const totalUsers =  computed(()=>store.getters.totalUsers)
    
    return{}
  }
}
</script>

<style>

</style>