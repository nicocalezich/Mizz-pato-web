<template>

   <section id="section-1">
      <Carousel3d>
        <Slide :index="0">
          <img src="../assets/photo-1571397133301-3f838ea96f56.jpg">
        </Slide>
        <Slide :index="1">
          <img src="../assets/photo-1571397133301-3f838ea96f56.jpg">
        </Slide>
        <Slide :index="2">
          <img src="../assets/photo-1571397133301-3f838ea96f56.jpg">
        </Slide>
      </Carousel3d>

      <Carousel3d>
        <Slide v-for="(slide,i) in slides" :index="i" :key="i">
          <template slot-scope="{index, isCurrent, leftIndex, rightIndex}">
            <img :data-index="index" :class="{current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >=0) }" :src="slide.src">
          </template>
        </Slide>
      </Carousel3d>



     <!--
        <div class="row">
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img src="../assets/photo-1571397133301-3f838ea96f56.jpg"></div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img src="../assets/photo-1571397133301-3f838ea96f56.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img src="../assets/photo-1571397133301-3f838ea96f56.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img src="../assets/photo-1571397133301-3f838ea96f56.jpg"> </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img src="../assets/photo-1571397133301-3f838ea96f56.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img src="../assets/photo-1571397133301-3f838ea96f56.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img src="../assets/photo-1571397133301-3f838ea96f56.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img src="../assets/photo-1571397133301-3f838ea96f56.jpg"> </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img src="../assets/photo-1571397133301-3f838ea96f56.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img src="../assets/photo-1571397133301-3f838ea96f56.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img src="../assets/photo-1571397133301-3f838ea96f56.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img src="../assets/photo-1571397133301-3f838ea96f56.jpg"> </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img src="../assets/photo-1571397133301-3f838ea96f56.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img src="../assets/photo-1571397133301-3f838ea96f56.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img src="../assets/photo-1571397133301-3f838ea96f56.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img src="../assets/photo-1571397133301-3f838ea96f56.jpg"> </div>
        </div>
        -->
    </section>

</template>

<script lang="js">

import  {Carousel3d, Slide} from 'vue-carousel-3d'

  export default  {
    name: 'src-components-photos',
    props: [],
    components:{
      Carousel3d,
      Slide
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  #section-1{
    padding: 10px;
    text-align: center;
  }

   img{
        margin-top: 50px;
        max-width:100%;
        width:auto;
        height: 250px;
        border-radius: 7px;
        cursor:pointer;
    }

    img:hover{
      box-shadow: 10px 0px 15px rgba(0,0,0,.6);
    }
</style>
