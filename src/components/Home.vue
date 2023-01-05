<template>
   <div class="relative w-full px-6 md:px-10  bg-white" >
      <gallery-header></gallery-header>
      <div class="h-[1px] bg-[#E5E5E5]" />
   </div>
      <div class="mt-10 mb-10 flex flex-row flex-wrap justify-center  " >
         <gallery-column :items="[0,4,8,11]" />
         <gallery-column :items="[1,5,9,12]" />
         <gallery-column :items="[2,6,13]" />
         <gallery-column :items="[3,7,10,14]" />
      </div>
</template>