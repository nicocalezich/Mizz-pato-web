<template>
  <section class="section-1">
   <div class="row">
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img @click="getFullscreen('1')" id="1" src="../assets/Photos/patodj2.png"></div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img @click="getFullscreen('2')" id="2" src="../assets/Photos/descarga.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img @click="getFullscreen('3')" id="3" src="../assets/Photos/Patobig.png"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img @click="getFullscreen('4')" id="4" src="../assets/Photos/introwallpaper.jpg"> </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img @click="getFullscreen('5')" id="5" src="../assets/Photos/photo-1571397133301-3f838ea96f56.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img @click="getFullscreen('6')" id="6" src="../assets/Photos/descarga.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img @click="getFullscreen('7')" id="7" src="../assets/Photos/introwallpaper.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img @click="getFullscreen('8')" id="8" src="../assets/Photos/photo-1571397133301-3f838ea96f56.jpg"> </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img @click="getFullscreen('9')" id="9" src="../assets/Photos/photo-1571397133301-3f838ea96f56.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img @click="getFullscreen('10')" id="10" src="../assets/Photos/introwallpaper.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img @click="getFullscreen('11')" id="11" src="../assets/Photos/patodj2.png"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img @click="getFullscreen('12')" id="12" src="../assets/Photos/Patobig.png"> </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img @click="getFullscreen('13')" id="13" src="../assets/Photos/photo-1571397133301-3f838ea96f56.jpg"> </div>
            <div class="col-sm-12 col-sm-12 col-md-6 col-lg-3"> <img @click="getFullscreen('14')" id="14" src="../assets/Photos/photo-1571397133301-3f838ea96f56.jpg"> </div>
        </div> 
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-photos',
    props: [],
    components:{

    },
    mounted () {

    },
    data () {
      return {
        fullscrean: false
      }
    },
    methods: {
      getFullscreen(i){
        let element = document.getElementById(i) 
        if(element.requestFullscreen && !this.fullscrean) {
            this.fullscrean = !this.fullscrean
            element.requestFullscreen();
        }
          else{
            this.fullscrean = !this.fullscrean
            document.exitFullscreen();
          }
      }

    },
    computed: {

    }
}

</script>

<style scoped lang="css">
  .section-1{
    padding: 12px;
    margin: 0px;
    text-align: center;
  }

  .section-1 img{
    margin-top: 40px;
    max-width: 100%;
    width: 350px;
    height: 300px;
    border-radius: 7px;
    cursor:pointer;
    box-shadow: 2px 2px 11px 2px rgba(0,0,0,.6);
    object-fit: cover;
    transition: transform .2s;
  }

  .section-1 img:hover{
    box-shadow: 5px 5px 22px 5px rgba(0,0,0,.6);
    transform: scale(1.03);
  }

  @media screen and (max-width: 760px){
    .section-1 img{
     box-shadow: 2px 2px 11px 2px rgba(0,0,0,.6);
  }

  
}
</style>
