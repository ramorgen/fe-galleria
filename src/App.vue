<template>
   <main class="relative ">
      <component :is="actualComponent" />
   </main>
</template>

<script setup>
   import store from "./store.js"
   import Home from '@/components/Home.vue'
   import galleryDetail from '@/components/galleryDetail.vue'

   const actualComponent = computed(()=>{
      if (store.detailIndex===-1){
         return Home
      } else {
         return galleryDetail
      }
   })
</script>


<style>
   #app {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }
   body:not(.tab-user) button:focus,
   body:not(.tab-user) input:focus,
   body:not(.tab-user) select:focus,
   body:not(.tab-user) textarea:focus {
      outline: none;
   }
   
  
</style>
