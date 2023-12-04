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
    doctor: Object,
    id:Number, //id fake del ciclo
  },
  methods:{

    getRatingPercentage(){
      const rating = this.doctor.rating;
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
  },

}
</script>
<template>
  <div class="doctor_card d-flex flex-column  w-100 ">
    
    <div class="doctor_row_top w-100 d-flex  ">
      
      <img v-if="doctor.photo === null && doctor.sex === 'female'"
      src="../../../assets/femaledoctor-placeholder.jpg" :alt="doctor.name" class="doctor_photo ">
      <img v-else-if="doctor.photo === null && doctor.sex === 'male'"
      src="../../../assets/maledoctor-placeholder.jpg" :alt="doctor.name" class="doctor_photo ">
      <img v-else
      :src='doctor.photo' :alt="doctor.name" class="doctor_photo ">

      <div class="doctor_info_container  h-100 ">
        <h6>{{ doctor.name }}</h6>
        <p>{{ doctor.services.join(', ') + '.' }}</p>

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
          <span> {{ ' ' + doctor.reviews + ' ' + 'recensioni'}}</span>
        </span>
      </div>
      
    </div>

    <div class="doctor_row_bottom  w-100 ">
      <p>{{ doctor.address }}</p>

      <p 
        :id="id" class="description my_italic">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit perspiciatis dolores porro earum cum delectus consequuntur a quos obcaecati rem laudantium, iusto, temporibus sapiente, beatae exercitationem architecto sequi! Neque facere quasi labore ex sapiente nisi tempore iure! Illum autem quae officiis nostrum repellat nesciunt accusamus dolor molestiae rerum vel, omnis reiciendis? Excepturi reprehenderit temporibus ullam adipisci quo sit autem molestiae, vitae est saepe quibusdam vel eaque aut suscipit porro exercitationem necessitatibus dignissimos facere odio rerum vero! Eum, asperiores quis! Architecto harum unde expedita numquam nihil fuga cupiditate molestias excepturi possimus facere in quae aspernatur, fugiat tempora veritatis at reiciendis. Modi aperiam suscipit consequuntur consectetur cumque eos? Nobis accusamus, in nemo inventore repellendus unde aperiam! Ad distinctio consequuntur numquam odit nemo necessitatibus aut perferendis dignissimos expedita! Rerum sed dignissimos aperiam atque hic, nostrum recusandae nemo modi voluptatibus vitae ab? Molestias minus quos, sapiente sit blanditiis alias obcaecati! Debitis officia commodi beatae inventore dolores eius exercitationem ipsa at reiciendis! Soluta, veniam ducimus beatae quae, eaque cupiditate, culpa ex ratione itaque temporibus minus rerum. Voluptate facilis debitis possimus voluptatem voluptas, eum blanditiis fugiat doloribus ad. Inventore deserunt corrupti, eligendi atque dolor saepe error qui natus adipisci dignissimos aliquam iste doloremque, reprehenderit molestiae animi asperiores. Sed alias eaque illum asperiores nostrum incidunt sint dignissimos voluptas animi corporis iusto, iure provident amet vel enim. Odit dignissimos nisi laborum impedit laboriosam sapiente temporibus quia! Dignissimos nobis error, nulla consectetur libero debitis facere magnam hic, tempore doloremque nisi qui vero laudantium officia? Aliquid obcaecati dolore, neque excepturi beatae vero eaque explicabo quas nemo error, vitae architecto tenetur voluptate dicta. Aut debitis minus, sunt ea mollitia et iusto earum explicabo laboriosam voluptates repudiandae eum. Quis rerum, iste aliquam nisi explicabo optio debitis dignissimos molestiae praesentium! Non, aspernatur. Doloremque quos in excepturi voluptates dolore sapiente, libero incidunt esse dicta error. Consectetur amet sint voluptatum sapiente modi blanditiis, atque placeat suscipit a natus omnis impedit laudantium quos cumque consequuntur iure nemo tempora vitae explicabo! Nihil, praesentium! Totam voluptatum ducimus aperiam iure corrupti voluptatibus minima delectus odio temporibus sit, culpa, vero aliquid ut? Cupiditate laboriosam eos quasi et sapiente perferendis, ducimus nobis id. Accusamus modi delectus ipsum odit dicta, sit architecto voluptatibus natus. Repudiandae explicabo corporis, hic id illo blanditiis, consequuntur quisquam aperiam, quidem accusamus earum modi maiores iusto beatae corrupti tenetur vero cupiditate culpa. Tenetur beatae, quasi nihil hic, nam odit laborum eum vero voluptatum error sunt, nostrum neque? Assumenda?
      </p>

    </div>


  </div>
</template>
<style lang="scss" scoped>

</style>