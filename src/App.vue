<template>
  <div id="app">
    <input type="text" v-model="number">
    <button @click="start">Traducir</button>
    <div>
      <h5>{{ outputNumber }}</h5>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      number: '',
      lengthNumber: '',
      outputNumber: '',
      nativeNumbers: ['れい','いち','に','さん','よん','ご','ろく','なな','はち','きゅう','じゅう']
    }
  },

  methods: {
    start() {
      this.calculateLength();
    },

    calculateLength() {
      let length = this.number.length;
      this.lengthNumber = length;

      this.selectRule();
    },

    selectRule() {
      switch (this.lengthNumber) {
        case 1:
          this.ruleOne();
          break;
        case 2:
          this.ruleTwo();
          break;
        default:
          this.outputNumber = 'no tengo idea'
          console.log(this.lengthNumber)
          break;
      }
    },
      ruleOne() {
        let position = this.number
        this.outputNumber = this.nativeNumbers[position]
      },
      ruleTwo() {
        let positionOfFirstNumber = this.number.indexOf(1);//search the 1 number
        let valueFirstNumber = this.number.slice(0,1);
        let restOfNumber = this.number.slice(1);
        let countFirstForm;
        let ruleToTest = new RegExp(/([1-9]0)/);
        let valueTest = ruleToTest.test(this.number);

        // only for those numbers [10,...,90]
        if(valueTest) {
          switch (valueTest) {
          case (this.lengthNumber === 2 && this.number != '10'):
            this.outputNumber = this.nativeNumbers[valueFirstNumber] + this.nativeNumbers[10];
            break;
          case (this.number === '10'):
            this.outputNumber = this.nativeNumbers[10];
            break;
          }

          return
        }

        if(positionOfFirstNumber === 0) {
          countFirstForm = true
        } else {
          countFirstForm = false
        }

        if(countFirstForm) {
          this.outputNumber = this.nativeNumbers[10] + this.nativeNumbers[restOfNumber]
        } else {
          this.outputNumber = this.nativeNumbers[valueFirstNumber] + this.nativeNumbers[10] + this.nativeNumbers[restOfNumber]
        }
      }
  }
}
</script>

<style>

</style>
