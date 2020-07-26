<template>
  <div id="app">
    <navigation-comp />
     
    <router-view></router-view>

     <footer-comp />
    
  </div>
</template>

<script>

import FooterComp from './components/FooterComp';
import NavigationComp from './components/NavigationComp';







export default {
  name: 'app',
  components:{
    FooterComp,
    NavigationComp,



  },
  data () {
    return {
     
    }
  }
}
</script>

<style>

</style>
