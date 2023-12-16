<script>
export default {
  name:'DoctorCard',
  data(){
    return{
      ratingPercentage: null,
      originalDescription: '',
    }
  },
  watch:{},
  props:{
    user: Object,
    id:Number, //id fake del ciclo
  },
  methods:{

    getRatingPercentage(){

      const rating = this.user.averageStars;
      const percentage = ((rating / 5 ) * 100).toFixed(1);
      this.ratingPercentage = parseFloat(percentage);

    },

    saveOriginalDescription(){
      const description = document.getElementById(this.id);
      this.originalDescription = description.textContent;
    },

    descriptionLengthLimit(){
      const description = document.getElementById(this.id);
      description.textContent = this.originalDescription;
      const containerWidth = description.offsetWidth;
      const words = 23.8;
      const maxWords = (containerWidth / words);
      const originalText = description.textContent;
      const wordsArray = originalText.split(' ');
      const truncatedText = wordsArray.slice(0, maxWords).join(' ');
      description.textContent = truncatedText + '...';
    },
  },

  mounted(){
    this.getRatingPercentage();
    this.saveOriginalDescription();
    this.descriptionLengthLimit();
    window.addEventListener('resize', this.descriptionLengthLimit);
    console.log(this.user);
  },

}
</script>
<template>
  <div class="doctor_card d-flex flex-column  w-100 ">
    
    <div class="doctor_row_top w-100 d-flex  ">
      
      <img v-if="user.doctor.photo === null"
      src="../../../assets/femaledoctor-placeholder.jpg" :alt="user.name +' '+ user.lastname" class="doctor_photo ">
      <img v-else
      :src='user.doctor.photo' :alt="user.name +' '+ user.lastname" class="doctor_photo ">

      <div class="doctor_info_container  h-100 ">
        <h6>{{ user.name }} {{ user.lastname }}</h6>
        <p>{{ user.doctor.services }}</p>

        <span style="position: relative;">

          <img src="../../../assets/star-regular.svg" alt="">
          <img src="../../../assets/star-regular.svg" alt="">
          <img src="../../../assets/star-regular.svg" alt="">
          <img src="../../../assets/star-regular.svg" alt="">
          <img src="../../../assets/star-regular.svg" alt="">

          <div class="star_overlay " :style="{width: this.ratingPercentage + '%'}" >
            <img src="../../../assets/star-solid.svg" alt="">
            <img src="../../../assets/star-solid.svg" alt="">
            <img src="../../../assets/star-solid.svg" alt="">
            <img src="../../../assets/star-solid.svg" alt="">
            <img src="../../../assets/star-solid.svg" alt="">
          </div>

        </span>
        
        <span>
          <img src="../../../assets/comment-solid.svg" alt="">
          <span> {{ ' ' + this.user.reviewCount + ' ' + 'recensioni'}}</span>
        </span>
      </div>
      
    </div>

    <div class="doctor_row_bottom  w-100 ">
      <p>{{ user.doctor.address }}</p>

      <p 
        :id="id" class="description my_italic">
        {{ user.doctor.description }}
      </p>

    </div>


  </div>
</template>
<style lang="scss" scoped>

</style>