webpackJsonp([8],{0:function(t,e,i){(function(t){"use strict";function e(t,e){return z[t]?z[t][e-1]||0:0}function n(t,i,n,s){for(var a=n,o=i+1;s>o;o++)a+=e(t,o);return a}function s(e){if("object"!=typeof e){var i=e;e=T.reduce(function(t,e){return t=e.id==i?e:t},null)}if(!e)throw new Error("preset was empty");g.empty();for(var n=e.minLevel;n<=e.maxLevel;n++)t("<option />").val(n).text(n).appendTo(g);for(b.empty(),n=e.minLevel;n<=e.maxLevel;n++)t("<option />").val(n).text(n).appendTo(b);var s=y.data("ionRangeSlider");M=!0,s.update({min:e.minLevel,max:e.maxLevel,step:.001,min_interval:1,from:e.minLevel,to:e.maxLevel}),M=!1,f.select2("val",e.id),m.val(e.rarityId),g.val(e.defaultCurrentLevel),v.val(e.defaultCurrentRemainExp),b.val(e.defaultTargetLevel),a(),c()}function a(){var t=m.val(),i=parseInt(g.val()),n=parseInt(b.val());i>n&&b.val(i);var s=e(t,i);v.trigger("touchspin.updatesettings",{min:s?1:0,max:s}),l()}function o(){l()}function r(){var t=m.val(),i=C.data("breeding_plan_id"),n=k.find(S,function(t){return t.id==i}),s=f.val(),a=k.find(T,function(t){return t.id==s});g.val([n.currentLevel]),v.val(e(t,n.currentLevel)),b.val([Math.min(n.targetLevel,a.maxLevel)]),l()}function l(){var t=m.val(),i=parseInt(g.val()),n=parseInt(v.val())||0,s=e(t,i),a=1+i-n/s,o=parseInt(b.val()),r=o,l=y.data("ionRangeSlider");M=!0,l.update({from:a,to:r}),M=!1}function h(){var t=m.val(),i=y.data("from"),n=parseInt(i),s=e(t,n),a=s-Math.floor(s*(i-n)),o=Math.floor(y.data("to"));g.val([n]),v.val(a),b.val([o]),v.trigger("touchspin.updatesettings",{min:0,max:s})}function c(){_&&clearTimeout(_),_=setTimeout(u,E)}function u(){var e=m.val(),i=parseInt(g.val()),s=parseInt(v.val())||0,a=parseInt(b.val()),o=n(e,i,s,a);x.text(o.toLocaleString());var r=A.val(),l=P.reduce(function(t,e){return t=e.id==r?e:t});if(!l)throw new Error("Experience unit does not have experience point.");var h=t('<tr><td class="unit"><span data-ph="unit"></span> セット</td><td class="exp"><span class="diff" data-ph="exp"></span></td></tr>');w.empty();for(var c=l.exp,u=o,p=10;p>0&&u>=0;u-=c,p--){var d=Math.ceil(u/c),f=c*d-o,y=0===f?"diff-eq":f>0?"diff-plus":"diff-minus",C=0===f?"0":(f>0?"+":"")+f.toLocaleString();h.clone().find('[data-ph="unit"]').text(d.toLocaleString()).end().find('[data-ph="exp"]').addClass(y).text(C).end().appendTo(w)}}function p(e){var i=k.find(T,function(t){return t.id==e.id});return t("<div />").append(t("<i />").addClass("icon icon-"+i.icon)).append(t("<span />").text(i.name)).html()}function d(e){f=e.find("select[name=preset_id]").select2({formatSelection:p,formatResult:p}).change(function(){s(t(this).val()),c()}),T.forEach(function(e){t("<option />").val(e.id).text(e.name).appendTo(f)}),x=e.find('[data-ph="total-required-exp"]'),w=e.find('[data-ph="required-exp-unit"]'),A=e.find("select[name=exp_unit_id]").change(function(){c()}),P.forEach(function(e){t("<option />").val(e.id).text(e.name).appendTo(A)}),m=e.find("input[name=rarity_id]"),g=e.find("select[name=current_level]").change(function(){a(),c()}),v=e.find("input[name=current_remain_exp]").click(function(){this.select()}).TouchSpin().change(function(){o(),c()}).keyup(function(){o(),c()}),b=e.find("select[name=target_level]").change(function(){l(),c()});var i;y=e.find("input[name=breeding_span]").ionRangeSlider({type:"double",grid:!0,prefix:"Lv ",prettify:function(t){return Math.floor(t)},decorate_both:!0,values_separator:" → ",onFinish:function(t){var e=Math.floor(t.to);setTimeout(function(){M=!0,i.update({to:e}),M=!1})}}).change(function(){M||(h(),c())}),i=y.data("ionRangeSlider"),C=e.find('[data-ph="breeding_plan_id"]').empty().on("click","button",function(e){e.preventDefault(),C.data("breeding_plan_id",t(e.target).val()),r(),c()}),S.forEach(function(e){t('<button type="button" class="btn btn-default btn-sm" />').text(e.name).val(e.id).appendTo(C)})}var f,m,g,v,b,y,x,w,A,C,_,k=i(29),D=i(30),T=i(31),P=i(32),S=i(33),I={presetId:3},M=!1,E=50,z=D.sort(function(t,e){return 1e3*(t.rarity-e.rarity)+(t.level-e.level)}).reduce(function(t,e){var i=t[e.rarity]||(t[e.rarity]=[]);return i.push(e.next),t},{});t(function(){d(t("#app")),s(I.presetId)})}).call(e,i(1))},29:function(t,e,i){var n,s;(function(){function i(t){function e(e,i,n,s,a,o){for(;a>=0&&o>a;a+=t){var r=s?s[a]:a;n=i(n,e[r],r,e)}return n}return function(i,n,s,a){n=C(n,a,4);var o=!I(i)&&A.keys(i),r=(o||i).length,l=t>0?0:r-1;return arguments.length<3&&(s=i[o?o[l]:l],l+=t),e(i,n,s,o,l,r)}}function a(t){return function(e,i,n){i=_(i,n);for(var s=S(e),a=t>0?0:s-1;a>=0&&s>a;a+=t)if(i(e[a],a,e))return a;return-1}}function o(t,e,i){return function(n,s,a){var o=0,r=S(n);if("number"==typeof a)t>0?o=a>=0?a:Math.max(a+r,o):r=a>=0?Math.min(a+1,r):a+r+1;else if(i&&a&&r)return a=i(n,s),n[a]===s?a:-1;if(s!==s)return a=e(f.call(n,o,r),A.isNaN),a>=0?a+o:-1;for(a=t>0?o:r-1;a>=0&&r>a;a+=t)if(n[a]===s)return a;return-1}}function r(t,e){var i=H.length,n=t.constructor,s=A.isFunction(n)&&n.prototype||u,a="constructor";for(A.has(t,a)&&!A.contains(e,a)&&e.push(a);i--;)a=H[i],a in t&&t[a]!==s[a]&&!A.contains(e,a)&&e.push(a)}var l=this,h=l._,c=Array.prototype,u=Object.prototype,p=Function.prototype,d=c.push,f=c.slice,m=u.toString,g=u.hasOwnProperty,v=Array.isArray,b=Object.keys,y=p.bind,x=Object.create,w=function(){},A=function(t){return t instanceof A?t:this instanceof A?void(this._wrapped=t):new A(t)};"undefined"!=typeof t&&t.exports&&(e=t.exports=A),e._=A,A.VERSION="1.8.3";var C=function(t,e,i){if(void 0===e)return t;switch(null==i?3:i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,s){return t.call(e,i,n,s)};case 4:return function(i,n,s,a){return t.call(e,i,n,s,a)}}return function(){return t.apply(e,arguments)}},_=function(t,e,i){return null==t?A.identity:A.isFunction(t)?C(t,e,i):A.isObject(t)?A.matcher(t):A.property(t)};A.iteratee=function(t,e){return _(t,e,1/0)};var k=function(t,e){return function(i){var n=arguments.length;if(2>n||null==i)return i;for(var s=1;n>s;s++)for(var a=arguments[s],o=t(a),r=o.length,l=0;r>l;l++){var h=o[l];e&&void 0!==i[h]||(i[h]=a[h])}return i}},D=function(t){if(!A.isObject(t))return{};if(x)return x(t);w.prototype=t;var e=new w;return w.prototype=null,e},T=function(t){return function(e){return null==e?void 0:e[t]}},P=Math.pow(2,53)-1,S=T("length"),I=function(t){var e=S(t);return"number"==typeof e&&e>=0&&P>=e};A.each=A.forEach=function(t,e,i){e=C(e,i);var n,s;if(I(t))for(n=0,s=t.length;s>n;n++)e(t[n],n,t);else{var a=A.keys(t);for(n=0,s=a.length;s>n;n++)e(t[a[n]],a[n],t)}return t},A.map=A.collect=function(t,e,i){e=_(e,i);for(var n=!I(t)&&A.keys(t),s=(n||t).length,a=Array(s),o=0;s>o;o++){var r=n?n[o]:o;a[o]=e(t[r],r,t)}return a},A.reduce=A.foldl=A.inject=i(1),A.reduceRight=A.foldr=i(-1),A.find=A.detect=function(t,e,i){var n;return n=I(t)?A.findIndex(t,e,i):A.findKey(t,e,i),void 0!==n&&-1!==n?t[n]:void 0},A.filter=A.select=function(t,e,i){var n=[];return e=_(e,i),A.each(t,function(t,i,s){e(t,i,s)&&n.push(t)}),n},A.reject=function(t,e,i){return A.filter(t,A.negate(_(e)),i)},A.every=A.all=function(t,e,i){e=_(e,i);for(var n=!I(t)&&A.keys(t),s=(n||t).length,a=0;s>a;a++){var o=n?n[a]:a;if(!e(t[o],o,t))return!1}return!0},A.some=A.any=function(t,e,i){e=_(e,i);for(var n=!I(t)&&A.keys(t),s=(n||t).length,a=0;s>a;a++){var o=n?n[a]:a;if(e(t[o],o,t))return!0}return!1},A.contains=A.includes=A.include=function(t,e,i,n){return I(t)||(t=A.values(t)),("number"!=typeof i||n)&&(i=0),A.indexOf(t,e,i)>=0},A.invoke=function(t,e){var i=f.call(arguments,2),n=A.isFunction(e);return A.map(t,function(t){var s=n?e:t[e];return null==s?s:s.apply(t,i)})},A.pluck=function(t,e){return A.map(t,A.property(e))},A.where=function(t,e){return A.filter(t,A.matcher(e))},A.findWhere=function(t,e){return A.find(t,A.matcher(e))},A.max=function(t,e,i){var n,s,a=-(1/0),o=-(1/0);if(null==e&&null!=t){t=I(t)?t:A.values(t);for(var r=0,l=t.length;l>r;r++)n=t[r],n>a&&(a=n)}else e=_(e,i),A.each(t,function(t,i,n){s=e(t,i,n),(s>o||s===-(1/0)&&a===-(1/0))&&(a=t,o=s)});return a},A.min=function(t,e,i){var n,s,a=1/0,o=1/0;if(null==e&&null!=t){t=I(t)?t:A.values(t);for(var r=0,l=t.length;l>r;r++)n=t[r],a>n&&(a=n)}else e=_(e,i),A.each(t,function(t,i,n){s=e(t,i,n),(o>s||s===1/0&&a===1/0)&&(a=t,o=s)});return a},A.shuffle=function(t){for(var e,i=I(t)?t:A.values(t),n=i.length,s=Array(n),a=0;n>a;a++)e=A.random(0,a),e!==a&&(s[a]=s[e]),s[e]=i[a];return s},A.sample=function(t,e,i){return null==e||i?(I(t)||(t=A.values(t)),t[A.random(t.length-1)]):A.shuffle(t).slice(0,Math.max(0,e))},A.sortBy=function(t,e,i){return e=_(e,i),A.pluck(A.map(t,function(t,i,n){return{value:t,index:i,criteria:e(t,i,n)}}).sort(function(t,e){var i=t.criteria,n=e.criteria;if(i!==n){if(i>n||void 0===i)return 1;if(n>i||void 0===n)return-1}return t.index-e.index}),"value")};var M=function(t){return function(e,i,n){var s={};return i=_(i,n),A.each(e,function(n,a){var o=i(n,a,e);t(s,n,o)}),s}};A.groupBy=M(function(t,e,i){A.has(t,i)?t[i].push(e):t[i]=[e]}),A.indexBy=M(function(t,e,i){t[i]=e}),A.countBy=M(function(t,e,i){A.has(t,i)?t[i]++:t[i]=1}),A.toArray=function(t){return t?A.isArray(t)?f.call(t):I(t)?A.map(t,A.identity):A.values(t):[]},A.size=function(t){return null==t?0:I(t)?t.length:A.keys(t).length},A.partition=function(t,e,i){e=_(e,i);var n=[],s=[];return A.each(t,function(t,i,a){(e(t,i,a)?n:s).push(t)}),[n,s]},A.first=A.head=A.take=function(t,e,i){return null==t?void 0:null==e||i?t[0]:A.initial(t,t.length-e)},A.initial=function(t,e,i){return f.call(t,0,Math.max(0,t.length-(null==e||i?1:e)))},A.last=function(t,e,i){return null==t?void 0:null==e||i?t[t.length-1]:A.rest(t,Math.max(0,t.length-e))},A.rest=A.tail=A.drop=function(t,e,i){return f.call(t,null==e||i?1:e)},A.compact=function(t){return A.filter(t,A.identity)};var E=function(t,e,i,n){for(var s=[],a=0,o=n||0,r=S(t);r>o;o++){var l=t[o];if(I(l)&&(A.isArray(l)||A.isArguments(l))){e||(l=E(l,e,i));var h=0,c=l.length;for(s.length+=c;c>h;)s[a++]=l[h++]}else i||(s[a++]=l)}return s};A.flatten=function(t,e){return E(t,e,!1)},A.without=function(t){return A.difference(t,f.call(arguments,1))},A.uniq=A.unique=function(t,e,i,n){A.isBoolean(e)||(n=i,i=e,e=!1),null!=i&&(i=_(i,n));for(var s=[],a=[],o=0,r=S(t);r>o;o++){var l=t[o],h=i?i(l,o,t):l;e?(o&&a===h||s.push(l),a=h):i?A.contains(a,h)||(a.push(h),s.push(l)):A.contains(s,l)||s.push(l)}return s},A.union=function(){return A.uniq(E(arguments,!0,!0))},A.intersection=function(t){for(var e=[],i=arguments.length,n=0,s=S(t);s>n;n++){var a=t[n];if(!A.contains(e,a)){for(var o=1;i>o&&A.contains(arguments[o],a);o++);o===i&&e.push(a)}}return e},A.difference=function(t){var e=E(arguments,!0,!0,1);return A.filter(t,function(t){return!A.contains(e,t)})},A.zip=function(){return A.unzip(arguments)},A.unzip=function(t){for(var e=t&&A.max(t,S).length||0,i=Array(e),n=0;e>n;n++)i[n]=A.pluck(t,n);return i},A.object=function(t,e){for(var i={},n=0,s=S(t);s>n;n++)e?i[t[n]]=e[n]:i[t[n][0]]=t[n][1];return i},A.findIndex=a(1),A.findLastIndex=a(-1),A.sortedIndex=function(t,e,i,n){i=_(i,n,1);for(var s=i(e),a=0,o=S(t);o>a;){var r=Math.floor((a+o)/2);i(t[r])<s?a=r+1:o=r}return a},A.indexOf=o(1,A.findIndex,A.sortedIndex),A.lastIndexOf=o(-1,A.findLastIndex),A.range=function(t,e,i){null==e&&(e=t||0,t=0),i=i||1;for(var n=Math.max(Math.ceil((e-t)/i),0),s=Array(n),a=0;n>a;a++,t+=i)s[a]=t;return s};var z=function(t,e,i,n,s){if(!(n instanceof e))return t.apply(i,s);var a=D(t.prototype),o=t.apply(a,s);return A.isObject(o)?o:a};A.bind=function(t,e){if(y&&t.bind===y)return y.apply(t,f.call(arguments,1));if(!A.isFunction(t))throw new TypeError("Bind must be called on a function");var i=f.call(arguments,2),n=function(){return z(t,n,e,this,i.concat(f.call(arguments)))};return n},A.partial=function(t){var e=f.call(arguments,1),i=function(){for(var n=0,s=e.length,a=Array(s),o=0;s>o;o++)a[o]=e[o]===A?arguments[n++]:e[o];for(;n<arguments.length;)a.push(arguments[n++]);return z(t,i,this,this,a)};return i},A.bindAll=function(t){var e,i,n=arguments.length;if(1>=n)throw new Error("bindAll must be passed function names");for(e=1;n>e;e++)i=arguments[e],t[i]=A.bind(t[i],t);return t},A.memoize=function(t,e){var i=function(n){var s=i.cache,a=""+(e?e.apply(this,arguments):n);return A.has(s,a)||(s[a]=t.apply(this,arguments)),s[a]};return i.cache={},i},A.delay=function(t,e){var i=f.call(arguments,2);return setTimeout(function(){return t.apply(null,i)},e)},A.defer=A.partial(A.delay,A,1),A.throttle=function(t,e,i){var n,s,a,o=null,r=0;i||(i={});var l=function(){r=i.leading===!1?0:A.now(),o=null,a=t.apply(n,s),o||(n=s=null)};return function(){var h=A.now();r||i.leading!==!1||(r=h);var c=e-(h-r);return n=this,s=arguments,0>=c||c>e?(o&&(clearTimeout(o),o=null),r=h,a=t.apply(n,s),o||(n=s=null)):o||i.trailing===!1||(o=setTimeout(l,c)),a}},A.debounce=function(t,e,i){var n,s,a,o,r,l=function(){var h=A.now()-o;e>h&&h>=0?n=setTimeout(l,e-h):(n=null,i||(r=t.apply(a,s),n||(a=s=null)))};return function(){a=this,s=arguments,o=A.now();var h=i&&!n;return n||(n=setTimeout(l,e)),h&&(r=t.apply(a,s),a=s=null),r}},A.wrap=function(t,e){return A.partial(e,t)},A.negate=function(t){return function(){return!t.apply(this,arguments)}},A.compose=function(){var t=arguments,e=t.length-1;return function(){for(var i=e,n=t[e].apply(this,arguments);i--;)n=t[i].call(this,n);return n}},A.after=function(t,e){return function(){return--t<1?e.apply(this,arguments):void 0}},A.before=function(t,e){var i;return function(){return--t>0&&(i=e.apply(this,arguments)),1>=t&&(e=null),i}},A.once=A.partial(A.before,2);var N=!{toString:null}.propertyIsEnumerable("toString"),H=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];A.keys=function(t){if(!A.isObject(t))return[];if(b)return b(t);var e=[];for(var i in t)A.has(t,i)&&e.push(i);return N&&r(t,e),e},A.allKeys=function(t){if(!A.isObject(t))return[];var e=[];for(var i in t)e.push(i);return N&&r(t,e),e},A.values=function(t){for(var e=A.keys(t),i=e.length,n=Array(i),s=0;i>s;s++)n[s]=t[e[s]];return n},A.mapObject=function(t,e,i){e=_(e,i);for(var n,s=A.keys(t),a=s.length,o={},r=0;a>r;r++)n=s[r],o[n]=e(t[n],n,t);return o},A.pairs=function(t){for(var e=A.keys(t),i=e.length,n=Array(i),s=0;i>s;s++)n[s]=[e[s],t[e[s]]];return n},A.invert=function(t){for(var e={},i=A.keys(t),n=0,s=i.length;s>n;n++)e[t[i[n]]]=i[n];return e},A.functions=A.methods=function(t){var e=[];for(var i in t)A.isFunction(t[i])&&e.push(i);return e.sort()},A.extend=k(A.allKeys),A.extendOwn=A.assign=k(A.keys),A.findKey=function(t,e,i){e=_(e,i);for(var n,s=A.keys(t),a=0,o=s.length;o>a;a++)if(n=s[a],e(t[n],n,t))return n},A.pick=function(t,e,i){var n,s,a={},o=t;if(null==o)return a;A.isFunction(e)?(s=A.allKeys(o),n=C(e,i)):(s=E(arguments,!1,!1,1),n=function(t,e,i){return e in i},o=Object(o));for(var r=0,l=s.length;l>r;r++){var h=s[r],c=o[h];n(c,h,o)&&(a[h]=c)}return a},A.omit=function(t,e,i){if(A.isFunction(e))e=A.negate(e);else{var n=A.map(E(arguments,!1,!1,1),String);e=function(t,e){return!A.contains(n,e)}}return A.pick(t,e,i)},A.defaults=k(A.allKeys,!0),A.create=function(t,e){var i=D(t);return e&&A.extendOwn(i,e),i},A.clone=function(t){return A.isObject(t)?A.isArray(t)?t.slice():A.extend({},t):t},A.tap=function(t,e){return e(t),t},A.isMatch=function(t,e){var i=A.keys(e),n=i.length;if(null==t)return!n;for(var s=Object(t),a=0;n>a;a++){var o=i[a];if(e[o]!==s[o]||!(o in s))return!1}return!0};var O=function(t,e,i,n){if(t===e)return 0!==t||1/t===1/e;if(null==t||null==e)return t===e;t instanceof A&&(t=t._wrapped),e instanceof A&&(e=e._wrapped);var s=m.call(t);if(s!==m.call(e))return!1;switch(s){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!==+t?+e!==+e:0===+t?1/+t===1/e:+t===+e;case"[object Date]":case"[object Boolean]":return+t===+e}var a="[object Array]"===s;if(!a){if("object"!=typeof t||"object"!=typeof e)return!1;var o=t.constructor,r=e.constructor;if(o!==r&&!(A.isFunction(o)&&o instanceof o&&A.isFunction(r)&&r instanceof r)&&"constructor"in t&&"constructor"in e)return!1}i=i||[],n=n||[];for(var l=i.length;l--;)if(i[l]===t)return n[l]===e;if(i.push(t),n.push(e),a){if(l=t.length,l!==e.length)return!1;for(;l--;)if(!O(t[l],e[l],i,n))return!1}else{var h,c=A.keys(t);if(l=c.length,A.keys(e).length!==l)return!1;for(;l--;)if(h=c[l],!A.has(e,h)||!O(t[h],e[h],i,n))return!1}return i.pop(),n.pop(),!0};A.isEqual=function(t,e){return O(t,e)},A.isEmpty=function(t){return null==t?!0:I(t)&&(A.isArray(t)||A.isString(t)||A.isArguments(t))?0===t.length:0===A.keys(t).length},A.isElement=function(t){return!(!t||1!==t.nodeType)},A.isArray=v||function(t){return"[object Array]"===m.call(t)},A.isObject=function(t){var e=typeof t;return"function"===e||"object"===e&&!!t},A.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(t){A["is"+t]=function(e){return m.call(e)==="[object "+t+"]"}}),A.isArguments(arguments)||(A.isArguments=function(t){return A.has(t,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(A.isFunction=function(t){return"function"==typeof t||!1}),A.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},A.isNaN=function(t){return A.isNumber(t)&&t!==+t},A.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"===m.call(t)},A.isNull=function(t){return null===t},A.isUndefined=function(t){return void 0===t},A.has=function(t,e){return null!=t&&g.call(t,e)},A.noConflict=function(){return l._=h,this},A.identity=function(t){return t},A.constant=function(t){return function(){return t}},A.noop=function(){},A.property=T,A.propertyOf=function(t){return null==t?function(){}:function(e){return t[e]}},A.matcher=A.matches=function(t){return t=A.extendOwn({},t),function(e){return A.isMatch(e,t)}},A.times=function(t,e,i){var n=Array(Math.max(0,t));e=C(e,i,1);for(var s=0;t>s;s++)n[s]=e(s);return n},A.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},A.now=Date.now||function(){return(new Date).getTime()};var F={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},L=A.invert(F),j=function(t){var e=function(e){return t[e]},i="(?:"+A.keys(t).join("|")+")",n=RegExp(i),s=RegExp(i,"g");return function(t){return t=null==t?"":""+t,n.test(t)?t.replace(s,e):t}};A.escape=j(F),A.unescape=j(L),A.result=function(t,e,i){var n=null==t?void 0:t[e];return void 0===n&&(n=i),A.isFunction(n)?n.call(t):n};var B=0;A.uniqueId=function(t){var e=++B+"";return t?t+e:e},A.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var W=/(.)^/,R={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},q=/\\|'|\r|\n|\u2028|\u2029/g,X=function(t){return"\\"+R[t]};A.template=function(t,e,i){!e&&i&&(e=i),e=A.defaults({},e,A.templateSettings);var n=RegExp([(e.escape||W).source,(e.interpolate||W).source,(e.evaluate||W).source].join("|")+"|$","g"),s=0,a="__p+='";t.replace(n,function(e,i,n,o,r){return a+=t.slice(s,r).replace(q,X),s=r+e.length,i?a+="'+\n((__t=("+i+"))==null?'':_.escape(__t))+\n'":n?a+="'+\n((__t=("+n+"))==null?'':__t)+\n'":o&&(a+="';\n"+o+"\n__p+='"),e}),a+="';\n",e.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{var o=new Function(e.variable||"obj","_",a)}catch(r){throw r.source=a,r}var l=function(t){return o.call(this,t,A)},h=e.variable||"obj";return l.source="function("+h+"){\n"+a+"}",l},A.chain=function(t){var e=A(t);return e._chain=!0,e};var U=function(t,e){return t._chain?A(e).chain():e};A.mixin=function(t){A.each(A.functions(t),function(e){var i=A[e]=t[e];A.prototype[e]=function(){var t=[this._wrapped];return d.apply(t,arguments),U(this,i.apply(A,t))}})},A.mixin(A),A.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=c[t];A.prototype[t]=function(){var i=this._wrapped;return e.apply(i,arguments),"shift"!==t&&"splice"!==t||0!==i.length||delete i[0],U(this,i)}}),A.each(["concat","join","slice"],function(t){var e=c[t];A.prototype[t]=function(){return U(this,e.apply(this._wrapped,arguments))}}),A.prototype.value=function(){return this._wrapped},A.prototype.valueOf=A.prototype.toJSON=A.prototype.value,A.prototype.toString=function(){return""+this._wrapped},n=[],s=function(){return A}.apply(e,n),!(void 0!==s&&(t.exports=s))}).call(this)},30:function(t,e,i){t.exports=[{rarity:1,level:1,next:32},{rarity:1,level:2,next:33},{rarity:1,level:3,next:35},{rarity:1,level:4,next:35},{rarity:1,level:5,next:37},{rarity:1,level:6,next:39},{rarity:1,level:7,next:39},{rarity:1,level:8,next:41},{rarity:1,level:9,next:42},{rarity:1,level:10,next:85},{rarity:1,level:11,next:88},{rarity:1,level:12,next:92},{rarity:1,level:13,next:95},{rarity:1,level:14,next:98},{rarity:1,level:15,next:102},{rarity:1,level:16,next:105},{rarity:1,level:17,next:108},{rarity:1,level:18,next:112},{rarity:1,level:19,next:115},{rarity:1,level:20,next:170},{rarity:1,level:21,next:176},{rarity:1,level:22,next:183},{rarity:1,level:23,next:190},{rarity:1,level:24,next:197},{rarity:1,level:25,next:203},{rarity:1,level:26,next:210},{rarity:1,level:27,next:217},{rarity:1,level:28,next:224},{rarity:1,level:29,next:230},{rarity:1,level:30,next:0},{rarity:2,level:1,next:35},{rarity:2,level:2,next:37},{rarity:2,level:3,next:38},{rarity:2,level:4,next:39},{rarity:2,level:5,next:40},{rarity:2,level:6,next:43},{rarity:2,level:7,next:43},{rarity:2,level:8,next:45},{rarity:2,level:9,next:46},{rarity:2,level:10,next:94},{rarity:2,level:11,next:97},{rarity:2,level:12,next:101},{rarity:2,level:13,next:104},{rarity:2,level:14,next:108},{rarity:2,level:15,next:112},{rarity:2,level:16,next:116},{rarity:2,level:17,next:119},{rarity:2,level:18,next:123},{rarity:2,level:19,next:126},{rarity:2,level:20,next:187},{rarity:2,level:21,next:194},{rarity:2,level:22,next:201},{rarity:2,level:23,next:209},{rarity:2,level:24,next:217},{rarity:2,level:25,next:223},{rarity:2,level:26,next:231},{rarity:2,level:27,next:239},{rarity:2,level:28,next:246},{rarity:2,level:29,next:253},{rarity:2,level:30,next:312},{rarity:2,level:31,next:323},{rarity:2,level:32,next:336},{rarity:2,level:33,next:347},{rarity:2,level:34,next:361},{rarity:2,level:35,next:373},{rarity:2,level:36,next:385},{rarity:2,level:37,next:398},{rarity:2,level:38,next:409},{rarity:2,level:39,next:424},{rarity:2,level:40,next:0},{rarity:3,level:1,next:38},{rarity:3,level:2,next:40},{rarity:3,level:3,next:42},{rarity:3,level:4,next:42},{rarity:3,level:5,next:44},{rarity:3,level:6,next:47},{rarity:3,level:7,next:47},{rarity:3,level:8,next:49},{rarity:3,level:9,next:51},{rarity:3,level:10,next:102},{rarity:3,level:11,next:105},{rarity:3,level:12,next:111},{rarity:3,level:13,next:114},{rarity:3,level:14,next:117},{rarity:3,level:15,next:123},{rarity:3,level:16,next:126},{rarity:3,level:17,next:129},{rarity:3,level:18,next:135},{rarity:3,level:19,next:138},{rarity:3,level:20,next:204},{rarity:3,level:21,next:211},{rarity:3,level:22,next:219},{rarity:3,level:23,next:228},{rarity:3,level:24,next:237},{rarity:3,level:25,next:243},{rarity:3,level:26,next:252},{rarity:3,level:27,next:261},{rarity:3,level:28,next:269},{rarity:3,level:29,next:276},{rarity:3,level:30,next:339},{rarity:3,level:31,next:353},{rarity:3,level:32,next:366},{rarity:3,level:33,next:379},{rarity:3,level:34,next:394},{rarity:3,level:35,next:407},{rarity:3,level:36,next:420},{rarity:3,level:37,next:434},{rarity:3,level:38,next:446},{rarity:3,level:39,next:462},{rarity:3,level:40,next:678},{rarity:3,level:41,next:705},{rarity:3,level:42,next:732},{rarity:3,level:43,next:759},{rarity:3,level:44,next:788},{rarity:3,level:45,next:812},{rarity:3,level:46,next:841},{rarity:3,level:47,next:868},{rarity:3,level:48,next:895},{rarity:3,level:49,next:922},{rarity:3,level:50,next:0},{rarity:4,level:1,next:42},{rarity:4,level:2,next:43},{rarity:4,level:3,next:45},{rarity:4,level:4,next:46},{rarity:4,level:5,next:48},{rarity:4,level:6,next:50},{rarity:4,level:7,next:51},{rarity:4,level:8,next:53},{rarity:4,level:9,next:55},{rarity:4,level:10,next:110},{rarity:4,level:11,next:115},{rarity:4,level:12,next:119},{rarity:4,level:13,next:124},{rarity:4,level:14,next:127},{rarity:4,level:15,next:133},{rarity:4,level:16,next:136},{rarity:4,level:17,next:141},{rarity:4,level:18,next:145},{rarity:4,level:19,next:150},{rarity:4,level:20,next:221},{rarity:4,level:21,next:229},{rarity:4,level:22,next:238},{rarity:4,level:23,next:247},{rarity:4,level:24,next:256},{rarity:4,level:25,next:264},{rarity:4,level:26,next:273},{rarity:4,level:27,next:282},{rarity:4,level:28,next:291},{rarity:4,level:29,next:299},{rarity:4,level:30,next:368},{rarity:4,level:31,next:382},{rarity:4,level:32,next:397},{rarity:4,level:33,next:410},{rarity:4,level:34,next:427},{rarity:4,level:35,next:440},{rarity:4,level:36,next:455},{rarity:4,level:37,next:471},{rarity:4,level:38,next:484},{rarity:4,level:39,next:500},{rarity:4,level:40,next:735},{rarity:4,level:41,next:763},{rarity:4,level:42,next:793},{rarity:4,level:43,next:823},{rarity:4,level:44,next:852},{rarity:4,level:45,next:881},{rarity:4,level:46,next:911},{rarity:4,level:47,next:940},{rarity:4,level:48,next:970},{rarity:4,level:49,next:998},{rarity:4,level:50,next:1102},{rarity:4,level:51,next:1146},{rarity:4,level:52,next:1189},{rarity:4,level:53,next:1235},{rarity:4,level:54,next:1278},{rarity:4,level:55,next:1322},{rarity:4,level:56,next:1365},{rarity:4,level:57,next:1411},{rarity:4,level:58,next:1454},{rarity:4,level:59,next:1498},{rarity:4,level:60,next:1469},{rarity:4,level:61,next:1527},{rarity:4,level:62,next:1588},{rarity:4,level:63,next:1644},{rarity:4,level:64,next:1705},{rarity:4,level:65,next:1762},{rarity:4,level:66,next:1822},{rarity:4,level:67,next:1879},{rarity:4,level:68,next:1940},{rarity:4,level:69,next:1998},{rarity:4,level:70,next:1836},{rarity:4,level:71,next:1909},{rarity:4,level:72,next:1983},{rarity:4,level:73,next:2057},{rarity:4,level:74,next:2130},{rarity:4,level:75,next:2204},{rarity:4,level:76,next:2276},{rarity:4,level:77,next:2350},{rarity:4,level:78,next:2424},{rarity:4,level:79,next:2497},{rarity:4,level:80,next:0},{rarity:5,level:1,next:45},{rarity:5,level:2,next:46},{rarity:5,level:3,next:49},{rarity:5,level:4,next:49},{rarity:5,level:5,next:52},{rarity:5,level:6,next:54},{rarity:5,level:7,next:55},{rarity:5,level:8,next:57},{rarity:5,level:9,next:59},{rarity:5,level:10,next:119},{rarity:5,level:11,next:123},{rarity:5,level:12,next:129},{rarity:5,level:13,next:133},{rarity:5,level:14,next:137},{rarity:5,level:15,next:143},{rarity:5,level:16,next:147},{rarity:5,level:17,next:151},{rarity:5,level:18,next:157},{rarity:5,level:19,next:161},{rarity:5,level:20,next:238},{rarity:5,level:21,next:247},{rarity:5,level:22,next:256},{rarity:5,level:23,next:266},{rarity:5,level:24,next:276},{rarity:5,level:25,next:284},{rarity:5,level:26,next:294},{rarity:5,level:27,next:304},{rarity:5,level:28,next:313},{rarity:5,level:29,next:322},{rarity:5,level:30,next:396},{rarity:5,level:31,next:412},{rarity:5,level:32,next:427},{rarity:5,level:33,next:442},{rarity:5,level:34,next:460},{rarity:5,level:35,next:474},{rarity:5,level:36,next:490},{rarity:5,level:37,next:507},{rarity:5,level:38,next:521},{rarity:5,level:39,next:539},{rarity:5,level:40,next:791},{rarity:5,level:41,next:822},{rarity:5,level:42,next:854},{rarity:5,level:43,next:886},{rarity:5,level:44,next:918},{rarity:5,level:45,next:948},{rarity:5,level:46,next:981},{rarity:5,level:47,next:1013},{rarity:5,level:48,next:1044},{rarity:5,level:49,next:1075},{rarity:5,level:50,next:1187},{rarity:5,level:51,next:1234},{rarity:5,level:52,next:1281},{rarity:5,level:53,next:1330},{rarity:5,level:54,next:1376},{rarity:5,level:55,next:1424},{rarity:5,level:56,next:1470},{rarity:5,level:57,next:1519},{rarity:5,level:58,next:1566},{rarity:5,level:59,next:1613},{rarity:5,level:60,next:1582},{rarity:5,level:61,next:1645},{rarity:5,level:62,next:1710},{rarity:5,level:63,next:1771},{rarity:5,level:64,next:1835},{rarity:5,level:65,next:1898},{rarity:5,level:66,next:1962},{rarity:5,level:67,next:2024},{rarity:5,level:68,next:2089},{rarity:5,level:69,next:2152},{rarity:5,level:70,next:1977},{rarity:5,level:71,next:2056},{rarity:5,level:72,next:2135},{rarity:5,level:73,next:2215},{rarity:5,level:74,next:2295},{rarity:5,level:75,next:2373},{rarity:5,level:76,next:2451},{rarity:5,level:77,next:2531},{rarity:5,level:78,next:2610},{rarity:5,level:79,next:2689},{rarity:5,level:80,next:2769},{rarity:5,level:81,next:2879},{rarity:5,level:82,next:2990},{rarity:5,level:83,next:3101},{rarity:5,level:84,next:3210},{rarity:5,level:85,next:3323},{rarity:5,level:86,next:3432},{rarity:5,level:87,next:3544},{rarity:5,level:88,next:3654},{rarity:5,level:89,next:3766},{rarity:5,level:90,next:0},{rarity:6,level:1,next:48},{rarity:6,level:2,next:50},{rarity:6,level:3,next:52},{rarity:6,level:4,next:53},{rarity:6,level:5,next:55},{rarity:6,level:6,next:59},{rarity:6,level:7,next:58},{rarity:6,level:8,next:62},{rarity:6,level:9,next:63},{rarity:6,level:10,next:127},{rarity:6,level:11,next:132},{rarity:6,level:12,next:138},{rarity:6,level:13,next:143},{rarity:6,level:14,next:147},{rarity:6,level:15,next:153},{rarity:6,level:16,next:157},{rarity:6,level:17,next:162},{rarity:6,level:18,next:168},{rarity:6,level:19,next:173},{rarity:6,level:20,next:255},{rarity:6,level:21,next:264},{rarity:6,level:22,next:274},{rarity:6,level:23,next:285},{rarity:6,level:24,next:296},{rarity:6,level:25,next:304},{rarity:6,level:26,next:315},{rarity:6,level:27,next:326},{rarity:6,level:28,next:336},{rarity:6,level:29,next:345},{rarity:6,level:30,next:424},{rarity:6,level:31,next:441},{rarity:6,level:32,next:458},{rarity:6,level:33,next:474},{rarity:6,level:34,next:492},{rarity:6,level:35,next:508},{rarity:6,level:36,next:525},{rarity:6,level:37,next:543},{rarity:6,level:38,next:558},{rarity:6,level:39,next:578},{rarity:6,level:40,next:847},{rarity:6,level:41,next:881},{rarity:6,level:42,next:915},{rarity:6,level:43,next:949},{rarity:6,level:44,next:984},{rarity:6,level:45,next:1016},{rarity:6,level:46,next:1051},{rarity:6,level:47,next:1085},{rarity:6,level:48,next:1119},{rarity:6,level:49,next:1152},{rarity:6,level:50,next:1272},{rarity:6,level:51,next:1321},{rarity:6,level:52,next:1373},{rarity:6,level:53,next:1425},{rarity:6,level:54,next:1474},{rarity:6,level:55,next:1526},{rarity:6,level:56,next:1575},{rarity:6,level:57,next:1627},{rarity:6,level:58,next:1679},{rarity:6,level:59,next:1728},{rarity:6,level:60,next:1695},{rarity:6,level:61,next:1762},{rarity:6,level:62,next:1832},{rarity:6,level:63,next:1897},{rarity:6,level:64,next:1967},{rarity:6,level:65,next:2034},{rarity:6,level:66,next:2101},{rarity:6,level:67,next:2169},{rarity:6,level:68,next:2238},{rarity:6,level:69,next:2306},{rarity:6,level:70,next:2118},{rarity:6,level:71,next:2203},{rarity:6,level:72,next:2288},{rarity:6,level:73,next:2373},{rarity:6,level:74,next:2458},{rarity:6,level:75,next:2543},{rarity:6,level:76,next:2626},{rarity:6,level:77,next:2712},{rarity:6,level:78,next:2796},{rarity:6,level:79,next:2882},{rarity:6,level:80,next:2967},{rarity:6,level:81,next:3084},{rarity:6,level:82,next:3204},{rarity:6,level:83,next:3322},{rarity:6,level:84,next:3440},{rarity:6,level:85,next:3559},{rarity:6,level:86,next:3678},{rarity:6,level:87,next:3797},{rarity:6,level:88,next:3915},{rarity:6,level:89,next:4035},{rarity:6,level:90,next:2965},{rarity:6,level:91,next:3086},{rarity:6,level:92,next:3202},{rarity:6,level:93,next:3323},{rarity:6,level:94,next:3441},{rarity:6,level:95,next:3559},{rarity:6,level:96,next:3677},{rarity:6,level:97,next:3798},{rarity:6,level:98,next:3915},{rarity:6,level:99,next:0},{rarity:7,level:1,next:45},{rarity:7,level:2,next:46},{rarity:7,level:3,next:49},{rarity:7,level:4,next:49},{rarity:7,level:5,next:52},{rarity:7,level:6,next:54},{rarity:7,level:7,next:55},{rarity:7,level:8,next:57},{rarity:7,level:9,next:59},{rarity:7,level:10,next:119},{rarity:7,level:11,next:123},{rarity:7,level:12,next:129},{rarity:7,level:13,next:133},{rarity:7,level:14,next:137},{rarity:7,
level:15,next:143},{rarity:7,level:16,next:147},{rarity:7,level:17,next:151},{rarity:7,level:18,next:157},{rarity:7,level:19,next:161},{rarity:7,level:20,next:238},{rarity:7,level:21,next:247},{rarity:7,level:22,next:256},{rarity:7,level:23,next:266},{rarity:7,level:24,next:276},{rarity:7,level:25,next:284},{rarity:7,level:26,next:294},{rarity:7,level:27,next:304},{rarity:7,level:28,next:313},{rarity:7,level:29,next:322},{rarity:7,level:30,next:396},{rarity:7,level:31,next:412},{rarity:7,level:32,next:427},{rarity:7,level:33,next:442},{rarity:7,level:34,next:460},{rarity:7,level:35,next:474},{rarity:7,level:36,next:490},{rarity:7,level:37,next:507},{rarity:7,level:38,next:521},{rarity:7,level:39,next:539},{rarity:7,level:40,next:791},{rarity:7,level:41,next:822},{rarity:7,level:42,next:854},{rarity:7,level:43,next:886},{rarity:7,level:44,next:918},{rarity:7,level:45,next:948},{rarity:7,level:46,next:981},{rarity:7,level:47,next:1013},{rarity:7,level:48,next:1044},{rarity:7,level:49,next:1075},{rarity:7,level:50,next:1187},{rarity:7,level:51,next:1234},{rarity:7,level:52,next:1281},{rarity:7,level:53,next:1330},{rarity:7,level:54,next:1376},{rarity:7,level:55,next:1424},{rarity:7,level:56,next:1470},{rarity:7,level:57,next:1519},{rarity:7,level:58,next:1566},{rarity:7,level:59,next:1613},{rarity:7,level:60,next:1582},{rarity:7,level:61,next:1645},{rarity:7,level:62,next:1710},{rarity:7,level:63,next:1771},{rarity:7,level:64,next:1835},{rarity:7,level:65,next:1898},{rarity:7,level:66,next:1962},{rarity:7,level:67,next:2024},{rarity:7,level:68,next:2089},{rarity:7,level:69,next:2152},{rarity:7,level:70,next:1977},{rarity:7,level:71,next:2056},{rarity:7,level:72,next:2135},{rarity:7,level:73,next:2215},{rarity:7,level:74,next:2295},{rarity:7,level:75,next:2373},{rarity:7,level:76,next:2451},{rarity:7,level:77,next:2531},{rarity:7,level:78,next:2610},{rarity:7,level:79,next:2689},{rarity:7,level:80,next:2769},{rarity:7,level:81,next:2879},{rarity:7,level:82,next:2990},{rarity:7,level:83,next:3101},{rarity:7,level:84,next:3210},{rarity:7,level:85,next:0}]},31:function(t,e,i){t.exports=[{id:1,name:"アイロン",rarityId:1,minLevel:1,maxLevel:30,defaultCurrentLevel:1,defaultCurrentRemainExp:32,defaultTargetLevel:30,icon:"iron-sprit"},{id:2,name:"ブロンズ",rarityId:2,minLevel:1,maxLevel:40,defaultCurrentLevel:1,defaultCurrentRemainExp:35,defaultTargetLevel:40,icon:"bronze-sprit"},{id:3,name:"シルバー",rarityId:3,minLevel:1,maxLevel:50,defaultCurrentLevel:1,defaultCurrentRemainExp:38,defaultTargetLevel:50,icon:"silver-sprit"},{id:8,name:"覚醒素材用30CC銀",rarityId:3,minLevel:1,maxLevel:50,defaultCurrentLevel:1,defaultCurrentRemainExp:38,defaultTargetLevel:30,icon:"silver-sprit"},{id:4,name:"ゴールド",rarityId:4,minLevel:1,maxLevel:80,defaultCurrentLevel:1,defaultCurrentRemainExp:42,defaultTargetLevel:60,icon:"gold-sprit"},{id:5,name:"プラチナ",rarityId:5,minLevel:1,maxLevel:90,defaultCurrentLevel:1,defaultCurrentRemainExp:45,defaultTargetLevel:70,icon:"platinum-sprit"},{id:6,name:"ブラック",rarityId:6,minLevel:1,maxLevel:99,defaultCurrentLevel:1,defaultCurrentRemainExp:48,defaultTargetLevel:80,icon:"black-sprit"},{id:7,name:"サファイア",rarityId:7,minLevel:1,maxLevel:85,defaultCurrentLevel:1,defaultCurrentRemainExp:45,defaultTargetLevel:65,icon:"time-sprit"}]},32:function(t,e,i){t.exports=[{id:1,name:"プラチナアーマー8倍",exp:8e3,icon:"platinum-armer"},{id:7,name:"プラチナアーマー4.5倍",exp:4500,icon:"platinum-armer"},{id:2,name:"プラチナアーマー3.375倍",exp:3375,icon:"platinum-armer"},{id:3,name:"団長8倍",exp:4e4,icon:"black-armer"},{id:4,name:"ハッピー",exp:15e4,icon:"happy"},{id:5,name:"ヨジロウ4人 (風神Lv27)",exp:920,icon:"yojiro"},{id:6,name:"ハシム4人 (拠点後Lv20)",exp:780,icon:"hashim"}]},33:function(t,e,i){t.exports=[{id:1,name:"1→30",currentLevel:1,targetLevel:30},{id:2,name:"1→50",currentLevel:1,targetLevel:50},{id:3,name:"1→60",currentLevel:1,targetLevel:60},{id:4,name:"1→80",currentLevel:1,targetLevel:80},{id:7,name:"1→85",currentLevel:1,targetLevel:80},{id:5,name:"1→90",currentLevel:1,targetLevel:90},{id:6,name:"1→99",currentLevel:1,targetLevel:99}]}});