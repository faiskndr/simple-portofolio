<template>
  <div class="mt-8 grid md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-x-2 gap-y-4">
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
  </div>  
</template>

<script>
  import ProjectCard from './ProjectCard.vue';
  export default{
    components:{
      ProjectCard
    }
  }
</script>