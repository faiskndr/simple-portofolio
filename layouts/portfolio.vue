<template>
  <div >
    <Navbar
      :links="links"
      :style="{backgroundColor:'#222831'}"
      :class="text"
    />
    <div style="background-color:#222831;">
      <Nuxt/>
    </div>
    <Footer/>
  </div>
</template>

<script>
  export default{
    data: function(){
      return{
        links:[
          {title:'Home',link:'#home'},
          {title:'About Me',link:'#about'},
          {title:'Random',link:'#random'},
          {title:'Contact',link:'#contact'},
        ],
        text:'text-white mx-auto'
      }
    }
  }
</script>