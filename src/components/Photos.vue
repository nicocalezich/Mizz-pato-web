<template>
  <section class="section-1">
    <div class="row">
      <div v-for="(photo, i) in photos" :key="i" class="col-sm-12 col-sm-12 col-md-6 col-lg-3">
        <img alt="mizz-pato-photo" @click="getFullscreen(i)" :id="i" :src="getImage(photo)"></div>
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
        fullscrean: false,
        photos: ['patodj2.png',
                'descarga.jpg',
                'Patobig.png',
                'introwallpaper.jpg',
                'photo-1571397133301-3f838ea96f56.jpg',
                'descarga.jpg',
                'introwallpaper.jpg',
                'photo-1571397133301-3f838ea96f56.jpg',
                'photo-1571397133301-3f838ea96f56.jpg',
                'introwallpaper.jpg',
                'patodj2.png',
                'Patobig.png',
                'photo-1571397133301-3f838ea96f56.jpg',
                'photo-1571397133301-3f838ea96f56.jpg',
                'photo-1571397133301-3f838ea96f56.jpg',
                'photo-1571397133301-3f838ea96f56.jpg',
                'photo-1571397133301-3f838ea96f56.jpg',
                'photo-1571397133301-3f838ea96f56.jpg',
                'photo-1571397133301-3f838ea96f56.jpg'
                ],
      }
    },
    methods: {
      getFullscreen(i){
        let element = document.getElementById(i)    
        if(element.requestFullscreen && !this.fullscrean) {
          this.fullscrean = !this.fullscrean
          element.requestFullscreen();
          element.style.objectFit = "none"
        }
        else{      
          this.fullscrean = !this.fullscrean
          document.exitFullscreen();
          element.style.objectFit = "cover"
        }
      },

      getImage(photo) {
        return require('../assets/Photos/'+photo);
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
    background: #f8ebea;

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

</style>
