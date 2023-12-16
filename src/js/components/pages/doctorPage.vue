<script>
import { api } from '../../data/api';
import{store} from '../../data/store';
export default {
  name:'DoctorPage',
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
  <h1>Doctor</h1>


</template>
<style lang="scss" scoped>

</style>