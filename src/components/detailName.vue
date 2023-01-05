<template>
   <div class="absolute bg-white  w-[280px] h-[104px] left-6 top-[334px]  
               md:w-[445px] md:h-[238px] md:left-[283px] md:top-[129px] 
               lg:w-auto lg:left-[30.15%] lg:right-[37.13%] lg:top-0 lg:bottom-[51.6%]"
   >
      <h1 class="ml-6 mt-3  text-[24px] leading-[29px] md:ml-[65px] 
               lg:ml-[40px] xl:ml-[65px] md:mt-0 md:w-[82%] md:text-[56px] 
               lg:text-[48px] xl:text-[56px] font-bold md:leading-[64px]  ">
         {{ store.item().name }}
      </h1>
      <p class="ml-6 mt-2 md:ml-[65px] lg:ml-[40px] xl:ml-[65px] md:mt-6 text-[15px] text-gray">
            {{ store.item().artist.name }}
      </p>
   </div>
</template>


<script setup>
   import store from '../store.js'
</script>


<style scoped>

</style>