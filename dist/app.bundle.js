(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function n(n){e(1,arguments);var r=Object.prototype.toString.call(n);return n instanceof Date||"object"===t(n)&&"[object Date]"===r?new Date(n.getTime()):"number"==typeof n||"[object Number]"===r?new Date(n):("string"!=typeof n&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function r(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function a(t){e(1,arguments);var r=n(t),a=r.getUTCDay(),i=(a<1?7:0)+a-1;return r.setUTCDate(r.getUTCDate()-i),r.setUTCHours(0,0,0,0),r}function i(t){e(1,arguments);var r=n(t),i=r.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(i+1,0,4),o.setUTCHours(0,0,0,0);var s=a(o),u=new Date(0);u.setUTCFullYear(i,0,4),u.setUTCHours(0,0,0,0);var c=a(u);return r.getTime()>=s.getTime()?i+1:r.getTime()>=c.getTime()?i:i-1}var o={};function s(){return o}function u(t,a){var i,o,u,c,l,d,m,f;e(1,arguments);var h=s(),g=r(null!==(i=null!==(o=null!==(u=null!==(c=null==a?void 0:a.weekStartsOn)&&void 0!==c?c:null==a||null===(l=a.locale)||void 0===l||null===(d=l.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==u?u:h.weekStartsOn)&&void 0!==o?o:null===(m=h.locale)||void 0===m||null===(f=m.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==i?i:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=n(t),w=v.getUTCDay(),y=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-y),v.setUTCHours(0,0,0,0),v}function c(t,a){var i,o,c,l,d,m,f,h;e(1,arguments);var g=n(t),v=g.getUTCFullYear(),w=s(),y=r(null!==(i=null!==(o=null!==(c=null!==(l=null==a?void 0:a.firstWeekContainsDate)&&void 0!==l?l:null==a||null===(d=a.locale)||void 0===d||null===(m=d.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==c?c:w.firstWeekContainsDate)&&void 0!==o?o:null===(f=w.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==i?i:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setUTCFullYear(v+1,0,y),p.setUTCHours(0,0,0,0);var b=u(p,a),x=new Date(0);x.setUTCFullYear(v,0,y),x.setUTCHours(0,0,0,0);var T=u(x,a);return g.getTime()>=b.getTime()?v+1:g.getTime()>=T.getTime()?v:v-1}function l(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const d=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return l("yy"===e?r%100:r,e.length)},m=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):l(n+1,2)},f=function(t,e){return l(t.getUTCDate(),e.length)},h=function(t,e){return l(t.getUTCHours()%12||12,e.length)},g=function(t,e){return l(t.getUTCHours(),e.length)},v=function(t,e){return l(t.getUTCMinutes(),e.length)},w=function(t,e){return l(t.getUTCSeconds(),e.length)},y=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return l(Math.floor(r*Math.pow(10,n-3)),e.length)};var p={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return d(t,e)},Y:function(t,e,n,r){var a=c(t,r),i=a>0?a:1-a;return"YY"===e?l(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):l(i,e.length)},R:function(t,e){return l(i(t),e.length)},u:function(t,e){return l(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return l(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return l(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return m(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return l(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,a,i,o){var d=function(t,a){e(1,arguments);var i=n(t),o=u(i,a).getTime()-function(t,n){var a,i,o,l,d,m,f,h;e(1,arguments);var g=s(),v=r(null!==(a=null!==(i=null!==(o=null!==(l=null==n?void 0:n.firstWeekContainsDate)&&void 0!==l?l:null==n||null===(d=n.locale)||void 0===d||null===(m=d.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:g.firstWeekContainsDate)&&void 0!==i?i:null===(f=g.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==a?a:1),w=c(t,n),y=new Date(0);return y.setUTCFullYear(w,0,v),y.setUTCHours(0,0,0,0),u(y,n)}(i,a).getTime();return Math.round(o/6048e5)+1}(t,o);return"wo"===a?i.ordinalNumber(d,{unit:"week"}):l(d,a.length)},I:function(t,r,o){var s=function(t){e(1,arguments);var r=n(t),o=a(r).getTime()-function(t){e(1,arguments);var n=i(t),r=new Date(0);return r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0),a(r)}(r).getTime();return Math.round(o/6048e5)+1}(t);return"Io"===r?o.ordinalNumber(s,{unit:"week"}):l(s,r.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):f(t,e)},D:function(t,r,a){var i=function(t){e(1,arguments);var r=n(t),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var i=a-r.getTime();return Math.floor(i/864e5)+1}(t);return"Do"===r?a.ordinalNumber(i,{unit:"dayOfYear"}):l(i,r.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return l(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return l(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return l(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):g(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):l(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):l(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):v(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):w(t,e)},S:function(t,e){return y(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return x(a);case"XXXX":case"XX":return T(a);default:return T(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return x(a);case"xxxx":case"xx":return T(a);default:return T(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+b(a,":");default:return"GMT"+T(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+b(a,":");default:return"GMT"+T(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return l(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return l((r._originalDate||t).getTime(),e.length)}};function b(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+l(i,2)}function x(t,e){return t%60==0?(t>0?"-":"+")+l(Math.abs(t)/60,2):T(t,e)}function T(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+l(Math.floor(a/60),2)+n+l(a%60,2)}const M=p;var C=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},E=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},k={p:E,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return C(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",C(a,e)).replace("{{time}}",E(i,e))}};const D=k;var S=["D","DD"],L=["YY","YYYY"];function U(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var P={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function q(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var W,Y={date:q({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:q({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:q({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},$={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function B(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var o=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[s]||t.values[o]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function H(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,s=i[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(u):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(u);return o=t.valueCallback?t.valueCallback(c):c,{value:o=n.valueCallback?n.valueCallback(o):o,rest:e.slice(s.length)}}}const N={code:"en-US",formatDistance:function(t,e,n){var r,a=P[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:Y,formatRelative:function(t,e,n,r){return $[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:B({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:B({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:B({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:B({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:B({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(W={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(W.matchPattern);if(!n)return null;var r=n[0],a=t.match(W.parsePattern);if(!a)return null;var i=W.valueCallback?W.valueCallback(a[0]):a[0];return{value:i=e.valueCallback?e.valueCallback(i):i,rest:t.slice(r.length)}}),era:H({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:H({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:H({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:H({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:H({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var O=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,I=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,F=/^'([^]*?)'?$/,z=/''/g,_=/[a-zA-Z]/;function j(a,i,o){var u,c,l,d,m,f,h,g,v,w,y,p,b,x,T,C,E,k;e(2,arguments);var P=String(i),q=s(),W=null!==(u=null!==(c=null==o?void 0:o.locale)&&void 0!==c?c:q.locale)&&void 0!==u?u:N,Y=r(null!==(l=null!==(d=null!==(m=null!==(f=null==o?void 0:o.firstWeekContainsDate)&&void 0!==f?f:null==o||null===(h=o.locale)||void 0===h||null===(g=h.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:q.firstWeekContainsDate)&&void 0!==d?d:null===(v=q.locale)||void 0===v||null===(w=v.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==l?l:1);if(!(Y>=1&&Y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var $=r(null!==(y=null!==(p=null!==(b=null!==(x=null==o?void 0:o.weekStartsOn)&&void 0!==x?x:null==o||null===(T=o.locale)||void 0===T||null===(C=T.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==b?b:q.weekStartsOn)&&void 0!==p?p:null===(E=q.locale)||void 0===E||null===(k=E.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==y?y:0);if(!($>=0&&$<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!W.localize)throw new RangeError("locale must contain localize property");if(!W.formatLong)throw new RangeError("locale must contain formatLong property");var B=n(a);if(!function(r){if(e(1,arguments),!function(n){return e(1,arguments),n instanceof Date||"object"===t(n)&&"[object Date]"===Object.prototype.toString.call(n)}(r)&&"number"!=typeof r)return!1;var a=n(r);return!isNaN(Number(a))}(B))throw new RangeError("Invalid time value");var H=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(B),j=function(t,a){return e(2,arguments),function(t,a){e(2,arguments);var i=n(t).getTime(),o=r(a);return new Date(i+o)}(t,-r(a))}(B,H),A={firstWeekContainsDate:Y,weekStartsOn:$,locale:W,_originalDate:B};return P.match(I).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,D[e])(t,W.formatLong):t})).join("").match(O).map((function(t){if("''"===t)return"'";var e,n,r=t[0];if("'"===r)return(n=(e=t).match(F))?n[1].replace(z,"'"):e;var s,u=M[r];if(u)return null!=o&&o.useAdditionalWeekYearTokens||(s=t,-1===L.indexOf(s))||U(t,i,String(a)),null!=o&&o.useAdditionalDayOfYearTokens||!function(t){return-1!==S.indexOf(t)}(t)||U(t,i,String(a)),u(j,t,W.localize,A);if(r.match(_))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return t})).join("")}async function A(t){try{const e=await async function(t,e){const n=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=494b4005bb82497883871927232508&q=${t}&days=3&aqi=yes`,{mode:"cors"}),r=await n.json();if(200!==n.status)throw new Error(r.error.message);return console.log(r,n),r}(t);return e}catch(t){throw new Error(t)}}!function(){let t=0,e="",n={};function r(t){const e=+t.slice(0,2);return 12===e&&t.includes("AM")?`00${t.slice(2,-2)}`:12!==e&&t.includes("PM")?`${12+e}${t.slice(2,-2)}`:`${t.slice(0,-2)}`}function a(){const t=document.getElementById("forecast");for(;t.firstChild;)t.removeChild(t.firstChild)}function i({location:t,date:e,time:n,temp:a,tempHigh:i,tempLow:o,tempFeel:s,precipitation:u,windSpeed:c,windDirection:l,uvIndex:d,aqi:m,humidity:f,sunriseTime:h,sunsetTime:g,icon:v}){document.getElementById("location").innerText=`${t.name}, ${t.country}`;const w=document.getElementById("datetime");var y;console.log(n),w.innerText=`${j(new Date(e),"EEEE d MMMM yyyy")} ${n}`,document.getElementById("condition-icon").setAttribute("src",v),document.getElementById("temp-low").innerText=`${Math.floor(o)}°C`,document.getElementById("temp-current").innerText=`${Math.floor(a)}°C`,document.getElementById("temp-high").innerText=`${Math.floor(i)}°C`,document.getElementById("temp-feels").innerText=`Feels like ${Math.floor(s)}°C`,document.getElementById("precipitation").innerText=`${Math.floor(u)}%`,document.getElementById("wind").innerText=`${Math.round(c)}kmh ${l}`,document.getElementById("uv").innerText=`${d} • ${y=d,y<3?"Low":y<6?"Medium":y<8?"High":y<11?"Very High":"Extreme"}`,document.getElementById("aqi").innerText=`${m} • ${function(t){switch(t){case 1:return"Good";case 2:return"Moderate";case 3:return"Unhealthy*";case 4:return"Unhealthy";case 5:return"Very Unhealthy";case 6:return"Hazardous";default:return"N/A"}}(m)}`,document.getElementById("humidity").innerText=`${f}%`,document.getElementById("sun").innerText=`${r(h)} | ${r(g)}`}function o(){const t=document.createElement("div");return t.classList.add(..."slide w-full flex flex-col gap-4 relative scroll-snap-align-start flex-shrink-0 transition-[transform] items-center sm:flex-row".split(" ")),t}function s(t){const e=document.querySelector(".slides");"right"===t?e.scrollBy(1,0):"left"===t&&e.scrollBy(-1,0)}function u(t){const e=n.location.localtime.slice(-5,-3);console.log(e);const r=document.getElementById("forecast");r.classList.remove("flex-col"),a(),r.innerHTML+='\n    <svg\n      id="forecast-control-left"\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 24 24"\n      class="h-8 fill-zinc-50 transition-all ease-linear rotate-90 opacity-0"\n    >\n      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />\n    </svg>\n    ';const i=document.createElement("div");i.classList.add(..."slides flex overflow-x-hidden scroll-smooth scroll-snap-x-mandatory w-full".split(" ")),r.appendChild(i);const s=o(),u=o(),c=o();s.classList.add("forecast-slide-1"),u.classList.add("forecast-slide-2"),c.classList.add("forecast-slide-3"),i.appendChild(s),i.appendChild(u),i.appendChild(c);let l=1,d=s;t.forEach(((t,n)=>{t.hour.forEach(((t,r)=>{if(0===n&&r>e||1===n&&r<=e){const e=function({time:t,condition:e,icon:n}){const r=document.createElement("div");return r.classList.add(..."flex w-full items-center gap-2 sm:flex-col sm:h-full text-center".split(" ")),r.innerHTML=`\n    <p class="font-bold sm:order-1">${t}</p>\n    <p class="font-bold ml-auto sm:order-3 sm:ml-0">${e}</p>\n    <img\n      src="${n}"\n      alt="condition icon"\n      class="condition-icon h-10 aspect-square sm:order-2"\n    />\n  `,r}({time:`${r<10?`0${r}`:r}:00`,condition:t.condition.text,icon:t.condition.icon});d.appendChild(e),8===l?d=u:16===l&&(d=c),l+=1}}))})),r.innerHTML+='\n    <svg\n      id="forecast-control-right"\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 24 24"\n      class="h-8 fill-zinc-50 transition-all ease-linear -rotate-90 cursor-pointer"\n    >\n      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />\n    </svg>\n  '}function c(){const t=this.querySelector(".extra");this.querySelector("svg").classList.toggle("rotate-180"),t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=`${t.scrollHeight}px`}function l(){const n=document.getElementById("forecast-control-left"),r=document.getElementById("forecast-control-right");t>0&&"left"===e?t-=1:t<2&&"right"===e&&(t+=1),0===t?(n.style.opacity=0,n.classList.toggle("cursor-pointer")):2===t?(r.style.opacity=0,r.classList.toggle("cursor-pointer")):(n.style.opacity=1,r.style.opacity=1,n.classList.add("cursor-pointer"),r.classList.add("cursor-pointer"))}document.querySelector("button").addEventListener("click",(async t=>{t.preventDefault();try{n=await A(document.querySelector("input").value),i({location:n.location,date:n.location.localtime.split(" ")[0],time:n.location.localtime.split(" ")[1],temp:n.current.temp_c,tempHigh:n.forecast.forecastday[0].day.maxtemp_c,tempLow:n.forecast.forecastday[0].day.mintemp_c,tempFeel:n.current.feelslike_c,precipitation:n.current.precip_mm,windSpeed:n.current.wind_kph,windDirection:n.current.wind_dir,uvIndex:n.current.uv,aqi:n.current.air_quality["us-epa-index"],humidity:n.current.humidity,sunriseTime:n.forecast.forecastday[0].astro.sunrise,sunsetTime:n.forecast.forecastday[0].astro.sunset,icon:n.current.condition.icon}),u(n.forecast.forecastday),document.querySelector(".slides").addEventListener("scrollend",l)}catch(t){alert(t)}})),document.getElementById("forecast-switch").addEventListener("click",(function(e){const i=document.getElementById("next-24"),o=document.getElementById("next-3");e.target===i?(i.classList.remove("opacity-50"),o.classList.add("opacity-50"),t=0,u(n.forecast.forecastday),document.querySelector(".slides").addEventListener("scrollend",l)):(o.classList.remove("opacity-50"),i.classList.add("opacity-50"),function(t){a();const e=document.getElementById("forecast");e.classList.add("flex-col"),t.forEach((t=>{const n=function({date:t,condition:e,icon:n,precipitation:a,uv:i,humidity:o,windSpeed:s,windDir:u,sunrise:c,sunset:l}){const d=document.createElement("div");return d.classList.add(..."forecast-card w-full flex flex-col bg-blue-200/50 rounded-2xl px-4 py-2 ease-in-out transition-all hover:bg-blue-500 cursor-pointer".split(" ")),d.innerHTML+=`\n      <div class="flex items-center">\n        <p class="font-bold">${j(new Date(t),"EEEE, d MMM")}</p>\n        <p class="ml-auto font-bold">${e}</p>\n        <img\n          src="${n}"\n          alt="condition icon"\n          class="condition-icon h-10 aspect-square"\n        />\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 24 24"\n          class="h-8 fill-zinc-50 transition-all ease-linear"\n        >\n          <path\n            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"\n          />\n        </svg>\n      </div>\n      <div\n        class="extra max-h-0 overflow-hidden flex flex-col ease-in-out transition-[max-height] md:grid md:grid-cols-2 md:gap-x-4"\n      >\n        <div class="flex items-center text-zinc-100 text-lg pb-1">\n          <p class="">Precipitation</p>\n          <p id="precipitation" class="ml-auto">${Math.floor(a)}%</p>\n        </div>\n        <div class="flex items-center gap-2 text-zinc-100 text-lg pb-1">\n          <p class="">Wind</p>\n          <p id="wind" class="ml-auto">${Math.floor(s)}kmh ${u}</p>\n        </div>\n        <div class="flex items-center text-zinc-100 text-lg pb-1">\n          <p class="">UV Index</p>\n          <p id="uv" class="ml-auto">${i}</p>\n        </div>\n        <div class="flex items-center text-zinc-100 text-lg pb-1">\n          <p class="">Humidity</p>\n          <p id="humidity" class="ml-auto">${Math.floor(o)}%</p>\n        </div>\n        <div class="flex items-center text-zinc-100 text-lg pb-1">\n          <p class="">Sunrise | Sunset</p>\n          <p id="sun" class="ml-auto">${r(c)} | ${r(l)}</p>\n        </div>\n      </div>\n    `,d}({date:t.date,condition:t.day.condition.text,icon:t.day.condition.icon,precipitation:t.day.daily_chance_of_rain,uv:t.day.uv,humidity:t.day.avghumidity,windSpeed:t.day.maxwind_kph,windDir:"",aqi:"",sunrise:t.astro.sunrise,sunset:t.astro.sunset});e.appendChild(n)}))}(n.forecast.forecastday),document.querySelectorAll(".forecast-card").forEach((t=>{t.addEventListener("click",c)})))})),document.getElementById("forecast").addEventListener("click",(function(t){"forecast-control-left"===t.target.id||"forecast-control-left"===t.target.parentNode.id?(s("left"),e="left"):"forecast-control-right"!==t.target.id&&"forecast-control-right"!==t.target.parentNode.id||(s("right"),e="right")})),A("Gunungpati").then((t=>{n=t,i({location:t.location,date:t.location.localtime.split(" ")[0],time:t.location.localtime.split(" ")[1],temp:t.current.temp_c,tempHigh:t.forecast.forecastday[0].day.maxtemp_c,tempLow:t.forecast.forecastday[0].day.mintemp_c,tempFeel:t.current.feelslike_c,precipitation:t.current.precip_mm,windSpeed:t.current.wind_kph,windDirection:t.current.wind_dir,uvIndex:t.current.uv,aqi:t.current.air_quality["us-epa-index"],humidity:t.current.humidity,sunriseTime:t.forecast.forecastday[0].astro.sunrise,sunsetTime:t.forecast.forecastday[0].astro.sunset,icon:t.current.condition.icon}),u(t.forecast.forecastday),document.querySelector(".slides").addEventListener("scrollend",l)})),document.querySelector("footer").querySelector("p").innerText=`${(new Date).getFullYear()} © Thoriq Farras`}()})();