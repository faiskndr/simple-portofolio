<template>
  <div class="mx-auto px-24 bg-sky-200 " style="height: 100vh;">
    <div class="flex flex-wrap items-center">
      <div class="w-1/2 ">
        <div class="w-full border">
          <h2 class="text-4xl ">Hi,this is My <span class="font-bold text-sky-600">Example Portofolio</span></h2>
        </div>
        <p class="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis odit soluta earum quam quisquam. Distinctio sapiente expedita dicta quasi magni?</p>
        <div class="mt-8 space-x-2">
          <button class="px-8 py-2 text-white font-bold" style="background-color: #1f1f1f;">About Me</button>
          <button class="px-10 py-2 font-bold border-slate-900 border" style="background-color: #ffffff;">Hire Me</button>
        </div>
      </div>
      <div class="w-1/2 flex justify-center">
        <img src="~/static/48308.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import Card from '~/components/Card.vue'

  export default{
    name:'Home',
    components:{
      Card
    }
  }
</script>