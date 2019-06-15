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
                                <h3 class="headline japaneseFont">ひらがな</h3>
                                <span class=".body-2 japaneseFont japaneseFont--light">{{ hiraganaNumber }}</span>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>

                <v-flex xs12>
                    <v-card color="indigo" class="card white--text">
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline japaneseFont">カタカナ</h3>
                                <span class=".body-2 japaneseFont japaneseFont--light">outputNumber</span>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>

                <v-flex xs12>
                    <v-card color="indigo" class="card white--text">
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline japaneseFont">漢字</h3>
                                <span class=".body-2 japaneseFont japaneseFont--light">outputNumber</span>
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
           let value = this.$store.getters.getHiraganaNumber
           return value
       }
   }
}
</script>




