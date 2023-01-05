<template>
   <div class="border border-red-500 absolute left-6 w-[327px] h-[295px] top-[104px] 
               md:left-10 md:top-[129px] md:h-[560px] md:w-[475px] 
               lg:left-0 lg:top-0 lg:right-[65.07%] lg:bottom-[10.26%]"
   >
      <picture>
         <source media="(min-width:768px)" :srcset="store.item().images.hero.large">
         <img class="object-cover object-center w-full h-full" :src="store.item().images.hero.small" :alt="store.item().name" >
      </picture> 
   </div>
</template>


<script setup>
   import store from '../store.js'
</script>


