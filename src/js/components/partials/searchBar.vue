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
    console.log('componende base');
  },
}
</script>
<template>
  <div class="search_bar_container bg_green_lighten d-flex h-100  p-2 ">
    
    <select name="mediaVoti" id="mediaVoti">
      <option value="">mediaVoti</option>
      <option value="">mediaVoti</option>
      <option value="">mediaVoti</option>
      <option value="">mediaVoti</option>
      <option value="">mediaVoti</option>
    </select>
    
    <select name="numeroRecensioni" id="numeroRecensioni">
    
      <option value="">Recensioni</option>
      <option value="">Recensioni</option>
      <option value="">Recensioni</option>
      <option value="">Recensioni</option>
      <option value="">Recensioni</option>
    </select>
    
    <select  name="service" id="service">
      <option  value="" disabled selected >Seleziona specializzazione</option>

      <option v-for="(service, index) in store.services " :key=index
        value="{{ index }}"
        >
        {{ service }}
      </option>
    </select>
    
  </div>
</template>
<style lang="scss" scoped>

</style>