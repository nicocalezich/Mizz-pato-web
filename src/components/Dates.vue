<template>

  <section class="row section-1">
        <div id="section-1-div">
            <h1 id="section-1-h1">Dates</h1>
            <h4 id="section-1-h4">Coming soon to a club near you!</h4>
            <br>
            <br>
            <ul id="section-1-ul">
                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg> Burger & Beer Joint – Mary Brickell Village (Miami) </li>
                <li><i class="fas fa-chevron-right"></i> H & M (Saturday Fiesta) – Miami</li>
                <li><i class="fas fa-chevron-right"></i> Kukla Art Salon – South Beach</li>
                <li><i class="fas fa-chevron-right"></i> Sweet Liberty – South Beach</li>
                <li><i class="fas fa-chevron-right"></i> Side Bar – Coral Gables</li>
                <li><i class="fas fa-chevron-right"></i> The Globe – Coral Gables</li>
                <li><i class="fas fa-chevron-right"></i> Victor Hotel – Miami Beach</li>
                <li><i class="fas fa-chevron-right"></i> 420 Secret Location Miami (TBC)</li>
                <li><i class="fas fa-chevron-right"></i> Mi Gente Lounge - San Sebastian, P.R.</li>
            </ul>
        </div>
    </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-dates',
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

    /*--- SECTION 1 ---*/

    .section-1{
        margin: 0 0 590px 0;
    }

    #section-1-div{
        position: absolute;
        width: 91%;
        height: 500px;
        background: #000000b9;
        color: rgb(238, 238, 238);
        transform: translate(5%, 8%);
        box-sizing: border-box;
        border-radius: 20px;
        padding: 70px 30px;
    }

    #section-1-div h1{
        margin-top: -35px;
        font-size: 40px;
        text-align: center;
        
    }

    #section-1-div h4{
        font-size: 20px;
        text-align: center;
    }

    #section-1-div ul{
        margin-top: -15px;
        list-style: none;
    }
    #section-1-div ul li{
        padding: 5px;
        font-size: 16px;
    }

    /* --- MINI ---*/

    @media screen and (max-width: 858px){

     
    }

</style>
