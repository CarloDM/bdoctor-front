<script>
import {store} from '../../data/store';
import searchBar from '../partials/searchBarJumbo.vue'
export default {
  name:'Jumbotron',
  data(){
    return{
      store,
    }
  },
  components:{searchBar},
  watch:{},
  props:{},
  methods:{},
  mounted(){

  },
}
</script>
<template>
    <section id="jumbotron" class="bg_green pt-4">
      <div class="my_container_medium d-flex justify-content-center jb_bg_layer h-100 ">

        <div class="jumbo_search_container " style="z-index: 0;">
          <h1>Cerca Un Medico</h1>
          <searchBar/>
        </div>

      </div>
    </section>
</template>
