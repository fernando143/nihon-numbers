import Translator from '../../src/helpers/translator'

// npm run test:unit translator.spec.js

describe('se prueba metodo numberWithMaru', () => {
    it('01 - METHOD -> numberWithMaru(10.0000)', () => {
        const result = new Translator().numberWithMaru('100000')

        expect(result).toEqual('10.0000')
    })
})

describe('Se hace testing de cada uno de los métodos encargados de retornar un objeto el número escrito en hiragana, katakana y kanji', () => {

    it('01 - METHOD -> ruleOne(1)', () => {
        const result = new Translator().ruleOne('1')
        
        expect(result).toEqual({
            hira: 'いち',
            kata: 'イチ',
            kanji: '一'
        });
    });
    it('02 - METHOD -> ruleTwo(10)', () => {
        const result = new Translator().ruleTwo('10')

        expect(result).toEqual({
            hira: 'じゅう',
            kata: 'ジュウ',
            kanji: '十'
        });
    });
    it('03 - METHOD -> ruleTwo(15)', () => {
        const result = new Translator().ruleTwo('15')
        
        expect(result).toEqual({
            hira: 'じゅうご',
            kata: 'ジュウゴ',
            kanji: '十五'
        });
    });
    it('04 - METHOD -> ruleThree(100)', () => {
        const result = new Translator().ruleThree('100')
        
        expect(result).toEqual({
            hira: 'ひゃく',
            kata: 'ヒャク',
            kanji: '百'
        });
    });
    it('05 - METHOD -> ruleThree(105)', () => {
        const result = new Translator().ruleThree('105')
        
        expect(result).toEqual({
            hira: 'ひゃくご',
            kata: 'ヒャクゴ',
            kanji: '百五'
        });
    });
    it('06 - METHOD -> ruleThree(110)', () => {
        const result = new Translator().ruleThree('110')
        
        expect(result).toEqual({
            hira: 'ひゃくじゅう',
            kata: 'ヒャクジュウ',
            kanji: '百十'
        });
    });
    it('07 - METHOD -> ruleFour(1000)', () => {
        const result = new Translator().ruleFour('1000')
        
        expect(result).toEqual({
            hira: 'せん',
            kata: 'セン',
            kanji: '千'
        });
    });
    it('08 - METHOD -> ruleFour(1005)', () => {
        const result = new Translator().ruleFour('1005')
        
        expect(result).toEqual({
            hira: 'せんご',
            kata: 'センゴ',
            kanji: '千五'
        });
    });
    it('09 - METHOD -> ruleFour(1010)', () => {
        const result = new Translator().ruleFour('1010')
        
        expect(result).toEqual({
            hira: 'せんじゅう',
            kata: 'センジュウ',
            kanji: '千十'
        });
    });
    it('10 - METHOD -> ruleFour(1100)', () => {
        const result = new Translator().ruleFour('1100')
        
        expect(result).toEqual({
            hira: 'せんひゃく',
            kata: 'センヒャク',
            kanji: '千百'
        });
    });
    it('11 - METHOD -> ruleFive(1.0000)', () => {
        const result = new Translator().ruleFive('10000')
        
        expect(result).toEqual({
            hira: 'まん',
            kata: 'マン',
            kanji: '万'
        });
    });
    it('12 - METHOD -> ruleFive(1.0001)', () => {
        const result = new Translator().ruleFive('10001')
        
        expect(result).toEqual({
            hira: 'まんいち',
            kata: 'マンイチ',
            kanji: '万一'
        });
    });
    it('13 - METHOD -> ruleFive(1.0010)', () => {
        const result = new Translator().ruleFive('10010')
        
        expect(result).toEqual({
            hira: 'まんじゅう',
            kata: 'マンジュウ',
            kanji: '万十'
        });
    });
    it('14 - METHOD -> ruleFive(1.0100)', () => {
        const result = new Translator().ruleFive('10100')
        
        expect(result).toEqual({
            hira: 'まんひゃく',
            kata: 'マンヒャク',
            kanji: '万百'
        });
    });
    it('15 - METHOD -> ruleFive(1.1000)', () => {
        const result = new Translator().ruleFive('11000')
        
        expect(result).toEqual({
            hira: 'まんせん',
            kata: 'マンセン',
            kanji: '万千'
        });
    });
    it('16 - METHOD -> ruleSix(10.0000)', () => {
        const result = new Translator().ruleSix('100000')
        
        expect(result).toEqual({
            hira: 'じゅうまん',
            kata: 'ジュウマン',
            kanji: '十万'
        });
    });
    it('17 - METHOD -> ruleSix(10.0001)', () => {
        const result = new Translator().ruleSix('100001')
        
        expect(result).toEqual({
            hira: 'じゅうまんいち',
            kata: 'ジュウマンイチ',
            kanji: '十万一'
        });
    });
    it('18 - METHOD -> ruleSix(10.0010)', () => {
        const result = new Translator().ruleSix('100010')
        
        expect(result).toEqual({
            hira: 'じゅうまんじゅう',
            kata: 'ジュウマンジュウ',
            kanji: '十万十'
        });
    });
    it('19 - METHOD -> ruleSix(10.0100)', () => {
        const result = new Translator().ruleSix('100100')
        
        expect(result).toEqual({
            hira: 'じゅうまんひゃく',
            kata: 'ジュウマンヒャク',
            kanji: '十万百'
        });
    });
    it('20 - METHOD -> ruleSix(10.1000)', () => {
        const result = new Translator().ruleSix('101000')
        
        expect(result).toEqual({
            hira: 'じゅうまんせん',
            kata: 'ジュウマンセン',
            kanji: '十万千'
        });
    });
    it('21 - METHOD -> ruleSix(11.0000)', () => {
        const result = new Translator().ruleSix('110000')
        
        expect(result).toEqual({
            hira: 'じゅういちまん',
            kata: 'ジュウイチマン',
            kanji: '十一万'
        });
    });
    it('22 - METHOD -> ruleSeven(100.0000)', () => {
        const result = new Translator().ruleSeven('1000000')
        
        expect(result).toEqual({
            hira: 'ひゃくまん',
            kata: 'ヒャクマン',
            kanji: '百万'
        });
    });
    it('23 - METHOD -> ruleSeven(100.0001)', () => {
        const result = new Translator().ruleSeven('1000001')
        
        expect(result).toEqual({
            hira: 'ひゃくまんいち',
            kata: 'ヒャクマンイチ',
            kanji: '百万一'
        });
    });
    it('24 - METHOD -> ruleSeven(100.0010)', () => {
        const result = new Translator().ruleSeven('1000010')
        
        expect(result).toEqual({
            hira: 'ひゃくまんじゅう',
            kata: 'ヒャクマンジュウ',
            kanji: '百万十'
        });
    });
    it('25 - METHOD -> ruleSeven(100.0100)', () => {
        const result = new Translator().ruleSeven('1000100')
        
        expect(result).toEqual({
            hira: 'ひゃくまんひゃく',
            kata: 'ヒャクマンヒャク',
            kanji: '百万百'
        });
    });
    it('26 - METHOD -> ruleSeven(100.1000)', () => {
        const result = new Translator().ruleSeven('1001000')
        
        expect(result).toEqual({
            hira: 'ひゃくまんせん',
            kata: 'ヒャクマンセン',
            kanji: '百万千'
        });
    });
    it('27 - METHOD -> ruleSeven(101.0000)', () => {
        const result = new Translator().ruleSeven('1010000')
        
        expect(result).toEqual({
            hira: 'ひゃくいちまん',
            kata: 'ヒャクイチマン',
            kanji: '百一万'
        });
    });
    it('28 - METHOD -> ruleSeven(110.0000)', () => {
        const result = new Translator().ruleSeven('1100000')
        
        expect(result).toEqual({
            hira: 'ひゃくじゅうまん',
            kata: 'ヒャクジュウマン',
            kanji: '百十万'
        });
    });
    it('29 - METHOD -> ruleEight(1000.0000)', () => {
        const result = new Translator().ruleEight('10000000')
        
        expect(result).toEqual({
            hira: 'せんまん',
            kata: 'センマン',
            kanji: '千万'
        });
    });
    it('30 - METHOD -> ruleEight(1000.0001)', () => {
        const result = new Translator().ruleEight('10000001')
        
        expect(result).toEqual({
            hira: 'せんまんいち',
            kata: 'センマンイチ',
            kanji: '千万一'
        });
    });
    it('31 - METHOD -> ruleEight(1000.0010)', () => {
        const result = new Translator().ruleEight('10000010')
        
        expect(result).toEqual({
            hira: 'せんまんじゅう',
            kata: 'センマンジュウ',
            kanji: '千万十'
        });
    });
    it('32 - METHOD -> ruleEight(1000.0010)', () => {
        const result = new Translator().ruleEight('10000010')
        
        expect(result).toEqual({
            hira: 'せんまんじゅう',
            kata: 'センマンジュウ',
            kanji: '千万十'
        });
    });
    it('33 - METHOD -> ruleEight(1000.0100)', () => {
        const result = new Translator().ruleEight('10000100')
        
        expect(result).toEqual({
            hira: 'せんまんひゃく',
            kata: 'センマンヒャク',
            kanji: '千万百'
        });
    });
    it('34 - METHOD -> ruleEight(1000.1000)', () => {
        const result = new Translator().ruleEight('10001000')
        
        expect(result).toEqual({
            hira: 'せんまんせん',
            kata: 'センマンセン',
            kanji: '千万千'
        });
    });
    it('35 - METHOD -> ruleEight(1001.0000)', () => {
        const result = new Translator().ruleEight('10010000')
        
        expect(result).toEqual({
            hira: 'せんいちまん',
            kata: 'センイチマン',
            kanji: '千一万'
        });
    });
    it('36 - METHOD -> ruleEight(1010.0000)', () => {
        const result = new Translator().ruleEight('10100000')
        
        expect(result).toEqual({
            hira: 'せんじゅうまん',
            kata: 'センジュウマン',
            kanji: '千十万'
        });
    });
    it('37 - METHOD -> ruleEight(1100.0000)', () => {
        const result = new Translator().ruleEight('11000000')
        
        expect(result).toEqual({
            hira: 'せんひゃくまん',
            kata: 'センヒャクマン',
            kanji: '千百万'
        });
    });
    it('38 - METHOD -> ruleNine(1.0000.0000)', () => {
        const result = new Translator().ruleNine('100000000')
        
        expect(result).toEqual({
            hira: 'おく',
            kata: 'オク',
            kanji: '億'
        });
    });
    it('39 - METHOD -> ruleNine(1.0000.0001)', () => {
        const result = new Translator().ruleNine('100000001')
        
        expect(result).toEqual({
            hira: 'おくいち',
            kata: 'オクイチ',
            kanji: '億一'
        });
    });
    it('40 - METHOD -> ruleNine(1.0000.0010)', () => {
        const result = new Translator().ruleNine('100000010')
        
        expect(result).toEqual({
            hira: 'おくじゅう',
            kata: 'オクジュウ',
            kanji: '億十'
        });
    });
    it('41 - METHOD -> ruleNine(1.0000.0100)', () => {
        const result = new Translator().ruleNine('100000100')
        
        expect(result).toEqual({
            hira: 'おくひゃく',
            kata: 'オクヒャク',
            kanji: '億百'
        });
    });
    it('42 - METHOD -> ruleNine(1.0000.0100)', () => {
        const result = new Translator().ruleNine('100000100')
        
        expect(result).toEqual({
            hira: 'おくひゃく',
            kata: 'オクヒャク',
            kanji: '億百'
        });
    });
    it('43 - METHOD -> ruleNine(1.0000.1000)', () => {
        const result = new Translator().ruleNine('100001000')
        
        expect(result).toEqual({
            hira: 'おくせん',
            kata: 'オクセン',
            kanji: '億千'
        });
    });
    it('44 - METHOD -> ruleNine(1.0001.0000)', () => {
        const result = new Translator().ruleNine('100010000')
        
        expect(result).toEqual({
            hira: 'おくまん',
            kata: 'オクマン',
            kanji: '億万'
        });
    });
    it('45 - METHOD -> ruleNine(1.0010.0000)', () => {
        const result = new Translator().ruleNine('100100000')
        
        expect(result).toEqual({
            hira: 'おくじゅうまん',
            kata: 'オクジュウマン',
            kanji: '億十万'
        });
    });
    it('46 - METHOD -> ruleNine(1.0100.0000)', () => {
        const result = new Translator().ruleNine('101000000')
        
        expect(result).toEqual({
            hira: 'おくひゃくまん',
            kata: 'オクヒャクマン',
            kanji: '億百万'
        });
    });
    it('47 - METHOD -> ruleNine(1.1000.0000)', () => {
        const result = new Translator().ruleNine('110000000')
        
        expect(result).toEqual({
            hira: 'おくせんまん',
            kata: 'オクセンマン',
            kanji: '億千万'
        });
    });
    it('48 - METHOD -> ruleTen(10.0000.0000)', () => {
        const result = new Translator().ruleTen('1000000000')
        
        expect(result).toEqual({
            hira: 'じゅうおく',
            kata: 'ジュウオク',
            kanji: '十億'
        });
    });
    it('49 - METHOD -> ruleTen(10.0000.0001)', () => {
        const result = new Translator().ruleTen('1000000001')
        
        expect(result).toEqual({
            hira: 'じゅうおくいち',
            kata: 'ジュウオクイチ',
            kanji: '十億一'
        });
    });
    it('50 - METHOD -> ruleTen(10.0000.0010)', () => {
        const result = new Translator().ruleTen('1000000010')
        
        expect(result).toEqual({
            hira: 'じゅうおくじゅう',
            kata: 'ジュウオクジュウ',
            kanji: '十億十'
        });
    });
    it('51 - METHOD -> ruleTen(10.0000.0100)', () => {
        const result = new Translator().ruleTen('1000000100')
        
        expect(result).toEqual({
            hira: 'じゅうおくひゃく',
            kata: 'ジュウオクヒャク',
            kanji: '十億百'
        });
    });
    it('52 - METHOD -> ruleTen(10.0000.1000)', () => {
        const result = new Translator().ruleTen('1000001000')
        
        expect(result).toEqual({
            hira: 'じゅうおくせん',
            kata: 'ジュウオクセン',
            kanji: '十億千'
        });
    });
    it('53 - METHOD -> ruleTen(10.0001.0000)', () => {
        const result = new Translator().ruleTen('1000010000')
        
        expect(result).toEqual({
            hira: 'じゅうおくまん',
            kata: 'ジュウオクマン',
            kanji: '十億万'
        });
    });
    it('54 - METHOD -> ruleTen(10.0010.0000)', () => {
        const result = new Translator().ruleTen('1000100000')
        
        expect(result).toEqual({
            hira: 'じゅうおくじゅうまん',
            kata: 'ジュウオクジュウマン',
            kanji: '十億十万'
        });
    });
    it('55 - METHOD -> ruleTen(10.0100.0000)', () => {
        const result = new Translator().ruleTen('1001000000')
        
        expect(result).toEqual({
            hira: 'じゅうおくひゃくまん',
            kata: 'ジュウオクヒャクマン',
            kanji: '十億百万'
        });
    });
    it('56 - METHOD -> ruleTen(10.1000.0000)', () => {
        const result = new Translator().ruleTen('1010000000')
        
        expect(result).toEqual({
            hira: 'じゅうおくせんまん',
            kata: 'ジュウオクセンマン',
            kanji: '十億千万'
        });
    });
    it('57 - METHOD -> ruleTen(11.0000.0000)', () => {
        const result = new Translator().ruleTen('1100000000')
        
        expect(result).toEqual({
            hira: 'じゅういちおく',
            kata: 'ジュウイチオク',
            kanji: '十一億'
        });
    });
})

describe('Se ingresa un número en el método getNumberWithMaru, el método debe devolver el número con los puntos cada 4 digitos', () => {

    it('getNumberWithMaru(1)', () => {
        const result = new Translator().getNumberWithMaru('1')
        
        expect(result).toBe('1')
    })
    it('getNumberWithMaru(10)', () => {
        const result = new Translator().getNumberWithMaru('10')
        
        expect(result).toBe('10')
    })
    it('getNumberWithMaru(100)', () => {
        const result = new Translator().getNumberWithMaru('100')
        
        expect(result).toBe('100')
    })
    it('getNumberWithMaru(1000)', () => {
        const result = new Translator().getNumberWithMaru('1000')
        
        expect(result).toBe('1000')
    })
    it('getNumberWithMaru(1.0000)', () => {
        const result = new Translator().getNumberWithMaru('10000')
        
        expect(result).toBe('1.0000')
    })
    it('getNumberWithMaru(10.0000)', () => {
        const result = new Translator().getNumberWithMaru('100000')
        
        expect(result).toBe('10.0000')
    })
    it('getNumberWithMaru(100.0000)', () => {
        const result = new Translator().getNumberWithMaru('1000000')
        
        expect(result).toBe('100.0000')
    })
    it('getNumberWithMaru(1000.0000)', () => {
        const result = new Translator().getNumberWithMaru('10000000')
        
        expect(result).toBe('1000.0000')
    })
    it('getNumberWithMaru(1.0000.0000)', () => {
        const result = new Translator().getNumberWithMaru('100000000')
        
        expect(result).toBe('1.0000.0000')
    })
    it('getNumberWithMaru(10.0000.0000)', () => {
        const result = new Translator().getNumberWithMaru('1000000000')
        
        expect(result).toBe('10.0000.0000')
    })
})

describe('El metodo getNaturalNumber debe retornar el número sin maru', () => {
    it('getNaturalNumber(1000)', () => {
        const result = new Translator().getNaturalNumber('1000')
        
        expect(result).toBe('1000')
    })
    it('getNaturalNumber(1.0000', () => {
        const result = new Translator().getNaturalNumber('1.0000')
        
        expect(result).toBe('10000')
    })
    it('getNaturalNumber(1.0000.0000)', () => {
        const result = new Translator().getNaturalNumber('1.0000.0000')
        
        expect(result).toBe('100000000')
    })
})
