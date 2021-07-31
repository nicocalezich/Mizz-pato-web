<template>
    <div class="general"> 
        <section class="section-1">
                <h1>DATES</h1>
                <h4>Coming soon to a club near you!</h4>
                <ul>
                    <li v-for="(date,i) in dates" :key="i">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </svg> 
                        {{date}}
                    </li>
                </ul>
        </section>
    </div>
</template>

<script lang="js">

  export default  {
    name: 'src-components-dates',
    props: [],
    mounted () {

    },
    data () {
      return {
          dates: [
                'Burger & Beer Joint – Mary Brickell Village (Miami)',
                'H & M (Saturday Fiesta) – Miami',
                'Kukla Art Salon – South Beach',
                'Sweet Liberty – South Beach',
                'Side Bar – Coral Gables',
                'The Globe – Coral Gables',
                'Victor Hotel – Miami Beach',
                '420 Secret Location Miami (TBC)',
                'Mi Gente Lounge - San Sebastian, P.R.'
            ]
      }
    },
    methods: {

    },
    computed: {
    }
}


</script>

<style scoped lang="css">

@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Montserrat:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

    .general{
        margin: 0;
        width: 100%;
        height: 100vh;
        background-image: url("../assets/dates-wp.jpg");
        background-size: cover;
    }

    .section-1{
        width: 91%;
        height: 500px;
        background: #000000b9;
        color: rgb(238, 238, 238);
        transform: translate(5%, 8%);
        box-sizing: border-box;
        border-radius: 20px;
        padding: 50px 30px;
    }

    .section-1 h1{
        font-size: 40px;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
    }

    .section-1 h4{
        font-size: 25px;
        text-align: center;
        font-family: 'Indie Flower', cursive;

    }

    .section-1 ul{
        margin-top: 15px;
        list-style: none;
    }
    .section-1 ul li{
        padding: 5px;
        font-size: 17px;
        font-family: 'Montserrat', sans-serif;

    }

    /* --- MINI ---*/

    @media screen and (max-width: 760px){


        .section-1{
            padding: 30px 5px;
            height: 550px;
        }

        .section-1 ul li{
        padding: 5px 0;
        font-size: 17px;
        font-family: 'Montserrat', sans-serif;
        }

        ul{
            padding: 10px !important;
        }

        .general{
        background-image: url("../assets/dates-mini.jpg");
        }
    }

    @media screen and (max-width: 1080px){
        .general{
        background-image: url("../assets/dates-mini-2.jpg");
        }
    }

    @media screen and (max-width: 1000px){
        .general{
        background-image: url("../assets/dates-mini-3.jpg");
        }
    }

    @media screen and (max-width: 980px){
        .general{
        background-image: url("../assets/dates-mini.jpg");
        }
    }

</style>
