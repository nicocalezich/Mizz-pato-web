<template>

  <section class="src-components-contact">
    <div class="contact-box">
      <h1>Contact me!</h1>
      <div class="input-field">
        <label>Enter your name</label>
        <input>
      </div>
      <div class="input-field">
        <label>Enter your email</label>
        <input>
      </div>  
      <div class="input-field">
        <label>Write your message</label>
        <textarea/>
      </div>
     <button type="submit">Send</button>

    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-contact',
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
  .src-components-contact {

  }

  .contact-box{
    text-align: center;
    margin: 30px;
  }

  .input-field{
    margin: 20px;
  }

  .input-field label{
    display: block;
  }

  .input-field textarea{
    width: 30%;
    height: 170px;
  }



</style>
