<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>v0.4.2 - &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
    }
  }
}
</script>

<style>
.japaneseFont {
  font-family: 'Noto Serif JP', serif !important;
}
.japaneseFont--light {
  font-weight: 300;
}
</style>
