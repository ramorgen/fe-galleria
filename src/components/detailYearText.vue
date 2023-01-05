<template>
   <div class="absolute  w-[327px] h-[461px] left-6 top-[482px] md:w-[572px] md:h-[299px] md:left-[40px] md:top-[753px]  lg:static">
      <div class="absolute h-[100px] left-[27.22px] right-0   
                  md:h-[150px] md:left-0 md:right-[16.78%] lg:left-[65%] lg:right-[0%] yTop">
         <p class="font-bold text-right text-light_gray text-[100px] leading-[100px] md:text-[200px] md:leading-[150px]
                lg:text-[155px] lg:leading-[100%] xl:text-[200px] xl:leading-[75%] ">
            {{ store.item().year }}
         </p>
      </div>
      <div class="absolute left-0 right-0 md:left-[20.1%] 
                  lg:left-[65.07%] lg:right-[6.0%] xl:left-[65.07%] xl:right-[9.19%] pTop">
         <p class="text-gray text-f14 font-bold leading-[1.62rem]  xl:leading-7 ">
            {{ store.item().description }}
         </p>
      </div>
   </div>
</template>


<script setup>
   import store from '../store.js'
</script>


<style scoped>
   .pTop {
      top : calc(50% - 336px/2 + 11.5px);
      }
   .yTop {
      top: calc(50% - 100px/2 - 180.5px);
    }     

   @media (min-width: 768px){
      .yTop {
         top: calc(50% - 150px/2 - 74.5px);
       }
      .pTop {
         top : calc(50% - 224px/2 + 37.5px);
      }             
   }

   
   @media (min-width: 1132px){
      .pTop {
         top : calc(50% - 364px/2 - 15px);
      }
      .yTop {
        top: calc(50% - 150px/2 - 237px);
      }      
   }

</style>