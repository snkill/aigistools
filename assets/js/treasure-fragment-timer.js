webpackJsonp([1],[function(t,a,e){(function(t){"use strict";function a(){var a=parseInt(t("[name=current]:input").val()),e=parseInt(t("[name=objective]:input").val()),i=(new Date).getTime(),r=f.reduce(function(t,a){return t+Math.max(a[1],i)-Math.max(a[0],i)},0),s=Math.max(e-a,0),o=r/864e5,u=s/Math.max(o,1),c=r/36e5,p=s/Math.max(c,1),m=r/18e5,l=s/Math.max(m,1),d=n(u,3).split(".");t("#norma_per_day").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=n(p,3).split("."),t("#norma_per_hour").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=n(l,3).split("."),t("#norma_per_minute").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),t("#remains_days").text(n(o,0)),t("#remains_hours").text(n(c,0)),t("#remains_minutes").text(n(60*c,0));var h,v=100*Math.min(a,e),g=parseInt(v/e)||0,b=q-r,x=parseInt(100*b/q)||0;h=100==g?"progress-bar-success":g>=x?"progress-bar-success":g>.7*x?"progress-bar-info":g>.4*x?"progress-bar-warning":"progress-bar-danger",t("#objective_progress > .progress-bar").width(g+"%").removeClass("progress-bar-success progress-bar-info progress-bar-danger progress-bar-warning").addClass(h).children("span").text(g+"%達成"),t("#period_progress > .progress-bar").width(x+"%").children("span").text(x+"%経過");var _=a*q/b;t("#prediction_collection").text(n(Math.floor(_)));var y=Math.min(_/e,1),k=t("#objective_progress").width(),M=k*y-47;t(".pointer").css("left",M+"px");var w=230>k-M?-250:0;t(".pointer-label").css("margin-left",w+"px");var I="";if(e>a&&_>=e){var j,C;f.forEach(function(t){j=j||t[0],C=C||t[1]});var D=e/_*q,T=f.reduce(function(t,a){if(t)return t;var e=a[1]-a[0];return D>e?(D-=e,null):new Date(a[0]+D)},null),E=T.getMonth(),z=T.getDate(),R=T.getHours(),N=T.getMinutes(),S=E+1+"/"+z+" "+(10>R?"0"+R:R)+":"+(10>N?"0"+N:N);I=S+"頃に目標達成できそうよ。"}t("#prediction_completion_date").text(I)}function n(t,a){return a=a||0,t===1/0||t===-(1/0)?"∞":t.toFixed(a)}function i(){var a=(new Date).getTime(),e=t("#period_dates");if(f.forEach(function(n){var i=n[1]-n[0],r=100*i/q+"%",s=new Date(n[0]),o=new Date(n[1]-1),u=s.getMonth()+1+"/"+s.getDate()+"-"+(o.getMonth()+1)+"/"+o.getDate(),c=a>=n[0]&&a<n[1],p=a>=n[1],m=c?"progress-bar-active":p?"progress-bar-expired":"progress-bar-remain";t('<div class="progress-bar">').width(r).text(u).addClass(m).appendTo(e)}),t('[data-objective-mode="'+h+'"]').show(),t('[data-objective-mode][data-objective-mode!="'+h+'"]').remove(),t("[name=current]:input").click(function(){this.select()}).TouchSpin({min:0,max:v,step:1}),"achievement"==h){var n=t("[name=objective]:input");t.each(I,function(a,e){t("<option />").attr("value",a).text(e+" ("+a+"個)").appendTo(n)})}else{t("select[name=objective]").click(function(){this.select()});var i=t("#increse_objective_list");j.forEach(function(a){t('<button class="btn btn-default" name="add"  type="button" />').val(a.value).attr("title",a.name).append(t('<i class="fa fa-arrow-up" />')).append(t("<span />").addClass("icon icon-"+a.unit)).appendTo(i)})}t("button[name=add]").click(function(a){a.preventDefault();var e=parseInt(t(this).val()),n=parseInt(t("[name=objective]:input").val());t("[name=objective]:input").val(n+e).trigger("change")}),t("button[name=reset]").click(function(a){a.preventDefault(),t("[name=objective]:input").val(0).trigger("change")}),t("[name=expectation]:input").change(function(){c(),p()}).val("drop");var g=t("#prize_list");j.forEach(function(a){t('<div class="prize-list" />').append(t('<h4 class="prize-list-header" />').text(a.name).append(t('<span class="prize-value" />').text("@"+a.value))).append(t('<div class="prize-list-body" />').attr("data-prize",a.unit)).appendTo(g)});var b=C.reduce(function(t,a){return Math.max(t,a.drops.length)},0),_=t("#map tbody");if(C.forEach(function(a,e){var n=t("<td />").attr("data-chart",e).append(t('<span class="barchart" />')).append(t('<span class="barchart-label" />')).append(t('<span class="marathon" />'));t("<tr />").append(t("<th />").text(a.name)).append(t("<td />").text(""+a.charisma+"/"+a.stamina)).append(function(){for(var e=a.drops.map(function(a){var e=a.icon?t("<i />").attr("title",a.name).addClass("icon icon-"+a.icon):t("<span />").text(a.name),n=a.set?t('<span class="badge" />').text("x"+a.set):null;return t("<td />").append(e).append(n)}),n=a.drops.length;b>n;n++)e.push(t("<td />"));return e}).append(n).appendTo(_)}),t("#map thead th.drops").attr("colspan",b),x){var y=t("#rewards tbody");D.forEach(function(a){t("<tr />").attr("data-amount",a.amount).append(t('<td class="text-right" />').html('<span class="diff"></span> '+a.amount)).append(t("<td />").html('<span class="icon icon-'+a.unit+'"></span>')).appendTo(y)})}var k=t("[name=estimate_map]:input").change(function(){m(),S.estimateMap=parseInt(t(this).val()),s(S)});C.forEach(function(a,e){t("<option />").val(e).text(a.name+" ("+a.charisma+"/"+a.stamina+")").appendTo(k)});for(var M=t("[name=estimate_rank]:input").change(function(){m(),S.estimateRank=parseInt(t(this).val()),s(S)}),w=1;200>=w;w++){var T=l(w),E=d(w),z=""+w+" ("+T+"/"+E+")";t("<option />").val(w).text(z).appendTo(M)}var R=t("[name=estimate_use_crystal]").change(function(){m(),S.estimateUseCrystal=t(this).val(),s(S)}),N=t("[name=estimate_natural_recovery]:input").change(function(){m(),S.estimateNaturalRecovery=this.checked,s(S)});t("*[title]").tooltip();var S=r();t("[name=current]:input").val(S.current),"exchange"==h?t("[name=objective]:input").val(S.objective):t("[name=objective]:input").val([S.objective]),t("[name=current]:input, [name=objective]:input").change(function(){S[this.name]=t(this).val(),s(S),o(),u(),p(),m()}),k.val(S.estimateMap),M.val(S.estimateRank),R.val(S.estimateUseCrystal),N.prop("checked",S.estimateNaturalRecovery),"exchange"==h&&u(),x&&o(),c(),p(),m()}function r(){var a={},e={current:b,objective:g,estimateMap:y,estimateRank:k,estimateUseCrystal:M,estimateNaturalRecovery:w};try{a=JSON.parse(t.cookie(_))}catch(n){}return t.extend(e,a)}function s(a){t.cookie(_,JSON.stringify(a),{expires:30})}function o(){if(x){var a=45,e=7,n=parseInt(t("[name=current]:input").val()),i=t("#rewards tbody");i.find("tr").removeClass("active").each(function(){var i=t(this),r=i.attr("data-amount")-n;if(-a>r)i.hide();else if(0>r)i.css("opacity",.5).show();else if(a>r)i.addClass("active").css("opacity",1).show();else if(a*e>r){var s=1-Math.floor(r/a)*a/(a*(e+1));i.show().css("opacity",s)}else i.hide();var o=0===r?"diff-eq":r>0?"diff-plus":"diff-minus",u=0===r?"":(r>0?"+":"")+r;i.find("span.diff").removeClass("diff-eq diff-plus diff-minus").addClass(o).text(u)})}}function u(){if("exchange"==h){var a=parseInt(t("[name=current]:input").val());j.forEach(function(e){for(var n=t('[data-prize="'+e.unit+'"]').empty(),i=0;a>i;i+=e.value){var r=t("<i />").addClass("icon icon-"+e.unit),s=25*Math.min(a-i,e.value)/e.value;t('<div class="prize-gage" />').append(r.clone().css({position:"absolute",opacity:.2,boxShadow:"none",paddingRight:25-s})).append(r.clone().css({width:s+"px"})).appendTo(n)}})}}function c(){var a=t("[name=expectation]:input").val(),e=1/0,i=0,r="drop"==a?null:a,s=C.map(function(t){var a=t.expectation/(r&&t[r]||1);return e=0,i=Math.max(i,a),a}),o=r?3:2;C.forEach(function(a,r){var u=t("[data-chart="+r+"]"),c=s[r],p=c/(i-e),m=120*p+240;u.find("span.barchart-label").text(n(c,o)+"個"),u.find("span.barchart").css({width:100*p+"%",backgroundColor:"hsla("+m+", 80%, 50%, 0.5)"})})}function p(){var a=parseInt(t("[name=objective]:input").val()),e=parseInt(t("[name=current]:input").val()),i=Math.max(a-e,0);C.forEach(function(a,e){var r=t("[data-chart="+e+"]"),s=i?Math.ceil(i/a.expectation):0;r.find("span.marathon").text("残り"+n(s)+"周")})}function m(){var a=parseInt(t("[name=current]:input").val()),e=parseInt(t("[name=objective]:input").val()),n=C[parseInt(t("[name=estimate_map]:input").val())],i=Math.max(e-a,0),r=Math.ceil(i/n.expectation);t("#estimate_required_marathon").text(r);var s=(new Date).getTime(),o=f.reduce(function(t,a){return t+Math.max(a[1],s)-Math.max(a[0],s)},0),u=0+t("[name=estimate_natural_recovery]:input").prop("checked"),c=Math.floor(o/18e4)*u,p=Math.floor(o/36e5)*u,m=parseInt(t("[name=estimate_rank]").val()),h=l(m),v=d(m),g=Math.ceil(n.charisma*r),b=Math.ceil(n.stamina*r),x=t("[name=estimate_use_crystal]:input").val(),_=0+("both"===x||"charisma"===x),y=0+("both"===x||"stamina"===x),k=Math.ceil(Math.max(g-c,0)/h)*_,M=Math.ceil(Math.max(b-p,0)/v)*y,w=k+M;t("#estimate_required_crystal").text(w);var I=0===k?"diff-eq":k>0?"diff-plus":"diff-minus";t("#estimate_required_crystal_for_charisma").attr("class",I).text(k),I=0===M?"diff-eq":M>0?"diff-plus":"diff-minus",t("#estimate_required_crystal_for_stamina").attr("class",I).text(M);var j=c+h*k,D=p+v*M,q=Math.floor(Math.min(j/n.charisma,D/n.stamina,r));t("#estimate_available_marathon").text(q);var T=q-r;I=0===T?"diff-eq":T>0?"diff-plus":"diff-minus";var E=(T>=0?"+":"")+T;t("#estimate_available_marathon_diff").attr("class",I).text(E);var z=n.charisma*q;t("#estimate_using_charisma").text(z),T=z-g,I=0===T?"diff-eq":T>0?"diff-plus":"diff-minus",E=(T>=0?"+":"")+T,t("#estimate_using_charisma_diff").attr("class",I).text(E);var R=Math.ceil(n.stamina*q);t("#estimate_using_stamina").text(R),T=R-b,I=0===T?"diff-eq":T>0?"diff-plus":"diff-minus",E=(T>=0?"+":"")+T,t("#estimate_using_stamina_diff").attr("class",I).text(E);var N=a+Math.ceil(n.expectation*q);t("#estimate_result_collection").text(N),T=N-e,I=0===T?"diff-eq":T>0?"diff-plus":"diff-minus",E=(T>=0?"+":"")+T,t("#estimate_result_collection_diff").attr("class",I).text(E)}function l(t){return 27+(100>=t?3*t:300+t-100)}function d(t){return 12+(100>=t?0:Math.floor((t-100)/20)+1)}e(2);var f=[["2015/02/05 15:00:00","2015/02/12 10:00:00"],["2015/02/12 15:00:00","2015/02/19 10:00:00"]].map(function(t){return t.map(Date.parse)}),h="achievement",v=1/0,g=1500,b=20,x=!0,_="treasure-fragment-timer",y=0,k=100,M="both",w=!0,I={25:"エーテルが仲間になる",50:"リアナが仲間になる",100:"初期レベル10",200:"初期レベル20",300:"スキルレベル2",400:"出撃コスト-1",500:"初期レベル20",600:"スキルレベル3",700:"出撃コスト-2",800:"初期レベル40",900:"スキルレベル4",1000:"出撃コスト-3",1100:"初期レベル50",1200:"スキルレベル5",1400:"出撃コスト-4",1500:"出撃コスト-5"},j=[],C=[{name:"強魔大結集",charisma:90,stamina:12,expectation:22,drops:[{name:"カケラ5",icon:"treasure-fragment-5",set:3},{name:"カケラ3",icon:"treasure-fragment-3",set:2},{name:"カケラ1",icon:"treasure-fragment-1"},{name:"虹精霊",icon:"rainbow-sprit"}]},{name:"合成魔獣",charisma:70,stamina:8,expectation:13,drops:[{name:"カケラ5",icon:"treasure-fragment-5",set:2},{name:"カケラ3",icon:"treasure-fragment-3"},{name:"カリオペ",icon:"calliope"},{name:"ルビー",icon:"ruby",set:2}]},{name:"怪しげな冒険者たち",charisma:40,stamina:5,expectation:7,drops:[{name:"カケラ5",icon:"treasure-fragment-5",set:2},{name:"カケラ1",icon:"treasure-fragment-1"},{name:"サノスケ",icon:"sanosuke"},{name:"魔水晶1",icon:"magical-crystal-1"}]},{name:"触手の脅威",charisma:35,stamina:3,expectation:4,drops:[{name:"カケラ5",icon:"treasure-fragment-5",set:2},{name:"カケラ1",icon:"treasure-fragment-1"},{name:"バラッド",icon:"barrad"},{name:"金精霊",icon:"gold-sprit"}]},{name:"大魔行列",charisma:50,stamina:7,expectation:11,drops:[{name:"カケラ5",icon:"treasure-fragment-5",set:2},{name:"カケラ1",icon:"treasure-fragment-1"},{name:"クリストファー",icon:"christ"},{name:"黒精霊",icon:"black-sprit"}]},{name:"凶魔の巣窟",charisma:40,stamina:4,expectation:5,drops:[{name:"カケラ3",icon:"treasure-fragment-3"},{name:"カケラ1",icon:"treasure-fragment-1",set:2},{name:"アサル",icon:"atholl"},{name:"魔水晶3",icon:"magical-crystal-3"}]},{name:"魔物の奇襲",charisma:35,stamina:2,expectation:2,drops:[{name:"カケラ1",icon:"treasure-fragment-1",set:2},{name:"ダニエラ",icon:"daniela"},{name:"水晶",icon:"crystal"}]},{name:"至宝のカケラ",charisma:20,stamina:1,expectation:1,drops:[{name:"カケラ1",icon:"treasure-fragment-1"}]}],D=[{amount:45,unit:"gold-bucket"},{amount:90,unit:"gold-sprit"},{amount:135,unit:"platinum-bucket"},{amount:180,unit:"gold-sprit"},{amount:225,unit:"crystal-fragment"},{amount:270,unit:"platinum-sprit"},{amount:315,unit:"gold-bucket"},{amount:360,unit:"platinum-sprit"},{amount:405,unit:"platinum-bucket"},{amount:450,unit:"black-sprit"},{amount:495,unit:"crystal-fragment"},{amount:540,unit:"black-sprit"},{amount:585,unit:"gold-bucket"},{amount:630,unit:"rainbow-sprit"},{amount:675,unit:"platinum-bucket"},{amount:720,unit:"platinum-sprit"},{amount:765,unit:"crystal-fragment"},{amount:810,unit:"platinum-sprit"},{amount:855,unit:"gold-bucket"},{amount:900,unit:"black-sprit"},{amount:945,unit:"platinum-bucket"},{amount:990,unit:"platinum-sprit"},{amount:1035,unit:"crystal-fragment"},{amount:1080,unit:"platinum-sprit"},{amount:1125,unit:"gold-bucket"},{amount:1170,unit:"black-sprit"},{amount:1215,unit:"platinum-bucket"},{amount:1260,unit:"black-sprit"},{amount:1305,unit:"crystal-fragment"},{amount:1350,unit:"rainbow-sprit"},{amount:1395,unit:"gold-bucket"},{amount:1440,unit:"platinum-sprit"},{amount:1485,unit:"platinum-bucket"},{amount:1530,unit:"platinum-sprit"},{amount:1575,unit:"crystal-fragment"},{amount:1620,unit:"black-sprit"},{amount:1665,unit:"gold-bucket"},{amount:1710,unit:"black-sprit"},{amount:1755,unit:"platinum-bucket"},{amount:1800,unit:"rainbow-sprit"}],q=f.reduce(function(t,a){return t+a[1]-a[0]},0);t(function(){i(),setInterval(a,1e3)})}).call(a,e(1))}]);