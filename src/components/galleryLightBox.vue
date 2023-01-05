<template>
   <Teleport to="body">
      <div v-if="store.lbOn" >
         <div class="absolute bg-[rgba(0,0,0,.85)] inset-0 grid place-items-center z-20 " >
            <div class="absolute mx-2 md:mx-6   ">
               <div  @click="store.lbOn = false" class="absolute -top-[60px] right-0 text-white uppercase tracking-[3px] 
                           text-f14 font-bold cursor-pointer hover:opacity-25">Close</div>
               <picture>
                  <source media="(min-width:768px)" :srcset="store.item().images.gallery">
                  <img  :src="store.item().images.thumbnail" :alt="store.item().name" >
               </picture> 
            </div>
         </div>
      </div>
   </Teleport>
</template>


<script setup>
   import store from '../store.js'
</script>
