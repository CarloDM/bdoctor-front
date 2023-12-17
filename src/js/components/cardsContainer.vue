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
  <section class="bg_green_lighten min-vh-100">
    <div v-if="store.usersIsload" class="my_container">

      <DoctorCard v-for="user,index in store.users.data" :key="index"
      :user="user"
      :id="index"
      />
      
    </div>

    <div v-else  class="my_container">
      <h3 class=" mt-5">Loading</h3>
    </div>
  </section>
</template>
