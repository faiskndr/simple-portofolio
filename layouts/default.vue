<template>
  <div >
    <Navbar 
      :links="links"
    />
    <Nuxt/>
    <Footer/>
  </div>
</template>
<script>
  import Navbar from '~/components/Navbar.vue'

  export default{
    components:{
      Navbar,
    },
    data:function(){
      return{links:[
        {title:'Home'},
        {title:'About'},
        {title:'Project'},
        {title:'Contact'}
      ]
      }
    }
  }
</script>