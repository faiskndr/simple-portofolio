<template>
  <div >
    <Navbar/>
    <Nuxt/>
    <Footer/>
  </div>
</template>
<script>
  import Navbar from '~/components/Navbar.vue'

  export default{
    components:{
      Navbar,
    }
  }
</script>