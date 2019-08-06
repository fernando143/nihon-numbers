<template>
<v-card class="Game">
        <v-container
          fluid
          grid-list-lg
        >
            <v-layout row wrap>
                <v-flex xs12>
                  <v-btn block color="indigo" dark large class="japaneseFont" @click="goToPage('1')">Español a ひらがな</v-btn>
                </v-flex>

                <v-flex xs12>
                    <v-btn block color="indigo" dark large class="japaneseFont" @click="goToPage('2')">Español a カタカナ</v-btn>
                </v-flex>

                <v-flex xs12>
                      <v-btn block color="indigo" dark large class="japaneseFont" @click="goToPage('3')">Español a 漢字</v-btn>
                </v-flex>

                <v-flex xs12>
                      <v-btn block color="indigo" dark large class="japaneseFont" @click="goToPage('4')">ひらがな a Español</v-btn>
                </v-flex>

                <v-flex xs12>
                      <v-btn block color="indigo" dark large class="japaneseFont" @click="goToPage('5')">カタカナ a Español</v-btn>
                </v-flex>

                <v-flex xs12>
                  <v-btn block color="indigo" dark large class="japaneseFont" @click="goToPage('6')">漢字 a Español</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
export default {
    methods: {
      goToPage(route) {
        this.$router.push({path: `/game/${route}`})
      }
    }
}
</script>

<style scoped>
.japaneseFont {
  font-family: 'Noto Serif JP', serif !important;
}
.japaneseFont--light {
  font-weight: 300;
}
.Game {
  margin-top: 50px;
}
.Game__title-option {
  width: 100%;
}
</style>


