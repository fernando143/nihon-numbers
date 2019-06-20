import { shallowMount } from '@vue/test-utils'
import InputNumber from '@/components/InputNumber.vue'

// npm run test:unit

describe('InputNumber Component', () => {
    const wrapper = shallowMount(InputNumber);

    it('METHOD -> ruleOne(1)', () => {
        expect(wrapper.vm.ruleOne(1)).toEqual({
            hira: 'いち',
            kata: 'イチ',
            kanji: '一'
        });
    });
    it('METHOD -> ruleTwo(10)', () => {
        expect(wrapper.vm.ruleTwo('10')).toEqual({
            hira: 'じゅう',
            kata: 'ジュウ',
            kanji: '十'
        });
    });
    it('METHOD -> ruleTwo(15)', () => {
        expect(wrapper.vm.ruleTwo('15')).toEqual({
            hira: 'じゅうご',
            kata: 'ジュウゴ',
            kanji: '十五'
        });
    });
    it('METHOD -> ruleThree(100)', () => {
        expect(wrapper.vm.ruleThree('100')).toEqual({
            hira: 'ひゃく',
            kata: 'ヒャク',
            kanji: '百'
        });
    });
    it('METHOD -> ruleThree(105)', () => {
        expect(wrapper.vm.ruleThree('105')).toEqual({
            hira: 'ひゃくご',
            kata: 'ヒャクゴ',
            kanji: '百五'
        });
    });
    it('METHOD -> ruleThree(110)', () => {
        expect(wrapper.vm.ruleThree('110')).toEqual({
            hira: 'ひゃくじゅう',
            kata: 'ヒャクジュウ',
            kanji: '百十'
        });
    });
    it('METHOD -> ruleFour(1000)', () => {
        expect(wrapper.vm.ruleFour('1000')).toEqual({
            hira: 'せん',
            kata: 'セン',
            kanji: '千'
        });
    });
    it('METHOD -> ruleFour(1005)', () => {
        expect(wrapper.vm.ruleFour('1005')).toEqual({
            hira: 'せんご',
            kata: 'センゴ',
            kanji: '千五'
        });
    });
    it('METHOD -> ruleFour(1010)', () => {
        expect(wrapper.vm.ruleFour('1010')).toEqual({
            hira: 'せんじゅう',
            kata: 'センジュウ',
            kanji: '千十'
        });
    });
    it('METHOD -> ruleFour(1100)', () => {
        expect(wrapper.vm.ruleFour('1100')).toEqual({
            hira: 'せんひゃく',
            kata: 'センヒャク',
            kanji: '千百'
        });
    });
    it('METHOD -> ruleFive(10000)', () => {
        expect(wrapper.vm.ruleFive('10000')).toEqual({
            hira: 'まん',
            kata: 'マン',
            kanji: '万'
        });
    });
    it('METHOD -> ruleFive(10001)', () => {
        expect(wrapper.vm.ruleFive('10001')).toEqual({
            hira: 'まんいち',
            kata: 'マンイチ',
            kanji: '万一'
        });
    });
    it('METHOD -> ruleFive(10010)', () => {
        expect(wrapper.vm.ruleFive('10010')).toEqual({
            hira: 'まんじゅう',
            kata: 'マンジュウ',
            kanji: '万十'
        });
    });
    it('METHOD -> ruleFive(10100)', () => {
        expect(wrapper.vm.ruleFive('10100')).toEqual({
            hira: 'まんひゃく',
            kata: 'マンヒャク',
            kanji: '万百'
        });
    });
    it('METHOD -> ruleFive(11000)', () => {
        expect(wrapper.vm.ruleFive('11000')).toEqual({
            hira: 'まんせん',
            kata: 'マンセン',
            kanji: '万千'
        });
    });
    it('METHOD -> ruleSix(100000)', () => {
        expect(wrapper.vm.ruleSix('100000')).toEqual({
            hira: 'じゅうまん',
            kata: 'ジュウマン',
            kanji: '十万'
        });
    });
    it('METHOD -> ruleSix(100001)', () => {
        expect(wrapper.vm.ruleSix('100001')).toEqual({
            hira: 'じゅうまんいち',
            kata: 'ジュウマンイチ',
            kanji: '十万一'
        });
    });
    it('METHOD -> ruleSix(100010)', () => {
        expect(wrapper.vm.ruleSix('100010')).toEqual({
            hira: 'じゅうまんじゅう',
            kata: 'ジュウマンジュウ',
            kanji: '十万十'
        });
    });
    it('METHOD -> ruleSix(100100)', () => {
        expect(wrapper.vm.ruleSix('100100')).toEqual({
            hira: 'じゅうまんひゃく',
            kata: 'ジュウマンヒャク',
            kanji: '十万百'
        });
    });
    it('METHOD -> ruleSix(101000)', () => {
        expect(wrapper.vm.ruleSix('101000')).toEqual({
            hira: 'じゅうまんせん',
            kata: 'ジュウマンセン',
            kanji: '十万千'
        });
    });
    it('METHOD -> ruleSix(110000)', () => {
        expect(wrapper.vm.ruleSix('110000')).toEqual({
            hira: 'じゅういちまん',
            kata: 'ジュウイチマン',
            kanji: '十一万'
        });
    });
    it('METHOD -> ruleSeven(1000000)', () => {
        expect(wrapper.vm.ruleSeven('1000000')).toEqual({
            hira: 'ひゃくまん',
            kata: 'ヒャクマン',
            kanji: '百万'
        });
    });
    it('METHOD -> ruleSeven(1000001)', () => {
        expect(wrapper.vm.ruleSeven('1000001')).toEqual({
            hira: 'ひゃくまんいち',
            kata: 'ヒャクマンイチ',
            kanji: '百万一'
        });
    });
    it('METHOD -> ruleSeven(1000010)', () => {
        expect(wrapper.vm.ruleSeven('1000010')).toEqual({
            hira: 'ひゃくまんじゅう',
            kata: 'ヒャクマンジュウ',
            kanji: '百万十'
        });
    });
    it('METHOD -> ruleSeven(1000100)', () => {
        expect(wrapper.vm.ruleSeven('1000100')).toEqual({
            hira: 'ひゃくまんひゃく',
            kata: 'ヒャクマンヒャク',
            kanji: '百万百'
        });
    });
    it('METHOD -> ruleSeven(1001000)', () => {
        expect(wrapper.vm.ruleSeven('1001000')).toEqual({
            hira: 'ひゃくまんせん',
            kata: 'ヒャクマンセン',
            kanji: '百万千'
        });
    });
    it('METHOD -> ruleSeven(1010000)', () => {
        expect(wrapper.vm.ruleSeven('1010000')).toEqual({
            hira: 'ひゃくいちまん',
            kata: 'ヒャクイチマン',
            kanji: '百一万'
        });
    });
    it('METHOD -> ruleSeven(1100000)', () => {
        expect(wrapper.vm.ruleSeven('1100000')).toEqual({
            hira: 'ひゃくじゅうまん',
            kata: 'ヒャクジュウマン',
            kanji: '百十万'
        });
    });
    it('METHOD -> ruleEight(10000000)', () => {
        expect(wrapper.vm.ruleEight('10000000')).toEqual({
            hira: 'せんまん',
            kata: 'センマン',
            kanji: '千万'
        });
    });
    it('METHOD -> ruleEight(10000001)', () => {
        expect(wrapper.vm.ruleEight('10000001')).toEqual({
            hira: 'せんまんいち',
            kata: 'センマンイチ',
            kanji: '千万一'
        });
    });
    it('METHOD -> ruleEight(10000010)', () => {
        expect(wrapper.vm.ruleEight('10000010')).toEqual({
            hira: 'せんまんじゅう',
            kata: 'センマンジュウ',
            kanji: '千万十'
        });
    });
    it('METHOD -> ruleEight(10000010)', () => {
        expect(wrapper.vm.ruleEight('10000010')).toEqual({
            hira: 'せんまんじゅう',
            kata: 'センマンジュウ',
            kanji: '千万十'
        });
    });
    it('METHOD -> ruleEight(10000100)', () => {
        expect(wrapper.vm.ruleEight('10000100')).toEqual({
            hira: 'せんまんひゃく',
            kata: 'センマンヒャク',
            kanji: '千万百'
        });
    });
    it('METHOD -> ruleEight(10001000)', () => {
        expect(wrapper.vm.ruleEight('10001000')).toEqual({
            hira: 'せんまんせん',
            kata: 'センマンセン',
            kanji: '千万千'
        });
    });
    it('METHOD -> ruleEight(10010000)', () => {
        expect(wrapper.vm.ruleEight('10010000')).toEqual({
            hira: 'せんいちまん',
            kata: 'センイチマン',
            kanji: '千一万'
        });
    });
    it('METHOD -> ruleEight(10100000)', () => {
        expect(wrapper.vm.ruleEight('10100000')).toEqual({
            hira: 'せんじゅうまん',
            kata: 'センジュウマン',
            kanji: '千十万'
        });
    });
    it('METHOD -> ruleEight(11000000)', () => {
        expect(wrapper.vm.ruleEight('11000000')).toEqual({
            hira: 'せんひゃくまん',
            kata: 'センヒャクマン',
            kanji: '千百万'
        });
    });
    it('METHOD -> ruleNine(100000000)', () => {
        expect(wrapper.vm.ruleNine('100000000')).toEqual({
            hira: 'おく',
            kata: 'オク',
            kanji: '億'
        });
    });
    it('METHOD -> ruleNine(100000001)', () => {
        expect(wrapper.vm.ruleNine('100000001')).toEqual({
            hira: 'おくいち',
            kata: 'オクイチ',
            kanji: '億一'
        });
    });
    it('METHOD -> ruleNine(100000010)', () => {
        expect(wrapper.vm.ruleNine('100000010')).toEqual({
            hira: 'おくじゅう',
            kata: 'オクジュウ',
            kanji: '億十'
        });
    });
    it('METHOD -> ruleNine(100000100)', () => {
        expect(wrapper.vm.ruleNine('100000100')).toEqual({
            hira: 'おくひゃく',
            kata: 'オクヒャク',
            kanji: '億百'
        });
    });
    it('METHOD -> ruleNine(100000100)', () => {
        expect(wrapper.vm.ruleNine('100000100')).toEqual({
            hira: 'おくひゃく',
            kata: 'オクヒャク',
            kanji: '億百'
        });
    });
    it('METHOD -> ruleNine(100001000)', () => {
        expect(wrapper.vm.ruleNine('100001000')).toEqual({
            hira: 'おくせん',
            kata: 'オクセン',
            kanji: '億千'
        });
    });
    it('METHOD -> ruleNine(100010000)', () => {
        expect(wrapper.vm.ruleNine('100010000')).toEqual({
            hira: 'おくまん',
            kata: 'オクマン',
            kanji: '億万'
        });
    });
    it('METHOD -> ruleNine(100100000)', () => {
        expect(wrapper.vm.ruleNine('100100000')).toEqual({
            hira: 'おくじゅうまん',
            kata: 'オクジュウマン',
            kanji: '億十万'
        });
    });
    it('METHOD -> ruleNine(101000000)', () => {
        expect(wrapper.vm.ruleNine('101000000')).toEqual({
            hira: 'おくひゃくまん',
            kata: 'オクヒャクマン',
            kanji: '億百万'
        });
    });
    it('METHOD -> ruleNine(110000000)', () => {
        expect(wrapper.vm.ruleNine('110000000')).toEqual({
            hira: 'おくせんまん',
            kata: 'オクセンマン',
            kanji: '億千万'
        });
    });
    it('METHOD -> ruleTen(1000000000)', () => {
        expect(wrapper.vm.ruleNine('1000000000')).toEqual({
            hira: 'じゅうおく',
            kata: 'ジュウオク',
            kanji: '十億'
        });
    });
    it('METHOD -> ruleTen(1000000001)', () => {
        expect(wrapper.vm.ruleNine('1000000001')).toEqual({
            hira: 'じゅうおくいち',
            kata: 'ジュウオクイチ',
            kanji: '十億一'
        });
    });
    it('METHOD -> ruleTen(1000000010)', () => {
        expect(wrapper.vm.ruleNine('1000000010')).toEqual({
            hira: 'じゅうおくじゅう',
            kata: 'ジュウオクジュウ',
            kanji: '十億十'
        });
    });
    it('METHOD -> ruleTen(1000000100)', () => {
        expect(wrapper.vm.ruleNine('1000000100')).toEqual({
            hira: 'じゅうおくひゃく',
            kata: 'ジュウオクヒャク',
            kanji: '十億百'
        });
    });
    it('METHOD -> ruleTen(1000001000)', () => {
        expect(wrapper.vm.ruleNine('1000001000')).toEqual({
            hira: 'じゅうおくせん',
            kata: 'ジュウオクセン',
            kanji: '十億千'
        });
    });
    it('METHOD -> ruleTen(1000010000)', () => {
        expect(wrapper.vm.ruleNine('1000010000')).toEqual({
            hira: 'じゅうおくまん',
            kata: 'ジュウオクマン',
            kanji: '十億万'
        });
    });
    it('METHOD -> ruleTen(1000100000)', () => {
        expect(wrapper.vm.ruleNine('1000100000')).toEqual({
            hira: 'じゅうおくじゅうまん',
            kata: 'ジュウオクジュウマン',
            kanji: '十億十万'
        });
    });
    it('METHOD -> ruleTen(1001000000)', () => {
        expect(wrapper.vm.ruleNine('1001000000')).toEqual({
            hira: 'じゅうおくひゃくまん',
            kata: 'ジュウオクヒャクマン',
            kanji: '十億百万'
        });
    });
    it('METHOD -> ruleTen(1010000000)', () => {
        expect(wrapper.vm.ruleNine('1010000000')).toEqual({
            hira: 'じゅうおくせんまん',
            kata: 'ジュウオクセンマン',
            kanji: '十億千万'
        });
    });
    it('METHOD -> ruleTen(1100000000)', () => {
        expect(wrapper.vm.ruleNine('1100000000')).toEqual({
            hira: 'じゅういちおく',
            kata: 'ジュウイチオク',
            kanji: '十一億'
        });
    });
})

