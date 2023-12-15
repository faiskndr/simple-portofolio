<template>
  <div>
    <div class="w-80 h-96 border p-4 bg-white shadow-lg">
      <div class="flex justify-center">
        <img class="h-48" :src="image" alt="example image">
      </div>
     <h1 class="text-xl font-bold"> {{ title }}</h1>
     <p class="text-slate-600 mt-2">{{ p }}</p>
    </div>
  </div>
</template>
<script>
  export default{
    name:'Card',
    props:['title','image','p'],
  }
</script>