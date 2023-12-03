<script>
import{store} from '../../data/store';
import Jumbotron from '../partials/jumbotron.vue';
import CardsContainer from '../cardsContainer.vue';
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
    console.log('whereIam?', this.$route.name );
  },
}
</script>
<template>

  <Jumbotron/>

  <CardsContainer/>

</template>
