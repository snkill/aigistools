webpackJsonp([3],{117:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(398),u=r(i),s=n(399),l=r(s),c=n(400),f=r(c),d=n(401),p=r(d),h=function(){function e(){a(this,e),this.services={}}return o(e,[{key:"messageDispatcher",get:function(){return this.services.messageDispatcher||(this.services.messageDispatcher=new l.default)}},{key:"messageActions",get:function(){return this.services.messageActions||(this.services.messageActions=new u.default(this.messageDispatcher))}},{key:"messageStore",get:function(){return this.services.messageStore||(this.services.messageStore=new p.default(this.messageDispatcher))}},{key:"messageRenderer",get:function(){return this.services.messageRenderer||(this.services.messageRenderer=new f.default)}}]),e}();t.default=new h},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MESSAGE_RESTORING="MESSAGE_RESTORING",t.MESSAGE_RESTORED="MESSAGE_RESTORED",t.MESSAGE_UPDATING="MESSAGE_UPDATING",t.MESSAGE_UPDATED="MESSAGE_UPDATED"},354:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(17);var s=n(47),l=r(s),c=n(404),f=r(c),d=n(405),p=r(d),h=n(402),m=r(h),b=n(117),y=r(b),g=y.default.messageActions,v=y.default.messageStore,_=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={message:null,updating:!1},n.messageChangedHandler=null,n}return i(t,e),u(t,[{key:"componentWillMount",value:function(){this.messageChangedHandler=this.handleMessageChanged.bind(this),v.addListener("changed",this.messageChangedHandler),g.restoreMessage()}},{key:"componentWillUnmount",value:function(){v.removeListener("changed",this.messageChangedHandler)}},{key:"render",value:function(){var e=this.state.message,t=this.state.updating,n=["massgame",t?"updating":""].join(" ");return l.default.createElement("div",{className:n},l.default.createElement(f.default,{data:e,onChange:this.handleMessageEditorChange.bind(this)}),l.default.createElement(p.default,{key:"view",data:e}),l.default.createElement(m.default,{key:"export",data:e}))}},{key:"handleMessageChanged",value:function(){this.setState({message:v.currentMessage})}},{key:"handleMessageEditorChange",value:function(e){g.updateMessage(e)}}]),t}(l.default.Component);t.default=_},382:function(e,t,n){"use strict";e.exports=n(311)},397:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){var n=this;r(this,e),this.text="",this.fontFamily="monospace",this.fontSize=10,this.letterSpace=1,this.dot=null,this.background=null,this.loaded=!1,this.origin={x:0,y:0},this.padding={x:0,y:0},this.dotImage=null,this.backgroundImage=null,Object.keys(t).forEach(function(e){n[e]=t[e]})}return a(e,[{key:"loadResources",value:function(){var e=this,t=["dot","background"].filter(function(t){return null!==e[t]}),n=t.map(function(t){return new Promise(function(n,r){var a=new Image;a.crossOrigin="Anonymous",a.onload=n,a.onerror=r,e[t+"Image"]=a,a.src=e[t]})});return Promise.all(n).then(function(){e.loaded=!0})}}]),e}();t.default=o},398:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(111),c=a(l),f=n(397),d=a(f),p=n(166),h=r(p),m=n(614),b=a(m),y=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.dispatcher=e,n}return u(t,e),s(t,[{key:"restoreMessage",value:function(){var e=this;this.dispatcher.dispatch({type:h.MESSAGE_RESTORING}),setTimeout(function(){var t=e.createDefaultMessage();e.dispatcher.dispatch({type:h.MESSAGE_RESTORED,message:t})})}},{key:"updateMessage",value:function(e){var t=this;this.dispatcher.dispatch({type:h.MESSAGE_UPDATING,message:e}),setTimeout(function(){t.dispatcher.dispatch({type:h.MESSAGE_UPDATED,message:e})})}},{key:"createDefaultMessage",value:function(){return new d.default(b.default)}}]),t}(c.default);t.default=y},399:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(165),u=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),t}(i.Dispatcher);t.default=u},400:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e),this.mask=document.createElement("canvas")}return a(e,[{key:"render",value:function(e,t){var n=t.text,r=t.fontFamily,a=t.fontSize,o=t.letterSpace,i=t.dotImage,u=i.width,s=i.height,l=n.split(/\B/),c=this.mask,f=c.getContext("2d");f.font=""+a+"px "+r;var d=l.reduce(function(e,t){return e+f.measureText(t).width+o},0),p=a;c.width=d,c.height=p,f.fillStyle="rgb(0, 0, 0)",f.fillRect(0,0,d,p),f.strokeStyle="rgb(255, 255, 255)",f.fillStyle="rgb(255, 255, 255)",f.font=""+a+"px "+r,f.textAlign="left",f.textBaseline="top",l.reduce(function(e,t){return f.fillText(t,e,0),e+f.measureText(t).width+1},0);var h=t.backgroundImage,m=h.width,b=h.height,y=t.padding,g=Math.max(m,u*d+2*y.x),v=Math.max(b,s*p+2*y.y);e.width=g,e.height=v;for(var _=e.getContext("2d"),E=0;E<v;E+=b)for(var w=0;w<g;w+=m)_.drawImage(h,w,E);if(0!==l.length)for(var O=f.getImageData(0,0,d,p).data,S=(g-d*u)/2+t.origin.x,j=(v-p*s)/2+t.origin.y,P=0;P<p;P++)for(var k=0;k<d;k++){var M=4*d*P+4*k,T=O[M],x=O[M+1],C=O[M+2];(T+x+C)/3&128&&_.drawImage(i,S+u*k,j+s*P)}}}]),e}();t.default=o},401:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(111),c=a(l),f=n(166),d=r(f),p=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.currentMessage=null,n.messageDispatcherToken=null,n.registerDispatcher(e),n}return u(t,e),s(t,[{key:"registerDispatcher",value:function(e){var t=this;this.messageDispatcherToken=e.register(function(e){switch(e.type){case d.MESSAGE_RESTORING:t.emit("restoring"),t.emit("changing");break;case d.MESSAGE_RESTORED:t.currentMessage=e.message,t.emit("restored"),t.emit("changed");break;case d.MESSAGE_UPDATING:t.emit("changing");break;case d.MESSAGE_UPDATED:t.currentMessage=e.message,t.emit("changed")}})}}]),t}(c.default);t.default=p},402:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(47),l=r(s),c=n(117),f=r(c),d=f.default.messageRenderer,p=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={enabled:!!e.data},n.downloadFileName="massgame.png",n.contentType="image/png",n}return i(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.data;this.setState({enabled:!!t})}},{key:"render",value:function(){var e=this.state.enabled;return l.default.createElement("form",{className:"form form--export",onSubmit:this.handleSubmit.bind(this)},l.default.createElement("div",{className:"form-group"},l.default.createElement("button",{ref:"download",type:"submit",className:"btn btn-block btn-default btn-lg",disabled:!e},l.default.createElement("i",{className:"fa fa-download"})," ダウンロード")))}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.state.enabled)try{var t=this.props.data;this.download(t,d)}catch(e){window.alert("Failed to download operation. "+e)}}},{key:"download",value:function(e,t){var n=document.createElement("canvas");t.render(n,e);var r=n.toDataURL("image/png"),a=document.createElement("a");if("download"in a){a.href=r,a.download=this.downloadFileName;var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,0,null),a.dispatchEvent(o)}else{var i=window.open("about:blank","_blank"),u=i.document,s='<!DOCTYPE html><html><body>画像を右クリックして保存して下さい。<br />\n        <img src="'+r+'" /></body></html>';u.open(),u.write(s),u.close()}}}]),t}(l.default.Component);t.default=p},403:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(47),l=r(s),c=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"loading-indicator"},l.default.createElement("span",{className:"spinner"},"Loading..."))}}]),t}(l.default.Component);t.default=c},404:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(47),l=r(s),c=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={enabled:!!e.data},n.emitChangeEventTimer=null,n.emitChangeEventDelay=100,n}return i(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.data,n=!!t;this.setState({enabled:n}),t.text!==this.refs.text.value&&(this.refs.text.value=t.text)}},{key:"shouldComponentUpdate",value:function(e,t){return t.enabled!==this.state.enabled}},{key:"render",value:function(){var e=this.state.enabled,t=this.props.data,n=t?t.text:"";return l.default.createElement("form",{className:"form form--message-edit",onSubmit:this.handleSubmit.bind(this)},l.default.createElement("div",{className:"form-group"},l.default.createElement("input",{type:"text",ref:"text",className:"form-control",defaultValue:n,placeholder:"メッセージ",disabled:!e,onChange:this.handleChange.bind(this)})))}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"handleChange",value:function(){var e=this,t=this.props.data;t&&(this.emitChangeEventTimer&&clearTimeout(this.emitChangeEventTimer),t.text=this.refs.text.value,this.emitChangeEventTimer=setTimeout(function(){e.props.onChange(t)},this.emitChangeEventDelay))}}]),t}(l.default.Component);t.default=c,c.defaultProps={value:null}},405:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(47),l=r(s),c=n(403),f=r(c),d=n(117),p=r(d),h=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={loaded:!1,hasError:!1},n}return i(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.data,n=t&&t.loaded;this.setState({loaded:n})}},{key:"componentDidUpdate",value:function(){var e=this.props.data;if(!this.state.hasError)return this.state.loaded?void this.renderMessage(e):void this.loadResources(e)}},{key:"render",value:function(){var e=void 0;return e=this.state.hasError?l.default.createElement("div",{className:"alert alert-danger"},"Failed to load resources."):this.state.loaded?l.default.createElement("canvas",{ref:"canvas"}):l.default.createElement(f.default,null),l.default.createElement("div",{className:"message-view"},e)}},{key:"renderMessage",value:function(e){var t=p.default.messageRenderer,n=this.refs.canvas;t.render(n,e)}},{key:"loadResources",value:function(e){var t=this;e.loadResources().catch(function(){t.setState({loaded:!0,hasError:!0})}).then(function(){t.setState({loaded:!0,hasError:!1})})}}]),t}(l.default.Component);t.default=h},614:function(e,t){e.exports={text:"THANK YOU",fontFamily:"'ＭＳ ゴシック', monospace",fontSize:10,letterSpace:1,dot:"../assets/massgame/dot.png",background:"../assets/massgame/bg.png",origin:{x:0,y:-50},padding:{x:100,y:0}}},707:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(47),o=r(a),i=n(382),u=r(i),s=n(354),l=r(s);document.addEventListener("DOMContentLoaded",function(){u.default.render(o.default.createElement(l.default,null),document.getElementById("massgame"))})}},[707]);