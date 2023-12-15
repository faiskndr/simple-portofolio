<template>
  <div>
    <form action="">
      <Vinput v-model="email" label="Email" type="email"/>
      <Vinput v-model="name" label="Name" type="text"/>
      <Vinput v-model="message" label="Message" type="text"/>
      <button v-on:click="showMessage" class="py-2 px-10 mt-4 text-white" style="background-color: #1f1f1f;">Send</button>
    </form>
  </div>
</template>
<script>
  export default{
    data:()=>({
      email:null,
      name:null,
      message:null
    }),
    methods:{
      showMessage(){
        alert(`Message send`)
      }
    }
  }
</script>