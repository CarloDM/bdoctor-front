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

      <DoctorCard v-for="user,index in store.users.data" :key="index"
      :user="user"
      :id="index"
      />

    </div>
  </section>
</template>
