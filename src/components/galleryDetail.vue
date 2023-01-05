<template>
   <div class="relative  w-[375px] h-[1138px] md:w-[768px]  lg:w-[1132px] xl:w-[1440px] md:h-[1280px] lg:h-[1024px] overflow-y-scroll ">
      
      <div class="relative w-full px-6 md:px-10  bg-white z-10" >
         <gallery-header></gallery-header>
         <div class="h-[1px] bg-[#E5E5E5]" />
      </div>

      
      <div class="absolute inset-0 lg:left-[2.78%] lg:right-[2.78%] lg:top-[21.7%] lg:bottom-[17.38%] ">
         
         <detailImage />
         <div class="absolute w-16 h-16 left-10 top-[438px] 
                        md:w-32 md:h-32  md:left-[545px] md:top-[367px] 
                        lg:left-[500px]  lg:top-[79.49%] lg:bottom-0 
                        xl:w-auto xl:left-[37.13%] xl:right-[53.46%] xl:top-[79.49%] xl:bottom-0"
         >
            <img class="absolute " :src="store.item().artist.image" alt="">   
         </div>
         <detailName />
         <detailYearText />
         <div class="left-6 absolute md:left-[20%] lg:left-[65.07%]  aTop
                     uppercase text-[9px] tracking-[1.93px] 
                     leading-[11px] font-bold text-gray hover:underline hover:text-black" 
         >
            <a :href="store.item().source">go to source </a>
         </div>

      </div>
      <detailViewImage @viewClicked="store.lbOn = true" />   
         
      <footer class="absolute top-[90.24%] left-0 right-0 bottom-0 border border-light_gray">
         
         <div class="h-[1px] bg-gray transition-all" :style='`width:${progress}`'></div>
         <div class="flex flex-row h-full justify-between items-center">
            <div class="pl-10">
               <p class="text-f18 font-bold leading-5">{{ store.item().name }}</p>
               <p class="pt-2 text-f13 leading-4">{{ store.item().artist.name }}</p>
            </div>
            <div class="flex flex-row pr-10 opacity-50 cursor-pointer">
               <svg @click="store.detailIndex > 0 ? store.detailIndex-- : store.detailIndex" class="mr-2" width="26" height="24" :class="{'opacity-25' : store.detailIndex==0}"
                  xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fill-rule="evenodd"><path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" stroke-width="2"/><path fill="#D8D8D8" d="M.986.5h-1v22.775h1z"/></g>
               </svg>
               <svg @click="store.detailIndex < 14 ? store.detailIndex++ : store.detailIndex" class="ml-2" width="26" height="24" :class="{'opacity-25' : store.detailIndex==14}"
                  xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fill-rule="evenodd"><path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" stroke-width="2"/><path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z"/></g>
               </svg>
            </div>
         </div>

      </footer>
      
      <galleryLightBox />

   </div>
</template>


<script setup>
   import { computed } from 'vue';
   import store from '../store.js'

   const progress = computed(()=>{
      let ret
      if (store.wWidth>1439) {
         ret = (1440 / 15) * (store.detailIndex + 1)
      }  else if(store.wWidth > 1131 && store.wWidth < 1440){
         ret = (1132 / 15) * (store.detailIndex + 1)
      }  else if(store.wWidth > 767 && store.wWidth < 1132){
         ret = (768 / 15) * (store.detailIndex + 1)
      } else {
         ret = (375 / 15) * (store.detailIndex + 1)
      }
      return `${ret}px`
   })

   
</script>


<style scoped>

   .aTop {
      top: calc(50% - 11px/2 + 400.5px);
   }
   @media (min-width: 768px){
      .aTop{
         top: 1120px;
      }
   }
   @media (min-width: 1132px){
      .aTop {
         top: calc(50% - 11px/2 + 253.5px);
      }
   }
</style>