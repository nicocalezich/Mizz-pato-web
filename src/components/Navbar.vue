<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Mizz pato</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/home">
              <a class="nav-link" href="#">Home</a>
            </router-link>
            <router-link to="/dates">
              <a class="nav-link" href="#">Dates</a>
            </router-link>
            <router-link to="/photos">
              <a class="nav-link" href="#">Photos</a>
            </router-link>
            <router-link to="/videos">
              <a class="nav-link" href="#">Videos</a>
            </router-link>
            <router-link to="/contact">
              <a class="nav-link" href="#">Contact</a>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
</template>

<script lang="js">

  export default  {
    name: 'src-components-navbar',
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

@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

nav{
   box-shadow: 5px 0 10px rgba(0,0,0,.6);
}

nav a{
  text-decoration: none;
  padding: 5px;
}

.navbar-brand{
    font-family: 'Caveat', cursive;
    font-size: 35px;
}
  
</style>
