<template>
    <section class="src-components-success">
        <div class="message-container">
            <h1>Message delivered successfully!</h1>
            <h3>You'll get a response soon</h3>
            <router-link to="/home" class="link">Go to home</router-link> 
            <img src="../assets/check.png" width="100" height="100" alt="">
           
        </div>
    </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-success',
    props: [],
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

*{
   font-family: 'Montserrat', sans-serif;
}

.src-components-success{
    height: 100vh;
    background: #f8ebea;
    text-align: center;
}

.message-container{
   padding: 100px;
}

.link{
   text-decoration: none;
   font-size: 18px;
   font-weight: 700;
   color:midnightblue;
   padding: 10px;
   display: block;
}

img{
    margin: 90px;
    object-fit: cover;
}


 @media screen and (max-width: 767px){
    .message-container{
        padding: 75px 0 0 0;
    }
 }


</style>
