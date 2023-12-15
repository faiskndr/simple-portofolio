<template>
  <div class="bg-sky-200">
    <div class="flex justify-between items-center container mx-auto px-24">
      <NuxtLogo/>
      <div class="space-x-8 p-8 text-lg font-bold">
        <a class="hover:text-slate-500" href="#">Home</a>
        <a class="hover:text-slate-500" href="#">About</a>
        <a class="hover:text-slate-500" href="#">Project</a>
        <a class="hover:text-slate-500" href="#">Contact</a>
      </div>
      <button class="py-2 px-4 text-white font-bold" style="background-color: #1f1f1f;">Let's Talk</button>
    </div>
  </div>
</template>
<script>
  export default{
    name:'Navbar'
  }
</script>