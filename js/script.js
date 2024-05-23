const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',       
      }
    },
    methods:{
      add(){
      }
    }
  }).mount('#app')