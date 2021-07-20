<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light py-0">
      <div class="container-fluid">
        <router-link to="/home">
          <a class="navbar-brand" href="#">Mizz pato</a>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span v-if="!navExpanded" @click="navExpanded = !navExpanded" class="navbar-toggler-icon"></span>
          <span v-else @click="navExpanded = !navExpanded"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
            </svg>
          </span>
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
        navExpanded: false
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

nav a:hover{
  color: black;
}

.navbar-brand{
    font-family: 'Caveat', cursive;
    font-size: 35px;
}

.navbar-toggler{
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}
  
</style>
