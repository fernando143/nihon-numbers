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
      senNumbers: ['せん','にせん','さんぜん','よんせん','ごせん','ろくせん','ななせん','はっせん','きゅうせん'],
      manNumbers: ['まん','にまん','さんまん','よんまん','ごまん','ろくまん','ななまん','はちまん','きゅうまん']
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
      this.selectRule(this.number, this.lengthNumber, true);
    },

    clear() {
      this.outputNumber = '';
    },

    selectRule(number, lengthNumber, setNumberConverted) {
      let numberToBeConverted = number;
      let numberConverted;

      switch (lengthNumber) {
        case 1:
          numberConverted = this.ruleOne(numberToBeConverted);
          break;
        case 2:
          numberConverted = this.ruleTwo(numberToBeConverted);
          break;
        case 3:
          numberConverted = this.ruleThree(numberToBeConverted);
          break;
        case 4:
          numberConverted = this.ruleFour(numberToBeConverted);
          break;
        case 5:
          numberConverted = this.ruleFive(numberToBeConverted);
          break;
        default:
          this.outputNumber = 'no tengo idea'
          console.log(this.lengthNumber)
          break;
      }

      if(setNumberConverted) {
        this.setNumberConverted(numberConverted);
      } else {
        return numberConverted;
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
          let valueChar = restOfNumber.charAt(i);
          if(valueChar !== '0') {
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
    ruleFive(numberToBeConverted) {
      let valueFirstNumber = numberToBeConverted.slice(0,1);
      let restOfNumber = numberToBeConverted.slice(1);
      let ruleToTest = new RegExp(/([1-9]0000)/);
      let valueTest = ruleToTest.test(numberToBeConverted);
      let numberToReturn = '';

      //only for 10000,20000,...90000
      if(valueTest) {
        numberToReturn = this.manNumbers[valueFirstNumber - 1];
      }

      if(!valueTest) {
        for(let i = 0; i <= restOfNumber.length; i++) {
          let position = i;
          let valueChar = restOfNumber.charAt(i);
          if(valueChar !== '0') {
            restOfNumber = restOfNumber.slice(position);
            break;
          }
        }
        numberToReturn = this.manNumbers[valueFirstNumber - 1] + this.selectRule(restOfNumber, restOfNumber.length, false);
      }

      return numberToReturn;
    },
    setNumberConverted(numberConverted) {
      this.outputNumber = numberConverted;
    }
  }
}
</script>

<style>

</style>
