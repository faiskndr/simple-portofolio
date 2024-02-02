<template>
  <div class="mt-5 h-full">
    <h2 class="text-2xl text-white font-bold">Gallery Tab</h2>
    <div class="grid lg:grid-cols-4 gap-2 gap-y-2">
      <div  
      class="relative h-48 bg-slate-500 text-center overflow-hidden"
      v-for="i in images"
      >
      <img :src="i.download_url" alt="" class="object-cover h-full w-full hover:scale-125 duration-500">
      <!-- <p class="text-white mt-[20%] font-bold">{{ i }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data:()=>{
      return{
        img:['ichi','ni','san','yon','go','roku','nana','hachi','kyu'],
        images:null
      }
    },
  
    props:['images'],
    setup(props){
      console.log(props.images);
    }
  }
</script>