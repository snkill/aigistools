webpackJsonp([7],[function(t,e,i){(function(t){"use strict";function e(){var e=parseInt(t("[name=current]:input").val()),i=parseInt(t("[name=objective]:input").val()),s=(new Date).getTime(),a=f.reduce(function(t,e){return t+Math.max(e[1],s)-Math.max(e[0],s)},0),o=Math.max(i-e,0),r=a/864e5,l=o/Math.max(r,1),h=a/36e5,c=o/Math.max(h,1),u=a/18e5,d=o/Math.max(u,1),p=n(l,3).split(".");t("#norma_per_day").find(".norma-amount-actual").text(p[0]).parent().find(".norma-amount-fraction").text("."+p[1]).parent(),p=n(c,3).split("."),t("#norma_per_hour").find(".norma-amount-actual").text(p[0]).parent().find(".norma-amount-fraction").text("."+p[1]).parent(),p=n(d,3).split("."),t("#norma_per_minute").find(".norma-amount-actual").text(p[0]).parent().find(".norma-amount-fraction").text("."+p[1]).parent(),t("#remains_days").text(n(r,0)),t("#remains_hours").text(n(h,0)),t("#remains_minutes").text(n(60*h,0));var m,g=100*Math.min(e,i),v=parseInt(g/i)||0,b=S-a,y=parseInt(100*b/S)||0;m=100==v?"progress-bar-success":v>=y?"progress-bar-success":v>.7*y?"progress-bar-info":v>.4*y?"progress-bar-warning":"progress-bar-danger",t("#objective_progress > .progress-bar").width(v+"%").removeClass("progress-bar-success progress-bar-info progress-bar-danger progress-bar-warning").addClass(m).children("span").text(v+"%達成"),t("#period_progress > .progress-bar").width(y+"%").children("span").text(y+"%経過");var w=e*S/b;t("#prediction_collection").text(n(Math.floor(w)));var x=Math.min(w/i,1),A=t("#objective_progress").width(),C=A*x-47;t(".pointer").css("left",C+"px");var _=230>A-C?-250:0;t(".pointer-label").css("margin-left",_+"px");var k="";if(i>e&&w>=i){var D,T;f.forEach(function(t){D=D||t[0],T=T||t[1]});var P=i/w*S,I=f.reduce(function(t,e){if(t)return t;var i=e[1]-e[0];return P>i?(P-=i,null):new Date(e[0]+P)},null),E=I.getMonth(),M=I.getDate(),z=I.getHours(),N=I.getMinutes(),H=E+1+"/"+M+" "+(10>z?"0"+z:z)+":"+(10>N?"0"+N:N);k=H+"頃に目標達成できそうよ。"}t("#prediction_completion_date").text(k)}function n(t,e){return e=e||0,t===1/0||t===-(1/0)?"∞":t.toFixed(e)}function s(){var e=(new Date).getTime(),i=t("#period_dates");if(f.forEach(function(n){var s=n[1]-n[0],a=100*s/S+"%",o=new Date(n[0]),r=new Date(n[1]-1),l=o.getMonth()+1+"/"+o.getDate()+"-"+(r.getMonth()+1)+"/"+r.getDate(),h=e>=n[0]&&e<n[1],c=e>=n[1],u=h?"progress-bar-active":c?"progress-bar-expired":"progress-bar-remain";t('<div class="progress-bar">').width(a).text(l).addClass(u).appendTo(i)}),t('[data-objective-mode="'+m+'"]').show(),t('[data-objective-mode][data-objective-mode!="'+m+'"]').remove(),t("[name=current]:input").click(function(){this.select()}).TouchSpin({min:0,max:g,step:1}),"achievement"==m){var n=t("[name=objective]:input");t.each(k,function(e,i){t("<option />").attr("value",e).text(i+" ("+e+"個)").appendTo(n)})}else{t("select[name=objective]").click(function(){this.select()});var s=t("#increse_objective_list");D.forEach(function(e){t('<button class="btn btn-default" name="add"  type="button" />').val(e.value).attr("title",e.name).append(t('<i class="fa fa-arrow-up" />')).append(t("<span />").addClass("icon icon-"+e.unit)).appendTo(s)})}t("button[name=add]").click(function(e){e.preventDefault();var i=parseInt(t(this).val()),n=parseInt(t("[name=objective]:input").val());t("[name=objective]:input").val(n+i).trigger("change")}),t("button[name=reset]").click(function(e){e.preventDefault(),t("[name=objective]:input").val(0).trigger("change")}),t("[name=expectation]:input").change(function(){h(),c()}).val("drop");var v=t("#prize_list");D.forEach(function(e){t('<div class="prize-list" />').append(t('<h4 class="prize-list-header" />').text(e.name).append(t('<span class="prize-value" />').text("@"+e.value))).append(t('<div class="prize-list-body" />').attr("data-prize",e.unit)).appendTo(v)});var b=T.reduce(function(t,e){return Math.max(t,e.drops.length)},0),w=t("#map tbody");if(T.forEach(function(e,i){var n=t("<td />").attr("data-chart",i).append(t('<span class="barchart" />')).append(t('<span class="barchart-label" />')).append(t('<span class="marathon" />'));t("<tr />").append(t("<th />").text(e.name)).append(t("<td />").text(""+e.charisma+"/"+e.stamina)).append(function(){for(var i=e.drops.map(function(e){var i=e.icon?t("<i />").attr("title",e.name).addClass("icon icon-"+e.icon):t("<span />").text(e.name),n=e.set?t('<span class="badge" />').text("x"+e.set):null;return t("<td />").append(i).append(n)}),n=e.drops.length;b>n;n++)i.push(t("<td />"));return i}).append(n).appendTo(w)}),t("#map thead th.drops").attr("colspan",b),y){var x=t("#rewards tbody");P.forEach(function(e){t("<tr />").attr("data-amount",e.amount).append(t('<td class="text-right" />').html('<span class="diff"></span> '+e.amount)).append(t("<td />").html('<span class="icon icon-'+e.unit+'"></span>')).appendTo(x)})}var A=t("[name=estimate_map]:input").change(function(){u(),H.estimateMap=parseInt(t(this).val()),o(H)});T.forEach(function(e,i){t("<option />").val(i).text(e.name+" ("+e.charisma+"/"+e.stamina+")").appendTo(A)});for(var C=t("[name=estimate_rank]:input").change(function(){u(),H.estimateRank=parseInt(t(this).val()),o(H)}),_=1;200>=_;_++){var I=d(_),E=p(_),M=""+_+" ("+I+"/"+E+")";t("<option />").val(_).text(M).appendTo(C)}var z=t("[name=estimate_use_crystal]").change(function(){u(),H.estimateUseCrystal=t(this).val(),o(H)}),N=t("[name=estimate_natural_recovery]:input").change(function(){u(),H.estimateNaturalRecovery=this.checked,o(H)});t("*[title]").tooltip();var H=a();t("[name=current]:input").val(H.current),"exchange"==m?t("[name=objective]:input").val(H.objective):t("[name=objective]:input").val([H.objective]),t("[name=current]:input, [name=objective]:input").change(function(){H[this.name]=t(this).val(),o(H),r(),l(),c(),u()}),A.val(H.estimateMap),C.val(H.estimateRank),z.val(H.estimateUseCrystal),N.prop("checked",H.estimateNaturalRecovery),"exchange"==m&&l(),y&&r(),h(),c(),u()}function a(){var e={},i={current:b,objective:v,estimateMap:x,estimateRank:A,estimateUseCrystal:C,estimateNaturalRecovery:_};try{e=JSON.parse(t.cookie(w))}catch(n){}return t.extend(i,e)}function o(e){t.cookie(w,JSON.stringify(e),{expires:30})}function r(){if(y){var e=45,i=7,n=parseInt(t("[name=current]:input").val()),s=t("#rewards tbody");s.find("tr").removeClass("active").each(function(){var s=t(this),a=s.attr("data-amount")-n;if(-e>a)s.hide();else if(0>a)s.css("opacity",.5).show();else if(e>a)s.addClass("active").css("opacity",1).show();else if(e*i>a){var o=1-Math.floor(a/e)*e/(e*(i+1));s.show().css("opacity",o)}else s.hide();var r=0===a?"diff-eq":a>0?"diff-plus":"diff-minus",l=0===a?"":(a>0?"+":"")+a;s.find("span.diff").removeClass("diff-eq diff-plus diff-minus").addClass(r).text(l)})}}function l(){if("exchange"==m){var e=parseInt(t("[name=current]:input").val());D.forEach(function(i){for(var n=t('[data-prize="'+i.unit+'"]').empty(),s=0;e>s;s+=i.value){var a=t("<i />").addClass("icon icon-"+i.unit),o=25*Math.min(e-s,i.value)/i.value;t('<div class="prize-gage" />').append(a.clone().css({position:"absolute",opacity:.2,boxShadow:"none",paddingRight:25-o})).append(a.clone().css({width:o+"px"})).appendTo(n)}})}}function h(){var e=t("[name=expectation]:input").val(),i=1/0,s=0,a="drop"==e?null:e,o=T.map(function(t){var e=t.expectation/(a&&t[a]||1);return i=0,s=Math.max(s,e),e}),r=a?3:2;T.forEach(function(e,a){var l=t("[data-chart="+a+"]"),h=o[a],c=h/(s-i),u=120*c+240;l.find("span.barchart-label").text(n(h,r)+"個"),l.find("span.barchart").css({width:100*c+"%",backgroundColor:"hsla("+u+", 80%, 50%, 0.5)"})})}function c(){var e=parseInt(t("[name=objective]:input").val()),i=parseInt(t("[name=current]:input").val()),s=Math.max(e-i,0);T.forEach(function(e,i){var a=t("[data-chart="+i+"]"),o=s?Math.ceil(s/e.expectation):0;a.find("span.marathon").text("残り"+n(o)+"周")})}function u(){var e=parseInt(t("[name=current]:input").val()),i=parseInt(t("[name=objective]:input").val()),n=T[parseInt(t("[name=estimate_map]:input").val())],s=Math.max(i-e,0),a=Math.ceil(s/n.expectation);t("#estimate_required_marathon").text(a);var o=(new Date).getTime(),r=f.reduce(function(t,e){return t+Math.max(e[1],o)-Math.max(e[0],o)},0),l=0+t("[name=estimate_natural_recovery]:input").prop("checked"),h=Math.floor(r/18e4)*l,c=Math.floor(r/36e5)*l,u=parseInt(t("[name=estimate_rank]").val()),m=d(u),g=p(u),v=Math.ceil(n.charisma*a),b=Math.ceil(n.stamina*a),y=t("[name=estimate_use_crystal]:input").val(),w=0+("both"===y||"charisma"===y),x=0+("both"===y||"stamina"===y),A=Math.ceil(Math.max(v-h,0)/m)*w,C=Math.ceil(Math.max(b-c,0)/g)*x,_=A+C;t("#estimate_required_crystal").text(_);var k=0===A?"diff-eq":A>0?"diff-plus":"diff-minus";t("#estimate_required_crystal_for_charisma").attr("class",k).text(A),k=0===C?"diff-eq":C>0?"diff-plus":"diff-minus",t("#estimate_required_crystal_for_stamina").attr("class",k).text(C);var D=h+m*A,P=c+g*C,S=Math.floor(Math.min(D/n.charisma,P/n.stamina,a));t("#estimate_available_marathon").text(S);var I=S-a;k=0===I?"diff-eq":I>0?"diff-plus":"diff-minus";var E=(I>=0?"+":"")+I;t("#estimate_available_marathon_diff").attr("class",k).text(E);var M=n.charisma*S;t("#estimate_using_charisma").text(M),I=M-v,k=0===I?"diff-eq":I>0?"diff-plus":"diff-minus",E=(I>=0?"+":"")+I,t("#estimate_using_charisma_diff").attr("class",k).text(E);var z=Math.ceil(n.stamina*S);t("#estimate_using_stamina").text(z),I=z-b,k=0===I?"diff-eq":I>0?"diff-plus":"diff-minus",E=(I>=0?"+":"")+I,t("#estimate_using_stamina_diff").attr("class",k).text(E);var N=e+Math.ceil(n.expectation*S);t("#estimate_result_collection").text(N),I=N-i,k=0===I?"diff-eq":I>0?"diff-plus":"diff-minus",E=(I>=0?"+":"")+I,t("#estimate_result_collection_diff").attr("class",k).text(E)}function d(t){return 27+(100>=t?3*t:300+t-100)}function p(t){return 12+(100>=t?0:Math.floor((t-100)/20)+1)}i(10);var f=[["2015/03/14 00:00:00","2015/03/16 00:00:00"],["2015/03/21 00:00:00","2015/03/23 00:00:00"],["2015/03/28 00:00:00","2015/03/30 00:00:00"],["2015/04/04 00:00:00","2015/04/06 00:00:00"]].map(function(t){return t.map(Date.parse)}),m="exchange",g=1/0,v=300,b=20,y=!0,w="time-crystal-timer",x=0,A=100,C="both",_=!0,k={},D=[{value:500,unit:"time-sprit",name:"時の精霊",limit:1},{value:150,unit:"ekidona",name:"エキドナ",limit:1/0}],T=[{name:"大長老",charisma:50,stamina:5,expectation:5.49,drops:[{name:"ガドラス",icon:"gadrus",set:2},{name:"竜戦士",icon:"dragon-soldier"},{name:"刻水晶3",icon:"time-crystal-2",set:3}]},{name:"決戦",charisma:40,stamina:5,expectation:6,drops:[{name:"ガドラス",icon:"gadrus"},{name:"竜戦士",icon:"dragon-soldier"},{name:"刻水晶2",icon:"time-crystal-2",set:3}]},{name:"竜の巣",charisma:35,stamina:4,expectation:4.56,drops:[{name:"ガドラス",icon:"gadrus"},{name:"竜戦士",icon:"dragon-soldier",set:2},{name:"刻水晶3",icon:"time-crystal-2",set:2}]},{name:"闇の世界",charisma:30,stamina:3,expectation:3,drops:[{name:"ガドラス",icon:"gadrus"},{name:"竜戦士",icon:"dragon-soldier"},{name:"刻水晶1",icon:"time-crystal-1",set:3}]},{name:"竜王",charisma:70,stamina:3,expectation:3.44,drops:[{name:"ガドラス",icon:"gadrus",set:2},{name:"竜戦士",icon:"dragon-soldier",set:2},{name:"刻水晶2",icon:"time-crystal-2",set:2}]},{name:"ドラゴニュート",charisma:40,stamina:2,expectation:2.28,drops:[{name:"ガドラス",icon:"gadrus"},{name:"竜戦士",icon:"dragon-soldier"},{name:"刻水晶1",icon:"time-crystal-1",set:3}]},{name:"乱戦",charisma:30,stamina:2,expectation:1.92,drops:[{name:"ガドラス",icon:"gadrus"},{name:"竜戦士",icon:"dragon-soldier"},{name:"刻水晶1",icon:"time-crystal-1",set:2}]},{name:"再侵攻",charisma:20,stamina:1,expectation:.71,drops:[{name:"ガドラス",icon:"gadrus"},{name:"竜戦士",icon:"dragon-soldier"},{name:"刻水晶1",icon:"time-crystal-1"}]},{name:"大地の大穴",charisma:10,stamina:0,expectation:0,drops:[]}],P=[],S=f.reduce(function(t,e){return t+e[1]-e[0]},0);t(function(){s(),setInterval(e,1e3)})}).call(e,i(2))}]);