<script>
import axios from 'axios';
import {store} from '../../data/store';
import {api} from '../../data/api';
export default {
  name:'SearchBar',
  data(){
    return{
      store,
    }
  },
  watch:{},
  props:{},
  methods:{},
  mounted(){
    api.methods.getTypologies();
  },
}
</script>
<template>

    
    <select  name="specializzazione" id="specializzazione" class="jumbotron_search">
      <option  value="" disabled selected >Seleziona specializzazione</option>

      <option v-for="(service, index) in store.services " :key=index
        value="{{ index }}"
        >
        {{ service.name }}
      </option>
    </select>
    

</template>
<style lang="scss" scoped>

</style>