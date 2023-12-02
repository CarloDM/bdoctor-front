<script>
import {store} from './data/store';
import Header from './components/header.vue';
import Example from './components/colorpaletteexample.vue';
export default {
  name:'App',
  data(){
    return{
      store,
    }
  },
  components:{Header,Example},
  watch:{},
  props:{},
  methods:{},
  mounted(){
    console.log('App', store.ciao);
  },
}
</script>
<template>
  <div class="main_wrapper">

    <Header />
    
    <main>
      
        <router-view v-slot="{Component}">
            <component :is="Component"></component>
        </router-view>
      
    </main>
    
  </div>
</template>
<style lang="scss" >
  @import '../scss/main.scss';
</style>