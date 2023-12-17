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
  methods:{
    selectedSpecialization(event){
      console.log('opzione specializzazione',event.target.selectedOptions[0].value);
      store.searching.typologies = event.target.selectedOptions[0].value;
      this.$router.push({ name: 'search' });
    }
  },
  mounted(){
    api.methods.getTypologies();
  },
}
</script>
<template>

    
    <select @change="selectedSpecialization"  name="specializzazione" id="specializzazione" class="jumbotron_search">
      <option  value="" disabled selected >Seleziona specializzazione</option>

      <option v-for="(service, index) in store.typologies " :key='index'
        :value=" index "
        >
        {{ service.name }}
      </option>
    </select>
    

</template>
<style lang="scss" scoped>

</style>