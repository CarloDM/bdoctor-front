
<script>
import {store} from '../../data/store';
import { api } from '../../data/api';
export default {
  name:'Paginator',
  data(){
    return{
      store,
      api
    }
  },
  watch:{},
  props:{},
  methods:{},
  mounted(){

  },
}
</script>
<template>
  <div class="paginator bg_green_lighten">
    <div class="my_container p-1">

      <div v-if="store.usersIsload"
      class="paginator_btn_container d-flex justify-content-around">

        <div v-for="(link, index) in store.searching.paginate.links" :key="index"
        class="paginate_btn d-flex justify-content-center align-items-center">

          <a v-if='!(index === 0) && !(index === 14) && link.url' 
          @click="api.methods.navigateResults(link.url)"
          class="text_blue_dark paginator_link"
          >
          {{ link.label }}</a>

        </div>

      </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>
.paginator{
  min-height: 33px;
  }
.paginator_btn_container{
  height: 25px;
}
.paginate_btn{
  width: 25px;
  height: 25px;
  text-align: center;
}

.paginator_link{
  cursor: pointer;
}

</style>