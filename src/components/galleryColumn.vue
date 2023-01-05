<template>
   <div class="flex flex-col colClass ">
      <galleryThumb v-for="idx in items" :key="idx" :item="store.data[idx]" />  
   </div>
</template>


<script setup>
   import store from '../store.js'

   const props = defineProps({
      items : Array
   })
</script>


<style scoped>
   .colClass{
      @apply gap-6 ml-3 mr-3;
   }
   .colClass:first-child{
      @apply ml-6;
   }
   .colClass:nth-child(2),
   .colClass:nth-child(3)
   {
      @apply mt-6;
   }
   .colClass:nth-child(4){
      @apply mr-6;
      @apply mt-6;
   }

   @media (min-width: 768px) {
      .colClass{
         @apply gap-10 ml-5 mr-5;
      }
      .colClass:first-child{
         @apply ml-10;
      }
      .colClass:nth-child(2){
         @apply mt-0;
      }
      .colClass:nth-child(4){
         @apply mr-10;
      }
   }

   @media (min-width: 1112px) {
      .colClass:nth-child(3){
         @apply mt-0;
      }
   }

   @media (min-width: 1436px) {
      .colClass:nth-child(4){
         @apply mt-0;
      }
   }
</style>