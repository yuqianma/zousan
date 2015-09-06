!function(t){"use strict";function e(t){if(t){var e=this;t(function(t){e.resolve(t)},function(t){e.reject(t)})}}function n(t,e){if("function"==typeof t.y)try{var n=t.y.call(i,e);t.p.resolve(n)}catch(o){t.p.reject(o)}else t.p.resolve(e)}function o(t,e){if("function"==typeof t.n)try{var n=t.n.call(i,e);t.p.resolve(n)}catch(o){t.p.reject(o)}else t.p.reject(e)}var r,i,c="fulfilled",u="rejected",s="undefined",f=function(){function t(){for(;e.length-n;)e[n](),n++,n>1024&&(e.splice(0,n),n=0)}var e=[],n=0,o=function(){if(typeof MutationObserver!==s){var e=document.createElement("div"),n=new MutationObserver(t);return n.observe(e,{attributes:!0}),function(){e.setAttribute("a",0)}}return typeof setImmediate!==s?function(){setImmediate(t)}:function(){setTimeout(t,0)}}();return function(t){e.push(t),e.length-n==1&&o()}}();e.prototype={resolve:function(t){if(this.state===r){if(t===this)return this.reject(new TypeError("Attempt to resolve promise with self"));var e=this;if(t&&("function"==typeof t||"object"==typeof t))try{var o=!0,i=t.then;if("function"==typeof i)return void i.call(t,function(t){o&&(o=!1,e.resolve(t))},function(t){o&&(o=!1,e.reject(t))})}catch(u){return void(o&&this.reject(u))}this.state=c,this.v=t,e.c&&f(function(){for(var o=0,r=e.c.length;r>o;o++)n(e.c[o],t)})}},reject:function(t){if(this.state===r){this.state=u,this.v=t;var n=this.c;n?f(function(){for(var e=0,r=n.length;r>e;e++)o(n[e],t)}):e.suppressUncaughtRejectionError||console.log("You upset Zousan. Please catch rejections: ",t,t.stack)}},then:function(t,i){var u=new e,s={y:t,n:i,p:u};if(this.state===r)this.c?this.c.push(s):this.c=[s];else{var l=this.state,a=this.v;f(function(){l===c?n(s,a):o(s,a)})}return u},"catch":function(t){return this.then(null,t)},timeout:function(t){var n=this;return new e(function(e,o){setTimeout(function(){o(Error("Timeout"))},t),n.then(function(t){e(t)},function(t){o(t)})})}},e.resolve=function(t){var n=new e;return n.resolve(t),n},e.reject=function(t){var n=new e;return n.reject(t),n},e.all=function(t){function n(n,c){"function"!=typeof n.then&&(n=e.resolve(n)),n.then(function(e){o[c]=e,r++,r==t.length&&i.resolve(o)},function(t){i.reject(t)})}for(var o=[],r=0,i=new e,c=0;c<t.length;c++)n(t[c],c);return t.length||i.resolve(o),i},typeof module!=s&&module.exports&&(module.exports=e),t.Zousan=e,t.soon=f}("undefined"!=typeof global?global:this);