<template>
  <section>

   <section class="section-1">
      <Carousel3d>
        <Slide :index="0">
          <img class="carousel-img" src="../assets/photo-1571397133301-3f838ea96f56.jpg">
        </Slide>
        <Slide :index="1">
          <img class="carousel-img" src="../assets/photo-1571397133301-3f838ea96f56.jpg">
        </Slide>
        <Slide :index="2">
          <img class="carousel-img" src="../assets/photo-1571397133301-3f838ea96f56.jpg">
        </Slide>
        <Slide :index="3">
          <img class="carousel-img" src="../assets/photo-1571397133301-3f838ea96f56.jpg">
        </Slide>
        <Slide :index="4">
          <img class="carousel-img" src="../assets/photo-1571397133301-3f838ea96f56.jpg">
        </Slide>
        <Slide :index="5">
          <img class="carousel-img" src="../assets/photo-1571397133301-3f838ea96f56.jpg">
        </Slide>
        <Slide v-for="(slide,i) in slides" :index="i" :key="i">
          <template slot-scope="{index, isCurrent, leftIndex, rightIndex}">
            <img class="carousel-img" :data-index="index" :class="{current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >=0) }" :src="slide.src">
          </template>
        </Slide>
      </Carousel3d>
 </section>

 <section class="section-2">

        <div class="row">
            <div @click="getFullscreen()" class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img id="1" src="../assets/photo-1571397133301-3f838ea96f56.jpg"></div>
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
    </section>

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
      getFullscreen(){
        let element = document.getElementById("1")
        if(element.requestFullscreen) {
            element.requestFullscreen();
          } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
          } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
          }
}

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .section-1{
    padding: 10px;
    text-align: center;
  }

  .section-2{
    padding: 10px;
    text-align: center;
  }

  .carousel-img{
    width: 360px;
    height: 270px;
    cursor:pointer;
  }

  .section-2 img{
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
