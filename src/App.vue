<template>
  <div id="app">
    <the-menu></the-menu>
    <div class="AppContainer">
      <the-header></the-header>
      <router-view></router-view>
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
import TheMenu from './components/TheMenu'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TheMenu
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
.AppContainer {
    display: grid;
    height: 100vh;
    grid-template-rows: auto 1fr auto;
}
</style>
