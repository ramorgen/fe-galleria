<template>
   <div class="relative">
      
      <img class="relative w-[327px] lg:w-[309px] md:w-[324px] object-cover " :src="item.images.thumbnail" :alt="item.name"  >
      <!-- 170px high under the name for better readability -->
      <div class="absolute w-full h-[170px] bottom-0 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,1)] "></div>  
      <!-- for the hover-effect -->
      <div @click="imgClicked()"  class="absolute cursor-pointer w-full h-full inset-0 bg-transparent z-10 hover:bg-gradient-to-b from-[rgba(255,255,255,0.5)] to-[rgba(255,255,255,.5)] "></div>  

      
      <div class="absolute leftBorder  w-[247px]  bottom-[32px]    ">
         <p class="text-f24 font-bold text-white leading-[30px]">{{ item.name }}</p>
         <p class="pt-2 text-f16 leading-4 font-normal text-white mix-blend-normal opacity-[0.75]">{{ item.artist.name }}</p>
      </div>
   </div>
   
</template>


<script setup>
   import store from '../store.js'
   
   const props = defineProps(['item'])
   const imgClicked = () => {
      store.detailIndex = store.slideIndex = props.item.index
   }
</script>


<style scoped>
   .leftBorder {
      left: calc(50% - 247px/2 + 0.5px);
   }
</style>