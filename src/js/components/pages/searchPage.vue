<script>
import{store} from '../../data/store';
export default {
  name:'SearchPage',
  data(){
    return{
      store,
    }
  },
  watch:{},
  methods:{},
  mounted(){
    console.log('whereIam?', this.$route.name );
  },
}
</script>
<template>
  <h1>search</h1>


</template>
<style lang="scss" scoped>

</style>