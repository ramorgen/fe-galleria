<template>
   <div class=" 
         absolute bg-black mix-blend-normal w-[152px] opacity-75 cursor-pointer h-10 left-10 top-[120px]  
         md:left-[56px] md:top-[633px] lg:left-[3.89%] lg:top-[70.43%]  "
         >
         <div class="h-full w-full flex flex-row justify-center items-center">
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z"/></g></svg>
            <button  class="uppercase pl-4 text-[10px] text-white font-bold tracking-[2.14px]">View Image</button>
         </div>
         <!-- for hover: -->
         <div @click="$emit('viewClicked')" class="absolute w-full h-full inset-0 bg-transparent z-10 
                     hover:bg-gradient-to-b from-[rgba(255,255,255,0.5)] to-[rgba(255,255,255,.5)] " />  
   </div>

</template>

<script setup>
   import store from '../store.js'

   const emit = defineEmits(['viewClicked'])

</script>