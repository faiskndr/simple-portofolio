<template>
  <div :class="[$attrs.style == null ? 'bg-sky-200' : null, 'sticky top-0','z-50']">
    <div class="flex justify-between items-center container mx-auto px-8 lg:px-24 py-4 ">
      <NuxtLogo/>
      
        <button class="lg:hidden" @click="toggle">
          <div class="w-8 h-[2px] bg-white transition duration-300 ease-in-out origin-top-left"></div>    
          <div class="w-8 h-[2px] bg-white mt-2"></div>    
          <div class="w-8 h-[2px] bg-white mt-2"></div>    
        </button>
      <div id="menu" class="hidden space-x-8 p-4 text-lg font-bold absolute bg-slate-900 top-full right-4 lg:block   lg:bg-transparent lg:static">
        <ul class="block lg:flex">
          <li class="group" v-for="link in links">
            <a :class="'hover:text-slate-500 mx-8'" :href="link.link" >{{ link.title }}</a>
          </li>
          <li class="group">
            <button class="block lg:hidden py-2 px-4 text-white font-bold mx-8" style="background-color: #1f1f1f;">Let's Talk</button>
          </li>
        </ul>
       
        <!-- <a class="hover:text-slate-500" href="#">About</a>
        <a class="hover:text-slate-500" href="#">Project</a>
        <a class="hover:text-slate-500" href="#">Contact</a> -->
      </div>
      <button class="hidden lg:block py-2 px-4 text-white font-bold" style="background-color: #1f1f1f;">Let's Talk</button>
      
    </div>
  </div>
</template>
<script>
  export default{
    name:'Navbar',
    props:['links'],
    data:()=>{
      return{
        show:true
      }
    },
    methods:{
      toggle: function(){
        const menu = document.getElementById('menu');
        menu.classList.toggle('hidden')
      }
    }
  }
</script>