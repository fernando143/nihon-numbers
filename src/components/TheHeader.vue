<template>
    <v-toolbar>
    <v-toolbar-side-icon @click.stop="openMenu"></v-toolbar-side-icon>
    <v-toolbar-title class="titleApp japaneseFont" @click="goTo('/')">日本人 - Numbers</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="goTo('game')">Practicar</v-btn>
      <v-btn flat>Contacto</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
    data() {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
      }
    },
    methods: {
      openMenu() {
        this.$store.dispatch('openMenu', true)
      },
      goTo(route) {
        this.$router.push({path: route})
      }
    }
}
</script>

<style scoped>
.titleApp {
  cursor: pointer;
}
.japaneseFont {
    font-family: 'Noto Serif JP', serif !important;
}
</style>


