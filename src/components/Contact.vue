<template>

  <section class="src-components-contact">
    <div class="form-container">
     <vue-form :state="formState" @submit.prevent="send()">
        <h1>Contact me!</h1>
        <!-- email -->
        <validate tag="div">
           <div class="field">
            <div class="label"><label for="user">Your email</label></div>
            <input
                class="input"
                name="email"
                id="email"
                type="email"
                placeholder="Enter your mail"
                v-model.trim="formData.email"
                required
            />
            <field-messages name="email" show="$dirty">
              <div slot="required" class="alert alert-danger error">
                Enter your email
              </div>
              <div slot="email" class="alert alert-danger error">
                Enter a valid email
              </div>
            </field-messages>
          </div>
        </validate>

        <!-- message -->
        <validate tag="div">
          <div class="field">
            <div class="label"><label for="message">Your message</label></div>
            <textarea
                class="input"
                name="message"
                id="message"
                type="text"
                placeholder="Write a message..."
                v-model.trim="formData.message"
                required
            />
            <field-messages name="message" show="$dirty">
              <div slot="required" class="alert alert-danger error">
                Write a message
              </div>
            </field-messages>
          </div>
        </validate>
        <!-- btn send -->
        <div v-if="!waitingResponse">
          <button type="submit" :disabled="formState.$invalid">
            Send
          </button>
        </div> 
        <div v-else>
          <Preloader/>
        </div>   
        <div v-show="error" class="error mt-3">
          <h3>Ups! An error occurred when sending the message</h3>
          <h5>please, try again later</h5> 
        </div>
           
      </vue-form>
    </div>
  </section>

</template>


<script lang="js">

import Preloader from './Preloader.vue'

  export default  {
    name: 'src-components-contact',
    props: [],
    components:{
      Preloader
    },
    mounted () {

    },
    data () {
      return {
        formData: this.getInicialData(),
        formState: {},
        waitingResponse: false,
        url: 'https://formspree.io/f/xvodwkjo', //xvodwkjo
        error: false
      }
    },
    methods: {

      getInicialData() {
        return {
          email: '',
          message: '',
        }
      },

      send() {
        this.waitingResponse = true
        this.error = false

        let data = {
          email: this.formData.email,
          message: this.formData.message
        }

        let raw = JSON.stringify(data)

        let requestOptions = {
          method: 'POST',
          headers: {
                'Accept': 'application/json'
            },
          body: raw,
        };

        fetch(this.url, requestOptions)
            .then((r) => {
              this.waitingResponse = false
              if(r.status === 200){
                this.$router.push('/success')          
              }
              else{
                this.error = true
              }
            }
          
           )
            .catch(error => {
              this.error = true
              console.error(error)
            }
            );
            
            
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">

*{
   font-family: 'Montserrat', sans-serif;
}
  .src-components-contact {
    text-align: center;
    background: #f8ebea;
    height: 100vh;
  }

  .form-container{
    padding: 55px 250px;
    margin: 0 auto;
  }

  .input{
    border: 1px solid black;
    padding: 5px;
    width: 100%;
    background: #faf7f7;
  }

  .label{
    text-align: left;
  }

  .field{
    margin: 25px 0;
  }

  textarea{
    height: 125px;
  }

  button{
    border: none;
    padding: 7px 15px;
    border-radius: 10px;
    width: 20%;
    background: #FBC3BC;
    outline:none;
  }

  button:hover{
    background: #e6aba5;
    transition: .4s;
  }

  .error{
    padding: 0;
    margin: 8px 0;
    background: none;
    border: none;
    color: crimson;
    font-weight: 700;
  }



  /*responsive*/

   @media screen and (max-width: 950px){
     button{
       width: 30%;
     }

     .form-container{
        padding: 55px 150px;
      }
    }

    @media screen and (max-width: 767px){
     button{
       width: 50%;
     }

     .form-container{
        padding: 55px 25px;
      }
    }
    

</style>
