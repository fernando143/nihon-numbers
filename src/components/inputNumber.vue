<template>
    <div class="inputContainer">
      <v-text-field
        label="Ingrese un número"
        single-line
        solo
        v-model="number"
        v-on:input="start"
      ></v-text-field>
    </div>
</template>

<script>
export default {
    data() {
      return {
        number: '',
        naturalNumber: '',
        lengthNumber: '',
        outputNumber: '',
        nativeNumbers: [
          { hira: 'れい', kata: 'レイ', kanji: '零' },
          { hira: 'いち', kata: 'イチ', kanji: '一' },
          { hira: 'に', kata: '二', kanji: '二' },
          { hira: 'さん', kata: 'サン', kanji: '三' },
          { hira: 'よん', kata: 'ヨン', kanji: '四' },
          { hira: 'ご', kata: 'ゴ', kanji: '五' },
          { hira: 'ろく', kata: 'ロク', kanji: '六' },
          { hira: 'なな', kata: 'ナナ', kanji: '七' },
          { hira: 'はち', kata: 'ハチ', kanji: '八' },
          { hira: 'きゅう', kata: 'キュウ', kanji: '九' },
          { hira: 'じゅう', kata: 'ジュウ', kanji: '十' },
        ],
        hyakuNumbers: [
          { hira: 'ひゃく', kata: 'ヒャク', kanji: '百' },
          { hira: 'にひゃく', kata: 'ニヒャク', kanji: '二百' },
          { hira: 'さんびゃく', kata: 'サンビャク', kanji: '三百' },
          { hira: 'よんひゃく', kata: 'ヨンヒャク', kanji: '四百' },
          { hira: 'ごひゃく', kata: 'ゴヒャク', kanji: '五百' },
          { hira: 'ろっぴゃく', kata: 'ロッピャク', kanji: '六百' },
          { hira: 'ななひゃく', kata: 'ナナヒャク', kanji: '七百' },
          { hira: 'はっぴゃく', kata: 'ハッピャク', kanji: '八百' },
          { hira: 'きゅうひゃく', kata: 'キュウヒャク', kanji: '九百' }
        ],
        senNumbers: [
          { hira:'せん', kata: 'セン', kanji: '千' },
          { hira:'にせん', kata: 'ニセン', kanji: '二千' },
          { hira:'さんぜん', kata: 'サンゼン', kanji: '三千' },
          { hira:'よんせん', kata: 'ヨンセン', kanji: '四千' },
          { hira:'ごせん', kata: 'ゴセン', kanji: '五千' },
          { hira:'ろくせん', kata: 'ロクセン', kanji: '六千' },
          { hira:'ななせん', kata: 'ナナセン', kanji: '七千' },
          { hira:'はっせん', kata: 'ハッセン', kanji: '八千' },
          { hira:'きゅうせん', kata: 'キュウセン', kanji: '九千' }
        ],
        manNumbers: [
          { hira: 'まん', kata: 'マン', kanji: '万' },
          { hira: 'にまん', kata: 'ニマン', kanji: '二万' },
          { hira: 'さんまん', kata: 'サンマン', kanji: '三万' },
          { hira: 'よんまん', kata: 'ヨンマン', kanji: '四万' },
          { hira: 'ごまん', kata: 'ゴマン', kanji: '五万' },
          { hira: 'ろくまん', kata: 'ロクマン', kanji: '六万' },
          { hira: 'ななまん', kata: 'ナナマン', kanji: '七万' },
          { hira: 'はちまん', kata: 'ハチマン', kanji: '八万' },
          { hira: 'きゅうまん', kata: 'キュウマン', kanji: '九万' }
        ],
        okuNumbers: [
          { hira: 'おく', kata: 'オク', kanji: '億' },
          { hira: 'におく', kata: 'ニオク', kanji: '二億' },
          { hira: 'さんおく', kata: 'サンオク', kanji: '三億' },
          { hira: 'よんおく', kata: 'ヨンオク', kanji: '四億' },
          { hira: 'ごおく', kata: 'ゴオク', kanji: '五億' },
          { hira: 'ろくおく', kata: 'ロクオク', kanji: '六億' },
          { hira: 'ななおく', kata: 'ナナオク', kanji: '七億' },
          { hira: 'はちおく', kata: 'ハチオク', kanji: '八億' },
          { hira: 'きゅうおく', kata: 'キュウオク', kanji: '九億' }
        ]
      }
    },
    methods: {
    start() {
      this.number = this.setMaruNumber(this.number)
      this.naturalNumber = this.getNaturalNumber(this.number)
      this.calculateLength(this.naturalNumber );
    },
    setMaruNumber(number) {
      let numberToConvert = [];
      for(let i = 0; i < number.length; i++) {
        if(number.charAt(i) != '.') {
          numberToConvert.push(number.charAt(i))
        }
      }
      const reverseNumber = numberToConvert.reverse()
      let counter = 0;
      const numberWithMaru = reverseNumber.map((num, index) => {
        let isPar = index % 2
        counter = counter + 1
        if(isPar === 0 && counter > 3) {
          counter = 0
          return `${num}.`
        } else {
          return num
        }
      })
      const numberToReturn = numberWithMaru.reverse().join("")

      return numberToReturn
    },
    getNaturalNumber(numberWithMaru) {
      let numberToConvert = numberWithMaru.split('')
      let numberWithoutMaru = numberToConvert.filter(num => {
        if(num != '.') {
          return num
        }
      })
      let numberToReturn = numberWithoutMaru.join('')

      return numberToReturn
    },
    calculateLength(naturalNumber) {
      let length = naturalNumber.length;
      this.lengthNumber = length;

      if(!length) {
        this.clear();
        return false
      }
      this.selectRule(this.naturalNumber, this.lengthNumber, true);
    },

    clear() {
      this.$store.dispatch('clear', '')
    },

    selectRule(number, lengthNumber, setNumberConverted) {
      let numberToBeConverted = number;
      let convertNumber = setNumberConverted
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
        case 6:
          numberConverted = this.ruleSix(numberToBeConverted);
          break;
        case 7:
          numberConverted = this.ruleSeven(numberToBeConverted);
          break;
        case 8:
          numberConverted = this.ruleEight(numberToBeConverted);
          break;
        case 9:
          numberConverted = this.ruleNine(numberToBeConverted);
          break;
        case 10:
          numberConverted = this.ruleTen(numberToBeConverted);
          break;
        default:
          this.$store.dispatch('uknowNumber','分かりません')
          convertNumber = false
          break;
      }

      if(convertNumber) {
        this.setNumberConverted(numberConverted);
      } else {
        return numberConverted;
      }
    },

    ruleOne(numberToBeConverted) {
      let position = numberToBeConverted
      return {
        hira: this.nativeNumbers[position].hira,
        kata: this.nativeNumbers[position].kata,
        kanji: this.nativeNumbers[position].kanji
      }
    },
    ruleTwo(numberToBeConverted) {
      let positionOfFirstNumber = numberToBeConverted.indexOf(1);//search the 1 number
      let valueFirstNumber = numberToBeConverted.slice(0,1);
      let restOfNumber = numberToBeConverted.slice(1);
      let countFirstForm;
      let ruleToTest1 = new RegExp(/([1-9]0)/);
      let ruleToTest2 = new RegExp(/([1-9][1-9])/);
      let valueTest1 = ruleToTest1.test(numberToBeConverted);
      let valueTest2 = ruleToTest2.test(numberToBeConverted);
      let numberToReturn = '';

      // only for those numbers [10,...,90]
      if(valueTest1) {
        switch (valueTest1) {
        case (numberToBeConverted != '10'):
          numberToReturn = {
            hira: this.nativeNumbers[valueFirstNumber].hira + this.nativeNumbers[10].hira,
            kata: this.nativeNumbers[valueFirstNumber].kata + this.nativeNumbers[10].kata,
            kanji: this.nativeNumbers[valueFirstNumber].kanji + this.nativeNumbers[10].kanji
            }
          break;
        case (numberToBeConverted === '10'):
          numberToReturn = {
            hira: this.nativeNumbers[10].hira,
            kata: this.nativeNumbers[10].kata,
            kanji: this.nativeNumbers[10].kanji
          }
          break;
        }
      }

      if(valueTest2) {
        if(valueFirstNumber == 1) {
          numberToReturn = {
            hira: this.nativeNumbers[10].hira + this.nativeNumbers[restOfNumber].hira,
            kata: this.nativeNumbers[10].kata + this.nativeNumbers[restOfNumber].kata,
            kanji: this.nativeNumbers[10].kanji + this.nativeNumbers[restOfNumber].kanji
          }
        } else {
          numberToReturn = {
            hira: this.nativeNumbers[valueFirstNumber].hira + this.nativeNumbers[10].hira + this.nativeNumbers[restOfNumber].hira,
            kata: this.nativeNumbers[valueFirstNumber].kata + this.nativeNumbers[10].kata + this.nativeNumbers[restOfNumber].kata,
            kanji: this.nativeNumbers[valueFirstNumber].kanji + this.nativeNumbers[10].kanji + this.nativeNumbers[restOfNumber].kanji,
          }
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
        numberToReturn = {
          hira: this.hyakuNumbers[valueFirstNumber - 1].hira,
          kata: this.hyakuNumbers[valueFirstNumber - 1].kata,
          kanji: this.hyakuNumbers[valueFirstNumber - 1].kanji,
        }
      }

      if(valueTestRei) {
        restOfNumber = numberToBeConverted.slice(2);
      }

      if(numberToReturn === '') {
        let restNumberEvaluated, getRestOfNumber;
        if(restOfNumber.length === 1) {
          getRestOfNumber = this.ruleOne(restOfNumber);
          restNumberEvaluated = {
            hira: getRestOfNumber.hira,
            kata: getRestOfNumber.kata,
            kanji: getRestOfNumber.kanji
          }
        } else {
          getRestOfNumber = this.ruleTwo(restOfNumber);
          restNumberEvaluated = {
            hira: getRestOfNumber.hira,
            kata: getRestOfNumber.kata,
            kanji: getRestOfNumber.kanji
          }
        }
        numberToReturn = {
          hira: this.hyakuNumbers[valueFirstNumber - 1].hira + restNumberEvaluated.hira,
          kata: this.hyakuNumbers[valueFirstNumber - 1].kata + restNumberEvaluated.kata,
          kanji: this.hyakuNumbers[valueFirstNumber - 1].kanji + restNumberEvaluated.kanji,
        }
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
        numberToReturn = {
          hira: this.senNumbers[valueFirstNumber - 1].hira,
          kata: this.senNumbers[valueFirstNumber - 1].kata,
          kanji: this.senNumbers[valueFirstNumber - 1].kanji,
        }
      }

      if(!valueTest) {
        let restNumberEvaluated, getRestOfNumber;
        for(let i = 0; i < restOfNumber.length; i++) {
          let valueChar = restOfNumber.charAt(i);
          if(valueChar !== '0') {
            restOfNumber = restOfNumber.slice(i);
            switch (true) {
              case (i === 0):
                getRestOfNumber = this.ruleThree(restOfNumber);
                restNumberEvaluated = {
                  hira: getRestOfNumber.hira,
                  kata: getRestOfNumber.kata,
                  kanji: getRestOfNumber.kanji
                }
                break;

              case (i === 1):
                getRestOfNumber = this.ruleTwo(restOfNumber);
                restNumberEvaluated = {
                  hira: getRestOfNumber.hira,
                  kata: getRestOfNumber.kata,
                  kanji: getRestOfNumber.kanji
                }
                break;

              case (i === 2):
                getRestOfNumber = this.ruleOne(restOfNumber);
                restNumberEvaluated = {
                  hira: getRestOfNumber.hira,
                  kata: getRestOfNumber.kata,
                  kanji: getRestOfNumber.kanji
                }
                break;
            }
            break;
          }
        }

        numberToReturn = {
          hira: this.senNumbers[valueFirstNumber - 1].hira + restNumberEvaluated.hira,
          kata: this.senNumbers[valueFirstNumber - 1].kata + restNumberEvaluated.kata,
          kanji: this.senNumbers[valueFirstNumber - 1].kanji + restNumberEvaluated.kanji,
        }
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
        numberToReturn = {
          hira: this.manNumbers[valueFirstNumber - 1].hira,
          kata: this.manNumbers[valueFirstNumber - 1].kata,
          kanji: this.manNumbers[valueFirstNumber - 1].kanji,
        }
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
        let selectRule = this.selectRule(restOfNumber, restOfNumber.length, false);
        numberToReturn = {
          hira: this.manNumbers[valueFirstNumber - 1].hira + selectRule.hira,
          kata: this.manNumbers[valueFirstNumber - 1].kata + selectRule.kata,
          kanji: this.manNumbers[valueFirstNumber - 1].kanji + selectRule.kanji
        }
      }

      return numberToReturn;
    },
    ruleSix(numberToBeConverted) {
      let valueFirstNumber = numberToBeConverted.slice(0,1);
      let firstTwoNumbers = numberToBeConverted.slice(0,2);
      let restOfNumber = numberToBeConverted.slice(2);
      let ruleToTest = new RegExp(/([1-9]00000)/);
      let valueTest = ruleToTest.test(numberToBeConverted);
      let foundNumber = false;
      let numberToReturn = '';
      let getRuleTwo = this.ruleTwo(firstTwoNumbers);
      let getSelectRule;

      //only for 100000,200000,...900000
      if(valueTest) {
        numberToReturn = {
          hira: getRuleTwo.hira + this.manNumbers[0].hira,
          kata: getRuleTwo.kata + this.manNumbers[0].kata,
          kanji: getRuleTwo.kanji + this.manNumbers[0].kanji,
        }
      }

      if(!valueTest) {
        for(let i = 0; i < restOfNumber.length; i++) {
          let position = i;
          let valueChar = restOfNumber.charAt(i);
          if(valueChar !== '0') {
            foundNumber = true;
            restOfNumber = restOfNumber.slice(position);
            break;
          }
        }

        if(foundNumber) {
          getSelectRule = this.selectRule(restOfNumber, restOfNumber.length, false)
          numberToReturn = {
            hira: getRuleTwo.hira + this.manNumbers[0].hira + getSelectRule.hira,
            kata: getRuleTwo.kata + this.manNumbers[0].kata + getSelectRule.kata,
            kanji: getRuleTwo.kanji + this.manNumbers[0].kanji + getSelectRule.kanji,
            }
        } else {
          numberToReturn = {
            hira: getRuleTwo.hira + this.manNumbers[0].hira,
            kata: getRuleTwo.kata + this.manNumbers[0].kata,
            kanji: getRuleTwo.kanji + this.manNumbers[0].kanji,
          }
        }
      }

      return numberToReturn;
    },
    ruleSeven(numberToBeConverted) {
      let valueFirstNumber = numberToBeConverted.slice(0,1);
      let firstThreeNumbers = numberToBeConverted.slice(0,3);
      let restOfNumber = numberToBeConverted.slice(3);
      let ruleToTest = new RegExp(/([1-9]000000)/);
      let valueTest = ruleToTest.test(numberToBeConverted);
      let foundNumber = false;
      let numberToReturn = '';
      let getRuleThree = this.ruleThree(firstThreeNumbers);
      let getSelectRule;

      //only for 1000000,2000000,...9000000
      if(valueTest) {
        numberToReturn = {
          hira: getRuleThree.hira + this.manNumbers[0].hira,
          kata: getRuleThree.kata + this.manNumbers[0].kata,
          kanji: getRuleThree.kanji + this.manNumbers[0].kanji,
        }
      }

      if(!valueTest) {
        for(let i = 0; i < restOfNumber.length; i++) {
          let position = i;
          let valueChar = restOfNumber.charAt(i);
          if(valueChar !== '0') {
            foundNumber = true;
            restOfNumber = restOfNumber.slice(position);
            break;
          }
        }

        if(foundNumber) {
          getSelectRule = this.selectRule(restOfNumber, restOfNumber.length, false)
          numberToReturn = {
            hira: getRuleThree.hira + this.manNumbers[0].hira + getSelectRule.hira,
            kata: getRuleThree.kata + this.manNumbers[0].kata + getSelectRule.kata,
            kanji: getRuleThree.kanji + this.manNumbers[0].kanji + getSelectRule.kanji,
            }
        } else {
          numberToReturn = {
            hira: getRuleThree.hira + this.manNumbers[0].hira,
            kata: getRuleThree.kata + this.manNumbers[0].kata,
            kanji: getRuleThree.kanji + this.manNumbers[0].kanji,
          }
        }
      }

      return numberToReturn;
    },
    ruleEight(numberToBeConverted) {
      let valueFirstNumber = numberToBeConverted.slice(0,1);
      let firstFourNumbers = numberToBeConverted.slice(0,4);
      let restOfNumber = numberToBeConverted.slice(4);
      let ruleToTest = new RegExp(/([1-9]0000000)/);
      let valueTest = ruleToTest.test(numberToBeConverted);
      let foundNumber = false;
      let numberToReturn = '';
      let getRuleFour = this.ruleFour(firstFourNumbers);
      let getSelectRule;

      //only for 10000000,20000000,...90000000
      if(valueTest) {
        numberToReturn = {
          hira: getRuleFour.hira + this.manNumbers[0].hira,
          kata: getRuleFour.kata + this.manNumbers[0].kata,
          kanji: getRuleFour.kanji + this.manNumbers[0].kanji,
        }
      }

      if(!valueTest) {
        for(let i = 0; i < restOfNumber.length; i++) {
          let position = i;
          let valueChar = restOfNumber.charAt(i);
          if(valueChar !== '0') {
            foundNumber = true;
            restOfNumber = restOfNumber.slice(position);
            break;
          }
        }

        if(foundNumber) {
          getSelectRule = this.selectRule(restOfNumber, restOfNumber.length, false)
          numberToReturn = {
            hira: getRuleFour.hira + this.manNumbers[0].hira + getSelectRule.hira,
            kata: getRuleFour.kata + this.manNumbers[0].kata + getSelectRule.kata,
            kanji: getRuleFour.kanji + this.manNumbers[0].kanji + getSelectRule.kanji,
            }
        } else {
          numberToReturn = {
            hira: getRuleFour.hira + this.manNumbers[0].hira,
            kata: getRuleFour.kata + this.manNumbers[0].kata,
            kanji: getRuleFour.kanji + this.manNumbers[0].kanji,
          }
        }
      }

      return numberToReturn;
    },
    ruleNine(numberToBeConverted) {
      let valueFirstNumber = numberToBeConverted.slice(0,1);
      let restOfNumber = numberToBeConverted.slice(1);
      let ruleToTest = new RegExp(/([1-9]00000000)/);
      let valueTest = ruleToTest.test(numberToBeConverted);
      let foundNumber = false;
      let numberToReturn = '';
      let getSelectRule;

      //only for 100000000,200000000,...900000000
      if(valueTest) {
        numberToReturn = {
          hira: this.okuNumbers[valueFirstNumber - 1].hira,
          kata: this.okuNumbers[valueFirstNumber - 1].kata,
          kanji: this.okuNumbers[valueFirstNumber - 1].kanji,
        }
      }

      if(!valueTest) {
        for(let i = 0; i < restOfNumber.length; i++) {
          let position = i;
          let valueChar = restOfNumber.charAt(i);
          if(valueChar !== '0') {
            foundNumber = true;
            restOfNumber = restOfNumber.slice(position);
            break;
          }
        }

        if(foundNumber) {
          getSelectRule = this.selectRule(restOfNumber, restOfNumber.length, false)
          numberToReturn = {
            hira: this.okuNumbers[valueFirstNumber - 1].hira + getSelectRule.hira,
            kata: this.okuNumbers[valueFirstNumber - 1].kata + getSelectRule.kata,
            kanji: this.okuNumbers[valueFirstNumber - 1].kanji + getSelectRule.kanji
            }
        } else {
          numberToReturn = {
            hira: this.okuNumbers[ - 1].hira + this.manNumbers[0].hira,
            kata: this.okuNumbers[ - 1].kata + this.manNumbers[0].kata,
            kanji: this.okuNumbers[ - 1].kanji + this.manNumbers[0].kanji,
          }
        }
      }

      return numberToReturn;
    },
    ruleTen(numberToBeConverted) {
      let valueFirstNumber = numberToBeConverted.slice(0,1);
      let firstTwoNumbers = numberToBeConverted.slice(0,2);
      let restOfNumber = numberToBeConverted.slice(2);
      let ruleToTest = new RegExp(/([1-9]000000000)/);
      let valueTest = ruleToTest.test(numberToBeConverted);
      let foundNumber = false;
      let numberToReturn = '';
      let getRuleTwo = this.ruleTwo(firstTwoNumbers);
      let getSelectRule;

      //only for 10.0000.0000,20.0000.0000,...90.0000.0000
      if(valueTest) {
        numberToReturn = {
          hira: getRuleTwo.hira + this.okuNumbers[0].hira,
          kata: getRuleTwo.kata + this.okuNumbers[0].kata,
          kanji: getRuleTwo.kanji + this.okuNumbers[0].kanji
        }
      }

      if(!valueTest) {
        for(let i = 0; i < restOfNumber.length; i++) {
          let position = i;
          let valueChar = restOfNumber.charAt(i);
          if(valueChar !== '0') {
            foundNumber = true;
            restOfNumber = restOfNumber.slice(position);
            break;
          }
        }

        if(foundNumber) {
          getSelectRule = this.selectRule(restOfNumber, restOfNumber.length, false)
          numberToReturn = {
            hira: getRuleTwo.hira + this.okuNumbers[0].hira + getSelectRule.hira,
            kata: getRuleTwo.kata + this.okuNumbers[0].kata + getSelectRule.kata,
            kanji: getRuleTwo.kanji + this.okuNumbers[0].kanji + getSelectRule.kanji
            }
        } else {
          numberToReturn = {
            hira: getRuleTwo.hira + this.okuNumbers[0].hira,
            kata: getRuleTwo.kata + this.okuNumbers[0].kata,
            kanji: getRuleTwo.kanji + this.okuNumbers[0].kanji
          }
        }
      }

      return numberToReturn;
    },
    setNumberConverted(numberConverted) {
      this.$store.dispatch('setNumbers', {
        hiraganaNumber: numberConverted.hira,
        katakanaNumber: numberConverted.kata,
        kanjiNumber: numberConverted.kanji
      })
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


