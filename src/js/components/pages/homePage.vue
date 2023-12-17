<script>
import{store} from '../../data/store';
import { api } from '../../data/api';
import Jumbotron from '../partials/jumbotron.vue';
import CardsContainer from '../cardsContainer.vue';
import Paginator from '../partials/paginator.vue';
export default {
  name:'Home',
  data(){
    return{
      store,
    }
  },
  components:{Jumbotron,CardsContainer, Paginator},
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
  <Paginator />
  <CardsContainer/>
  <Paginator />

</template>
