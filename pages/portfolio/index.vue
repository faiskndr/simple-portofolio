<template>
  <div class="snap-y">
    <div class="container h-full w-full mx-auto pt-12 snap-center" id="home">
        <div class="flex flex-wrap w-full">
          <div class="w-full lg:w-1/2 flex justify-center items-center">
            <div class="pt-12 lg:pt-0">
              <h1 class="text-4xl md:text-6xl font-extrabold" style="color: #00ADB5;">PROFESIONAL</h1>
              <h1 class="text-4xl md:text-6xl font-black text-white">LAZY PERSON</h1>

              <button class="py-2 px-6 rounded-full text-white font-bold mt-8 btn-sky">About Me</button>
            </div>
          </div>  
          <div class="w-full lg:w-1/2">
              <img class="mx-auto" src="~/static/istockphoto-1125710604-1024x1024-removebg-preview.png" alt="">
          </div>
        </div>
    </div>

  <div class="container mx-auto pt-12 lg:pt-48 snap-center" id="about">
    <div class="flex flex-wrap w-full ">
          <div class="w-full lg:w-1/2 flex justify-center items-center">
            <div class="w-[80%] p-2">
              <h1 class="text-4xl md:text-6xl font-extrabold text-white">About <span style="color: #00ADB5;">me</span></h1>
              <p class="text-base text-white pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto distinctio provident dolores officia at vel ullam in! Quia, molestiae. Obcaecati dolorem iste autem voluptatibus doloremque tempore ab minima dolorum.</p>
            </div>
          </div>  
          <div class="w-full lg:w-1/2">
            <div class="relative">
              <img src="~/static/doodle items.png" alt="">
              <img src="~/static/Group 62.png" alt="" class="w-[60%] absolute -bottom-5 lg:-bottom-10 left-1/2 -translate-x-1/2">
            </div>
          </div>
        </div>
    </div>
    <div class="container mx-auto mt-24 min-h-[800px] h-full p-12 lg:mt-48 lg:pt-48 snap-center" id="random">
      <div class="flex items-center h-full">
        <div class="w-full">
          <h1 class="text-6xl font-extrabold text-white">My <span style="color: #00ADB5;">{{ currentTab.name }}</span></h1>
          <div class="grid gap-x-4 grid-cols-3 md:grid-cols-8 lg:grid-cols-12">
            <button
                v-for="tab in tabs"
                :key="tab"
                v-on:click="currentTab = {name:tab.name, component:tab.component}"
                :class="['tab-button',{active:currentTab.component==tab.component}]"
                @click="getImg"
              >
              {{ tab.name }}
            </button>
           </div>
        <component v-bind:is="currentTab.component" :images="images"></component>
      </div>
      </div>
    </div>
    <div class="container mx-auto p-12 lg:pt-36 snap-center" id="contact">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <h1 class="text-4xl md:text-6xl font-black text-white">Got a Project in</h1>
          <h1 class="text-4xl md:text-6xl font-extrabold" style="color: #00ADB5;">mind?</h1>
          <div class="flex justify-center">
            <img src="~/static/Group 2372.png" alt="" class="w-[40%]">
          </div>
        </div>
        <div class="w-full lg:w-1/2 flex items-center justify-center">
          <div>
            <h2 class="text-4xl text-white font-bold block mt-12 lg:hidden lg:mt-0">Contact Me</h2>
            <Vform/>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>

  import TabHome from '../../components/TabHome.vue';
  import TabGallery from '../../components/TabGallery.vue';
  import TabArchive from '../../components/TabArchive.vue';


  export default{
    layout: 'portfolio',
    components:{
      TabHome,
      TabGallery,
      TabArchive
    },
    data:function(){
      return{
      currentTab:{name:"Project",component:TabHome},
      tabs:[
        {
          name:"Project",
          component:TabHome
        },
        {
          name:"Gallery",
          component:TabGallery
        },
        {
          name:"Archive",
          component:TabArchive
        }
      ],
      images:null
      }
    },
  methods:{
    getImg:function(){
        fetch('https://picsum.photos/v2/list?limit=20')
        .then(response=>response.json())
        .then(result=>{
          this.images = result
      // console.log(this.images);

    })

      }
  }
}
</script>

<style>
  .tab-button{
    padding: 6px 10px;
    background-color: #393E46;
    color: white;
    margin-top: 20px;
    border-radius: 20px;
  }
  .tab-button:hover{
    background-color: #00ADB5;
  }
  .tab-button.active{
    background-color: #00ADB5;
  }
  .btn-sky{
    background-color: #00ADB5;
  }
  .btn-sky:hover{
    background-color: #0098a0;
  }
</style>