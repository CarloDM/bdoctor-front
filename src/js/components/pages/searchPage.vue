<script>
import{store} from '../../data/store';
import Paginator from '../partials/paginator.vue';
export default {
  name:'SearchPage',
  data(){
    return{
      store,
    }
  },
  components:{Paginator},
  watch:{},
  methods:{},
  mounted(){
    console.log('whereIam?', this.$route.name );
  },
}
</script>
<template>
  <Paginator/>
  <h1>search</h1>

  <Paginator/>
</template>
<style lang="scss" scoped>

</style>