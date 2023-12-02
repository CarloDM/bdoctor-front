<script>
import{store} from '../../data/store';
import Jumbotron from '../partials/jumbotron.vue'
export default {
  name:'Home',
  data(){
    return{
      store,
    }
  },
  components:{Jumbotron},
  watch:{},
  methods:{},
  mounted(){
    console.log('whereIam?', this.$route.name );
  },
}
</script>
<template>

  <Jumbotron/>



</template>
