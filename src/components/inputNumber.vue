<template>
    <div class="inputContainer">
      <v-text-field
        label="Ingrese un número"
        single-line
        solo
        :value="number"
        @input="e => onChangeNumber(e)"
      ></v-text-field>
    </div>
</template>

<script>
import Translator from '../helpers/translator'
export default {
    data() {
      return {
        number: '',
        translator: null
      }
    },

    created: function() {
      this.translator = new Translator()
    },

    methods: {
    onChangeNumber(e) {
      const naturalNumber = this.translator.getNaturalNumber(e)
      const numberWithMaru = this.translator.getNumberWithMaru(naturalNumber)

      this.number = numberWithMaru

      if(this.number.length) {
        this.setNumberConverted(naturalNumber)
      } else {
        this.clear()
      }
    },

    clear() {
      this.$store.dispatch('clear', '')
    },

    setNumberConverted(e) {
      const numberConverted = this.getNumberConverted(e)

      this.$store.dispatch('setNumbers', {
        hiraganaNumber: numberConverted.hira,
        katakanaNumber: numberConverted.kata,
        kanjiNumber: numberConverted.kanji
      })
    },

    getNumberConverted(number) {
      return this.translator.convert(number)
    }
    
  }
}
</script>

<style scoped>
.inputContainer {
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
  box-sizing: border-box;
}
</style>


