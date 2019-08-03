<template>
    <v-card>
        <v-container
          fluid
          grid-list-lg
        >
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card color="indigo" class="card white--text">
                        <v-card-title primary-title>
                            <div>
                                <div class="customTitle">
                                    <h3 class="headline japaneseFont">ひらがな</h3>
                                    <span class="japaneseFont grey--text text--lighten-3">Hiragana</span>
                                </div>
                                <span class=".body-2 japaneseFont japaneseFont--light">{{ hiraganaNumber }}</span>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>

                <v-flex xs12>
                    <v-card color="indigo" class="card white--text">
                        <v-card-title primary-title>
                            <div>
                                <div class="customTitle">
                                    <h3 class="headline japaneseFont">カタカナ</h3>
                                    <span class="japaneseFont grey--text text--lighten-3">Katakana</span>
                                </div>
                                <span class=".body-2 japaneseFont japaneseFont--light">{{ katakanaNumber }}</span>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>

                <v-flex xs12>
                    <v-card color="indigo" class="card white--text">
                        <v-card-title primary-title>
                            <div>
                                <div class="customTitle">
                                    <h3 class="headline japaneseFont">漢字</h3>
                                    <span class="japaneseFont grey--text text--lighten-3">Kanji</span>
                                </div>
                                <span class=".body-2 japaneseFont japaneseFont--light">{{ kanjiNumber }}</span>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>

export default {
   computed: {
       hiraganaNumber() {
           let hiragana = this.$store.getters.getHiraganaNumber
           return hiragana
       },
       katakanaNumber() {
           let katakana = this.$store.getters.getKatakanaNumber
           return katakana
       },
       kanjiNumber() {
           let kanji = this.$store.getters.getKanjiNumber
           return kanji
       }
   }
}
</script>

<style scoped>
.customTitle {
    margin-bottom: 10px;
}
.japaneseFont {
  font-family: 'Noto Serif JP', serif !important;
}
.japaneseFont--light {
  font-weight: 300;
}
</style>




