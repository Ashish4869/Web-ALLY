<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #e0f3fe;
}

/* --Scroll Bar-- */

/* width */

::-webkit-scrollbar {
  width: 10px;
}

/* Track */

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #e0f3fe;
  border-radius: 5px;
  background-clip: content-box;
}

/* Handle */

::-webkit-scrollbar-thumb {
  background: #4f6ecc;
  border-radius: 5px;
}

/* Handle on hover */

::-webkit-scrollbar-thumb:hover {
  background: #dc143c;
}

/* --End Of Scroll Bar-- */

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
