<template>
  <div id="app">
    <input type="text" v-model="number" v-on:input="start">
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
      nativeNumbers: ['れい','いち','に','さん','よん','ご','ろく','なな','はち','きゅう','じゅう'],
      hyakuNumbers: ['ひゃく','にひゃく','さんびゃく','よんひゃく','ごひゃく','ろっぴゃく','ななひゃく','はっぴゃく','きゅうひゃく'],
      senNumbers: ['せん','にせん','さんぜん','よんせん','ごせん','ろくせん','ななせん','はっせん','きゅうせん']
    }
  },

  methods: {
    start() {
      this.calculateLength();
    },

    calculateLength() {
      let length = this.number.length;
      this.lengthNumber = length;

      if(!length) {
        this.clear();
        return false
      }
      this.selectRule();
    },

    clear() {
      this.outputNumber = '';
    },

    selectRule() {
      let numberToBeConverted = this.number;
      let numberConverted;
      switch (this.lengthNumber) {
        case 1:
          numberConverted = this.ruleOne(numberToBeConverted);
          this.setNumberConverted(numberConverted);
          break;
        case 2:
          numberConverted = this.ruleTwo(numberToBeConverted);
          this.setNumberConverted(numberConverted);
          break;
        case 3:
          numberConverted = this.ruleThree(numberToBeConverted);
          this.setNumberConverted(numberConverted);
          break;
        case 4:
          let numberConverted = this.ruleFour(numberToBeConverted);
          this.setNumberConverted(numberConverted);
          break;
        default:
          this.outputNumber = 'no tengo idea'
          console.log(this.lengthNumber)
          break;
      }
    },

    ruleOne(numberToBeConverted) {
      let position = numberToBeConverted
      return this.nativeNumbers[position]
    },
    ruleTwo(numberToBeConverted) {
      let positionOfFirstNumber = numberToBeConverted.indexOf(1);//search the 1 number
      let valueFirstNumber = numberToBeConverted.slice(0,1);
      let restOfNumber = numberToBeConverted.slice(1);
      let countFirstForm;
      let ruleToTest = new RegExp(/([1-9]0)/);
      let valueTest = ruleToTest.test(numberToBeConverted);
      let numberToReturn = '';

      // only for those numbers [10,...,90]
      if(valueTest) {
        switch (valueTest) {
        case (numberToBeConverted != '10'):
          numberToReturn = this.nativeNumbers[valueFirstNumber] + this.nativeNumbers[10];
          break;
        case (numberToBeConverted === '10'):
          numberToReturn = this.nativeNumbers[10];
          break;
        }
      }

      if(numberToReturn === '') {
        if(positionOfFirstNumber === 0) {
          countFirstForm = true
        } else {
          countFirstForm = false
        }

        if(countFirstForm) {
          numberToReturn = this.nativeNumbers[10] + this.nativeNumbers[restOfNumber]
        } else {
          numberToReturn = this.nativeNumbers[valueFirstNumber] + this.nativeNumbers[10] + this.nativeNumbers[restOfNumber]
        }
      }

      return numberToReturn
    },
    ruleThree(numberToBeConverted) {
      let valueFirstNumber = numberToBeConverted.slice(0,1);
      let restOfNumber = numberToBeConverted.slice(1);
      let ruleToTestRei = new RegExp(/([1-9]0[1-9])/);
      let valueTestRei = ruleToTestRei.test(numberToBeConverted);
      let ruleToTest = new RegExp(/([1-9]00)/);
      let valueTest = ruleToTest.test(numberToBeConverted);
      let numberToReturn = '';

      //only for 100,200,...900
      if(valueTest) {
        numberToReturn = this.hyakuNumbers[valueFirstNumber - 1];
      }

      if(valueTestRei) {
        restOfNumber = numberToBeConverted.slice(2);
      }

      if(numberToReturn === '') {
        let restNumberEvaluated;
        if(restOfNumber.length === 1) {
          restNumberEvaluated = this.ruleOne(restOfNumber);
        } else {
          restNumberEvaluated = this.ruleTwo(restOfNumber);
        }
        numberToReturn = this.hyakuNumbers[valueFirstNumber - 1] + restNumberEvaluated;
      }

      return numberToReturn
    },
    ruleFour(numberToBeConverted) {
      let valueFirstNumber = numberToBeConverted.slice(0,1);
      let restOfNumber = numberToBeConverted.slice(1);
      let ruleToTest = new RegExp(/([1-9]000)/);
      let valueTest = ruleToTest.test(numberToBeConverted);
      let numberToReturn = '';

      //only for 1000,2000,...9000
      if(valueTest) {
        numberToReturn = this.senNumbers[valueFirstNumber - 1];
      }

      if(!valueTest) {
        let restNumberEvaluated;
        for(let i = 0; i < restOfNumber.length; i++) {
          let valueChart = restOfNumber.charAt(i);
          if(valueChart !== '0') {
            restOfNumber = restOfNumber.slice(i);
            switch (true) {
              case (i === 0):
                restNumberEvaluated = this.ruleThree(restOfNumber);
                break;
              case (i === 1):
                restNumberEvaluated = this.ruleTwo(restOfNumber);
                break;
              case (i === 2):
                restNumberEvaluated = this.ruleOne(restOfNumber);
                break;
            }
            break;
          }
        }

        numberToReturn = this.senNumbers[valueFirstNumber - 1] + restNumberEvaluated;
      }

      return numberToReturn
    },
    setNumberConverted(numberConverted) {
      this.outputNumber = numberConverted;
    }
  }
}
</script>

<style>

</style>
