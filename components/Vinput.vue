<template>
  <div>
    <div class="mt-4">
    <label>
      {{ label }}
      <input class="w-full h-8 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-300" v-bind:type="type" >
    </label>
  </div>
  </div>
</template>
<script>
  export default{
    name:'Vinput',
    props:['label','type']
  }
</script>