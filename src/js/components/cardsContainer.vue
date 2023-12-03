<script>
import {store} from '../data/store';
import DoctorCard from './partials/doctorCard.vue';
export default {
  name:'CardsContainer',
  data(){
    return{
      store,
    }
  },
  components:{DoctorCard},
  watch:{},
  props:{},
  methods:{

  },
  mounted(){
  },
}
</script>
<template>
  <section class="bg_green_lighten">
    <div class="my_container">

      <DoctorCard v-for="doctor,index in 20" :key="index"
      :doctor="store.fakeDoctor"
      :id="index"
      />

    </div>
  </section>
</template>
