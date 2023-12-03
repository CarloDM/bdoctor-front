
<script>
export default {
  name:'Header',
  data(){
    return{

    }
  },
  watch:{},
  props:{},
  methods:{},
  mounted(){
    console.log('componende base');
  },
}
</script>
<template>
    <header>
      <div class="my_header_container d-flex  justify-content-between p-0 ">

        <a href="/"  class="logo_container">
          <img src="../../assets/user-doctor-opt-icon.svg" alt="logo">
          <h1 class="my_italic text_green_dark">B-Doctor</h1>
        </a>


        <div v-if="this.$route.name === 'search'"
        class="search_bar_container bg_green_lighten d-flex h-100  p-2 ">

            <select name="mediaVoti" id="mediaVoti">
              <option value="">mediaVoti</option>
              <option value="">mediaVoti</option>
              <option value="">mediaVoti</option>
              <option value="">mediaVoti</option>
              <option value="">mediaVoti</option>
            </select>
  
            <select name="numeroRecensioni" id="numeroRecensioni">
              <option value="">Recensioni</option>
              <option value="">Recensioni</option>
              <option value="">Recensioni</option>
              <option value="">Recensioni</option>
              <option value="">Recensioni</option>
            </select>

            <select  name="specializzazione" id="specializzazione">
              <option value="" disabled selected>Seleziona specializzazione</option>
              <option value="">specializzazione</option>
              <option value="">specializzazione</option>
              <option value="">specializzazione</option>
              <option value="">specializzazione</option>
              <option value="">specializzazione</option>
            </select>


        </div>


        <div class="menu-container h-100 ">
          <P>MENU</P>
        </div>




      </div>
    </header>
</template>
<style lang="scss" scoped>

</style>