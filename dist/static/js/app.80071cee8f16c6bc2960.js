webpackJsonp([1],{"9ivX":function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("7+uW"),i={name:"App",data:function(){return{number:"",lengthNumber:"",outputNumber:"",nativeNumbers:["れい","いち","に","さん","よん","ご","ろく","なな","はち","きゅう","じゅう"],hyakuNumbers:["ひゃく","にひゃく","さんびゃく","よんひゃく","ごひゃく","ろっぴゃく","ななひゃく","はっぴゃく","きゅうひゃく"],senNumbers:["せん","にせん","さんぜん","よんせん","ごせん","ろくせん","ななせん","はっせん","きゅうせん"],manNumbers:["まん","にまん","さんまん","よんまん","ごまん","ろくまん","ななまん","はちまん","きゅうまん"]}},methods:{start:function(){this.calculateLength()},calculateLength:function(){var e=this.number.length;if(this.lengthNumber=e,!e)return this.clear(),!1;this.selectRule(this.number,this.lengthNumber,!0)},clear:function(){this.outputNumber=""},selectRule:function(e,t,r){var s=e,i=void 0;switch(t){case 1:i=this.ruleOne(s);break;case 2:i=this.ruleTwo(s);break;case 3:i=this.ruleThree(s);break;case 4:i=this.ruleFour(s);break;case 5:i=this.ruleFive(s);break;case 6:i=this.ruleSix(s);break;default:this.outputNumber="no tengo idea",console.log(this.lengthNumber)}if(!r)return i;this.setNumberConverted(i)},ruleOne:function(e){var t=e;return this.nativeNumbers[t]},ruleTwo:function(e){var t=e.indexOf(1),r=e.slice(0,1),s=e.slice(1),i=new RegExp(/([1-9]0)/).test(e),n="";if(i)switch(i){case"10"!=e:n=this.nativeNumbers[r]+this.nativeNumbers[10];break;case"10"===e:n=this.nativeNumbers[10]}return""===n&&(n=0===t?this.nativeNumbers[10]+this.nativeNumbers[s]:this.nativeNumbers[r]+this.nativeNumbers[10]+this.nativeNumbers[s]),n},ruleThree:function(e){var t=e.slice(0,1),r=e.slice(1),s=new RegExp(/([1-9]0[1-9])/).test(e),i="";if(new RegExp(/([1-9]00)/).test(e)&&(i=this.hyakuNumbers[t-1]),s&&(r=e.slice(2)),""===i){var n=void 0;n=1===r.length?this.ruleOne(r):this.ruleTwo(r),i=this.hyakuNumbers[t-1]+n}return i},ruleFour:function(e){var t=e.slice(0,1),r=e.slice(1),s=new RegExp(/([1-9]000)/).test(e),i="";if(s&&(i=this.senNumbers[t-1]),!s){for(var n=void 0,u=0;u<r.length;u++){if("0"!==r.charAt(u)){switch(r=r.slice(u),!0){case 0===u:n=this.ruleThree(r);break;case 1===u:n=this.ruleTwo(r);break;case 2===u:n=this.ruleOne(r)}break}}i=this.senNumbers[t-1]+n}return i},ruleFive:function(e){var t=e.slice(0,1),r=e.slice(1),s=new RegExp(/([1-9]0000)/).test(e),i="";if(s&&(i=this.manNumbers[t-1]),!s){for(var n=0;n<=r.length;n++){var u=n;if("0"!==r.charAt(n)){r=r.slice(u);break}}i=this.manNumbers[t-1]+this.selectRule(r,r.length,!1)}return i},ruleSix:function(e){e.slice(0,1);var t=e.slice(0,2),r=e.slice(2),s=new RegExp(/([1-9]00000)/).test(e),i=!1,n="";if(s&&(n=this.ruleTwo(t)+this.manNumbers[0]),!s){for(var u=0;u<r.length;u++){var a=u;if("0"!==r.charAt(u)){i=!0,r=r.slice(a);break}}n=i?this.ruleTwo(t)+this.manNumbers[0]+this.selectRule(r,r.length,!1):this.ruleTwo(t)+this.manNumbers[0]}return n},setNumberConverted:function(e){this.outputNumber=e}}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{type:"text"},domProps:{value:e.number},on:{input:[function(t){t.target.composing||(e.number=t.target.value)},e.start]}}),e._v(" "),r("button",{on:{click:e.start}},[e._v("Traducir")]),e._v(" "),r("div",[r("h5",[e._v(e._s(e.outputNumber))])])])},staticRenderFns:[]};var u=r("VU/8")(i,n,!1,function(e){r("9ivX")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:u},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.80071cee8f16c6bc2960.js.map