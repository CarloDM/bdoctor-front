<script>
import{store} from '../../data/store';
import Jumbotron from '../partials/jumbotron.vue';
import CardsContainer from '../cardsContainer.vue';
import { api } from '../../data/api';
export default {
  name:'Home',
  data(){
    return{
      store,
    }
  },
  components:{Jumbotron,CardsContainer},
  watch:{},
  methods:{},
  mounted(){
    api.methods.getDoctors();
    console.log('whereIam?', this.$route.name );
  },
}
</script>
<template>

  <Jumbotron/>

  <CardsContainer/>

</template>
