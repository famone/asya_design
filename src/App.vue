<template>
    <div id="app">
      
      <Header />
  
      <router-view></router-view>

      <Footer />

    </div>
</template>

<script>
import './assets/css/style.css'
import Header from './components/ui/Header.vue'
import Footer from './components/ui/Footer.vue'
import axios from 'axios'

  export default{
  	components: {Header, Footer}
  }
</script>






