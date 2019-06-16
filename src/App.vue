<template>
  <div id="app">
    <Header></Header>
    <Input-number></Input-number>
    <Content-card></Content-card>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>v0.2.1 - &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import InputNumber from './components/InputNumber'
import ContentCard from './components/ContentCard'
export default {
  name: 'App',
  components: {
    Header,
    InputNumber,
    ContentCard
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
