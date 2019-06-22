import { shallowMount } from '@vue/test-utils'
import InputNumber from '@/components/InputNumber.vue'

// npm run test:unit

const wrapper = shallowMount(InputNumber);

describe('Se hace testing de cada uno de los métodos encargados de retornar un objeto el número escrito en hiragana, katakana y kanji', () => {

    it('01 - METHOD -> ruleOne(1)', () => {
        expect(wrapper.vm.ruleOne(1)).toEqual({
            hira: 'いち',
            kata: 'イチ',
            kanji: '一'
        });
    });
    it('02 - METHOD -> ruleTwo(10)', () => {
        expect(wrapper.vm.ruleTwo('10')).toEqual({
            hira: 'じゅう',
            kata: 'ジュウ',
            kanji: '十'
        });
    });
    it('03 - METHOD -> ruleTwo(15)', () => {
        expect(wrapper.vm.ruleTwo('15')).toEqual({
            hira: 'じゅうご',
            kata: 'ジュウゴ',
            kanji: '十五'
        });
    });
    it('04 - METHOD -> ruleThree(100)', () => {
        expect(wrapper.vm.ruleThree('100')).toEqual({
            hira: 'ひゃく',
            kata: 'ヒャク',
            kanji: '百'
        });
    });
    it('05 - METHOD -> ruleThree(105)', () => {
        expect(wrapper.vm.ruleThree('105')).toEqual({
            hira: 'ひゃくご',
            kata: 'ヒャクゴ',
            kanji: '百五'
        });
    });
    it('06 - METHOD -> ruleThree(110)', () => {
        expect(wrapper.vm.ruleThree('110')).toEqual({
            hira: 'ひゃくじゅう',
            kata: 'ヒャクジュウ',
            kanji: '百十'
        });
    });
    it('07 - METHOD -> ruleFour(1000)', () => {
        expect(wrapper.vm.ruleFour('1000')).toEqual({
            hira: 'せん',
            kata: 'セン',
            kanji: '千'
        });
    });
    it('08 - METHOD -> ruleFour(1005)', () => {
        expect(wrapper.vm.ruleFour('1005')).toEqual({
            hira: 'せんご',
            kata: 'センゴ',
            kanji: '千五'
        });
    });
    it('09 - METHOD -> ruleFour(1010)', () => {
        expect(wrapper.vm.ruleFour('1010')).toEqual({
            hira: 'せんじゅう',
            kata: 'センジュウ',
            kanji: '千十'
        });
    });
    it('10 - METHOD -> ruleFour(1100)', () => {
        expect(wrapper.vm.ruleFour('1100')).toEqual({
            hira: 'せんひゃく',
            kata: 'センヒャク',
            kanji: '千百'
        });
    });
    it('11 - METHOD -> ruleFive(1.0000)', () => {
        expect(wrapper.vm.ruleFive('10000')).toEqual({
            hira: 'まん',
            kata: 'マン',
            kanji: '万'
        });
    });
    it('12 - METHOD -> ruleFive(1.0001)', () => {
        expect(wrapper.vm.ruleFive('10001')).toEqual({
            hira: 'まんいち',
            kata: 'マンイチ',
            kanji: '万一'
        });
    });
    it('13 - METHOD -> ruleFive(1.0010)', () => {
        expect(wrapper.vm.ruleFive('10010')).toEqual({
            hira: 'まんじゅう',
            kata: 'マンジュウ',
            kanji: '万十'
        });
    });
    it('14 - METHOD -> ruleFive(1.0100)', () => {
        expect(wrapper.vm.ruleFive('10100')).toEqual({
            hira: 'まんひゃく',
            kata: 'マンヒャク',
            kanji: '万百'
        });
    });
    it('15 - METHOD -> ruleFive(1.1000)', () => {
        expect(wrapper.vm.ruleFive('11000')).toEqual({
            hira: 'まんせん',
            kata: 'マンセン',
            kanji: '万千'
        });
    });
    it('16 - METHOD -> ruleSix(10.0000)', () => {
        expect(wrapper.vm.ruleSix('100000')).toEqual({
            hira: 'じゅうまん',
            kata: 'ジュウマン',
            kanji: '十万'
        });
    });
    it('17 - METHOD -> ruleSix(10.0001)', () => {
        expect(wrapper.vm.ruleSix('100001')).toEqual({
            hira: 'じゅうまんいち',
            kata: 'ジュウマンイチ',
            kanji: '十万一'
        });
    });
    it('18 - METHOD -> ruleSix(10.0010)', () => {
        expect(wrapper.vm.ruleSix('100010')).toEqual({
            hira: 'じゅうまんじゅう',
            kata: 'ジュウマンジュウ',
            kanji: '十万十'
        });
    });
    it('19 - METHOD -> ruleSix(10.0100)', () => {
        expect(wrapper.vm.ruleSix('100100')).toEqual({
            hira: 'じゅうまんひゃく',
            kata: 'ジュウマンヒャク',
            kanji: '十万百'
        });
    });
    it('20 - METHOD -> ruleSix(10.1000)', () => {
        expect(wrapper.vm.ruleSix('101000')).toEqual({
            hira: 'じゅうまんせん',
            kata: 'ジュウマンセン',
            kanji: '十万千'
        });
    });
    it('21 - METHOD -> ruleSix(11.0000)', () => {
        expect(wrapper.vm.ruleSix('110000')).toEqual({
            hira: 'じゅういちまん',
            kata: 'ジュウイチマン',
            kanji: '十一万'
        });
    });
    it('22 - METHOD -> ruleSeven(100.0000)', () => {
        expect(wrapper.vm.ruleSeven('1000000')).toEqual({
            hira: 'ひゃくまん',
            kata: 'ヒャクマン',
            kanji: '百万'
        });
    });
    it('23 - METHOD -> ruleSeven(100.0001)', () => {
        expect(wrapper.vm.ruleSeven('1000001')).toEqual({
            hira: 'ひゃくまんいち',
            kata: 'ヒャクマンイチ',
            kanji: '百万一'
        });
    });
    it('24 - METHOD -> ruleSeven(100.0010)', () => {
        expect(wrapper.vm.ruleSeven('1000010')).toEqual({
            hira: 'ひゃくまんじゅう',
            kata: 'ヒャクマンジュウ',
            kanji: '百万十'
        });
    });
    it('25 - METHOD -> ruleSeven(100.0100)', () => {
        expect(wrapper.vm.ruleSeven('1000100')).toEqual({
            hira: 'ひゃくまんひゃく',
            kata: 'ヒャクマンヒャク',
            kanji: '百万百'
        });
    });
    it('26 - METHOD -> ruleSeven(100.1000)', () => {
        expect(wrapper.vm.ruleSeven('1001000')).toEqual({
            hira: 'ひゃくまんせん',
            kata: 'ヒャクマンセン',
            kanji: '百万千'
        });
    });
    it('27 - METHOD -> ruleSeven(101.0000)', () => {
        expect(wrapper.vm.ruleSeven('1010000')).toEqual({
            hira: 'ひゃくいちまん',
            kata: 'ヒャクイチマン',
            kanji: '百一万'
        });
    });
    it('28 - METHOD -> ruleSeven(110.0000)', () => {
        expect(wrapper.vm.ruleSeven('1100000')).toEqual({
            hira: 'ひゃくじゅうまん',
            kata: 'ヒャクジュウマン',
            kanji: '百十万'
        });
    });
    it('29 - METHOD -> ruleEight(1000.0000)', () => {
        expect(wrapper.vm.ruleEight('10000000')).toEqual({
            hira: 'せんまん',
            kata: 'センマン',
            kanji: '千万'
        });
    });
    it('30 - METHOD -> ruleEight(1000.0001)', () => {
        expect(wrapper.vm.ruleEight('10000001')).toEqual({
            hira: 'せんまんいち',
            kata: 'センマンイチ',
            kanji: '千万一'
        });
    });
    it('31 - METHOD -> ruleEight(1000.0010)', () => {
        expect(wrapper.vm.ruleEight('10000010')).toEqual({
            hira: 'せんまんじゅう',
            kata: 'センマンジュウ',
            kanji: '千万十'
        });
    });
    it('32 - METHOD -> ruleEight(1000.0010)', () => {
        expect(wrapper.vm.ruleEight('10000010')).toEqual({
            hira: 'せんまんじゅう',
            kata: 'センマンジュウ',
            kanji: '千万十'
        });
    });
    it('33 - METHOD -> ruleEight(1000.0100)', () => {
        expect(wrapper.vm.ruleEight('10000100')).toEqual({
            hira: 'せんまんひゃく',
            kata: 'センマンヒャク',
            kanji: '千万百'
        });
    });
    it('34 - METHOD -> ruleEight(1000.1000)', () => {
        expect(wrapper.vm.ruleEight('10001000')).toEqual({
            hira: 'せんまんせん',
            kata: 'センマンセン',
            kanji: '千万千'
        });
    });
    it('35 - METHOD -> ruleEight(1001.0000)', () => {
        expect(wrapper.vm.ruleEight('10010000')).toEqual({
            hira: 'せんいちまん',
            kata: 'センイチマン',
            kanji: '千一万'
        });
    });
    it('36 - METHOD -> ruleEight(1010.0000)', () => {
        expect(wrapper.vm.ruleEight('10100000')).toEqual({
            hira: 'せんじゅうまん',
            kata: 'センジュウマン',
            kanji: '千十万'
        });
    });
    it('37 - METHOD -> ruleEight(1100.0000)', () => {
        expect(wrapper.vm.ruleEight('11000000')).toEqual({
            hira: 'せんひゃくまん',
            kata: 'センヒャクマン',
            kanji: '千百万'
        });
    });
    it('38 - METHOD -> ruleNine(1.0000.0000)', () => {
        expect(wrapper.vm.ruleNine('100000000')).toEqual({
            hira: 'おく',
            kata: 'オク',
            kanji: '億'
        });
    });
    it('39 - METHOD -> ruleNine(1.0000.0001)', () => {
        expect(wrapper.vm.ruleNine('100000001')).toEqual({
            hira: 'おくいち',
            kata: 'オクイチ',
            kanji: '億一'
        });
    });
    it('40 - METHOD -> ruleNine(1.0000.0010)', () => {
        expect(wrapper.vm.ruleNine('100000010')).toEqual({
            hira: 'おくじゅう',
            kata: 'オクジュウ',
            kanji: '億十'
        });
    });
    it('41 - METHOD -> ruleNine(1.0000.0100)', () => {
        expect(wrapper.vm.ruleNine('100000100')).toEqual({
            hira: 'おくひゃく',
            kata: 'オクヒャク',
            kanji: '億百'
        });
    });
    it('42 - METHOD -> ruleNine(1.0000.0100)', () => {
        expect(wrapper.vm.ruleNine('100000100')).toEqual({
            hira: 'おくひゃく',
            kata: 'オクヒャク',
            kanji: '億百'
        });
    });
    it('43 - METHOD -> ruleNine(1.0000.1000)', () => {
        expect(wrapper.vm.ruleNine('100001000')).toEqual({
            hira: 'おくせん',
            kata: 'オクセン',
            kanji: '億千'
        });
    });
    it('44 - METHOD -> ruleNine(1.0001.0000)', () => {
        expect(wrapper.vm.ruleNine('100010000')).toEqual({
            hira: 'おくまん',
            kata: 'オクマン',
            kanji: '億万'
        });
    });
    it('45 - METHOD -> ruleNine(1.0010.0000)', () => {
        expect(wrapper.vm.ruleNine('100100000')).toEqual({
            hira: 'おくじゅうまん',
            kata: 'オクジュウマン',
            kanji: '億十万'
        });
    });
    it('46 - METHOD -> ruleNine(1.0100.0000)', () => {
        expect(wrapper.vm.ruleNine('101000000')).toEqual({
            hira: 'おくひゃくまん',
            kata: 'オクヒャクマン',
            kanji: '億百万'
        });
    });
    it('47 - METHOD -> ruleNine(1.1000.0000)', () => {
        expect(wrapper.vm.ruleNine('110000000')).toEqual({
            hira: 'おくせんまん',
            kata: 'オクセンマン',
            kanji: '億千万'
        });
    });
    it('48 - METHOD -> ruleTen(10.0000.0000)', () => {
        expect(wrapper.vm.ruleTen('1000000000')).toEqual({
            hira: 'じゅうおく',
            kata: 'ジュウオク',
            kanji: '十億'
        });
    });
    it('49 - METHOD -> ruleTen(10.0000.0001)', () => {
        expect(wrapper.vm.ruleTen('1000000001')).toEqual({
            hira: 'じゅうおくいち',
            kata: 'ジュウオクイチ',
            kanji: '十億一'
        });
    });
    it('50 - METHOD -> ruleTen(10.0000.0010)', () => {
        expect(wrapper.vm.ruleTen('1000000010')).toEqual({
            hira: 'じゅうおくじゅう',
            kata: 'ジュウオクジュウ',
            kanji: '十億十'
        });
    });
    it('51 - METHOD -> ruleTen(10.0000.0100)', () => {
        expect(wrapper.vm.ruleTen('1000000100')).toEqual({
            hira: 'じゅうおくひゃく',
            kata: 'ジュウオクヒャク',
            kanji: '十億百'
        });
    });
    it('52 - METHOD -> ruleTen(10.0000.1000)', () => {
        expect(wrapper.vm.ruleTen('1000001000')).toEqual({
            hira: 'じゅうおくせん',
            kata: 'ジュウオクセン',
            kanji: '十億千'
        });
    });
    it('53 - METHOD -> ruleTen(10.0001.0000)', () => {
        expect(wrapper.vm.ruleTen('1000010000')).toEqual({
            hira: 'じゅうおくまん',
            kata: 'ジュウオクマン',
            kanji: '十億万'
        });
    });
    it('54 - METHOD -> ruleTen(10.0010.0000)', () => {
        expect(wrapper.vm.ruleTen('1000100000')).toEqual({
            hira: 'じゅうおくじゅうまん',
            kata: 'ジュウオクジュウマン',
            kanji: '十億十万'
        });
    });
    it('55 - METHOD -> ruleTen(10.0100.0000)', () => {
        expect(wrapper.vm.ruleTen('1001000000')).toEqual({
            hira: 'じゅうおくひゃくまん',
            kata: 'ジュウオクヒャクマン',
            kanji: '十億百万'
        });
    });
    it('56 - METHOD -> ruleTen(10.1000.0000)', () => {
        expect(wrapper.vm.ruleTen('1010000000')).toEqual({
            hira: 'じゅうおくせんまん',
            kata: 'ジュウオクセンマン',
            kanji: '十億千万'
        });
    });
    it('57 - METHOD -> ruleTen(11.0000.0000)', () => {
        expect(wrapper.vm.ruleTen('1100000000')).toEqual({
            hira: 'じゅういちおく',
            kata: 'ジュウイチオク',
            kanji: '十一億'
        });
    });
})

describe('Se ingresa un número en el método setMaruNumber, el método debe devolver el número con los puntos cada 4 digitos', () => {

    it('setMaruNumber(1)', () => {
        expect(wrapper.vm.setMaruNumber('1')).toBe('1')
    })
    it('setMaruNumber(10)', () => {
        expect(wrapper.vm.setMaruNumber('10')).toBe('10')
    })
    it('setMaruNumber(100)', () => {
        expect(wrapper.vm.setMaruNumber('100')).toBe('100')
    })
    it('setMaruNumber(1000)', () => {
        expect(wrapper.vm.setMaruNumber('1000')).toBe('1000')
    })
    it('setMaruNumber(1.0000)', () => {
        expect(wrapper.vm.setMaruNumber('10000')).toBe('1.0000')
    })
    it('setMaruNumber(10.0000)', () => {
        expect(wrapper.vm.setMaruNumber('100000')).toBe('10.0000')
    })
    it('setMaruNumber(100.0000)', () => {
        expect(wrapper.vm.setMaruNumber('1000000')).toBe('100.0000')
    })
    it('setMaruNumber(1000.0000)', () => {
        expect(wrapper.vm.setMaruNumber('10000000')).toBe('1000.0000')
    })
    it('setMaruNumber(1.0000.0000)', () => {
        expect(wrapper.vm.setMaruNumber('100000000')).toBe('1.0000.0000')
    })
    it('setMaruNumber(10.0000.0000)', () => {
        expect(wrapper.vm.setMaruNumber('1000000000')).toBe('10.0000.0000')
    })
})

describe('El metodo getNaturalNumber debe retornar el número sin maru', () => {
    it('getNaturalNumber(1000)', () => {
        expect(wrapper.vm.getNaturalNumber('1000')).toBe('1000')
    })
    it('getNaturalNumber(1.0000', () => {
        expect(wrapper.vm.getNaturalNumber('1.0000')).toBe('10000')
    })
    it('getNaturalNumber(1.0000.0000)', () => {
        expect(wrapper.vm.getNaturalNumber('1.0000.0000')).toBe('100000000')
    })
})
