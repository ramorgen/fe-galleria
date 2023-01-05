import { reactive } from "vue";
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()

import data from './data.json'

const  store = reactive({
   version: "1.0.00",
   wWidth:width,
   wHeight:height,
   data:data,
   detailIndex: -1,
   lbOn:false,

   item : () => {
      return store.data[store.detailIndex]
   }
})

export default store

