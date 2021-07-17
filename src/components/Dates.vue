<template>

  <section id="section-1" class="row">
        <div id="section-1-div">
            <h1 id="section-1-h1">Dates</h1>
            <h4 id="section-1-h4">Coming soon to a club near you!</h4>
            <br>
            <br>
            <ul id="section-1-ul">
                <li><i class="fas fa-chevron-right"></i> Burger & Beer Joint – Mary Brickell Village (Miami) </li>
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

    #section-1-div{
        width: 90%;
        height: 500px;
        background: #000000b9;
        color: rgb(238, 238, 238);
        transform: translate(5%, 23%);
        box-sizing: border-box;
        border-radius: 20px;
        padding: 70px 30px;
    }

    #section-1-div h1{
        margin-top: -35px;
        font-size: 40px;
    }

    #section-1-div h4{
        font-size: 20px;
    }

    #section-1-div ul{
        list-style: none;
    }
    #section-1-div ul li{
        padding: 5px;
        font-size: 16px;
    }

    /* --- MINI ---*/

    @media screen and (max-width: 858px){

        #section-1-div{
            width: 90%;
            height: 440px;
            background: #000000b9;
            color: #fff;
            margin-top: 50px;
            left: 50%;
            transform: translate(5%, 20%);
            box-sizing: border-box;
            padding: 70px 30px;
        }

        #section-1-div h1{
            text-align: center;
        }

        #section-1-div h4{
            text-align: center;
        }

        #section-1-div ul li{
            padding: 2px;        
        }
    }

</style>
