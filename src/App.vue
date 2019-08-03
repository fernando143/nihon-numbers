<template>
  <div id="app">
    <Header></Header>
    <menu-header></menu-header>
    <router-view></router-view>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>v0.7.2 - &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import MenuHeader from './components/Menu'
export default {
  name: 'App',
  components: {
    Header,
    MenuHeader
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
