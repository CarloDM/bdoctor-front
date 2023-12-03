<script>
import {store} from '../../data/store';
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
  },
}
</script>
<template>

    
    <select  name="specializzazione" id="specializzazione" class="jumbotron_search">
      <option  value="" disabled selected >Seleziona specializzazione</option>
      <option value="">specializzazione</option>
      <option value="">specializzazione</option>
      <option value="">specializzazione</option>
      <option value="">specializzazione</option>
      <option value="">specializzazione</option>
    </select>
    

</template>
<style lang="scss" scoped>

</style>