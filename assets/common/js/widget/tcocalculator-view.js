(function() {
function h(a){throw a;}var j=void 0,k=!0,m=null,r=!1,s,t=this;function aa(a,b){var c=a.split("."),d=t;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)!c.length&&b!==j?d[f]=b:d=d[f]?d[f]:d[f]={}}function ba(){}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function v(a){return"array"==ca(a)}function da(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}function w(a){return"string"==typeof a}function x(a){return"function"==ca(a)}function ea(a){var b=typeof a;return"object"==b&&a!=m||"function"==b}function y(a){return a[fa]||(a[fa]=++ga)}var fa="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),ga=0;
function ha(a,b,c){return a.call.apply(a.bind,arguments)}function ia(a,b,c){a||h(Error());if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function z(a,b,c){z=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return z.apply(m,arguments)}var ja=Date.now||function(){return+new Date};
function A(a,b){function c(){}c.prototype=b.prototype;a.t=b.prototype;a.prototype=new c}Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return z.apply(m,c)}return z(this,a)};function ka(a){if(!la.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ma,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(na,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(oa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(pa,"&quot;"));return a}var ma=/&/g,na=/</g,oa=/>/g,pa=/\"/g,la=/[&<>\"]/;var B=Array.prototype,qa=B.indexOf?function(a,b,c){return B.indexOf.call(a,b,c)}:function(a,b,c){c=c==m?0:0>c?Math.max(0,a.length+c):c;if(w(a))return!w(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ra=B.forEach?function(a,b,c){B.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=w(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)},sa=B.filter?function(a,b,c){return B.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=[],e=0,g=w(a)?
a.split(""):a,i=0;i<d;i++)if(i in g){var l=g[i];b.call(c,l,i,a)&&(f[e++]=l)}return f};function ta(a){return B.concat.apply(B,arguments)}function ua(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function va(a,b,c){return 2>=arguments.length?B.slice.call(a,b):B.slice.call(a,b,c)};function wa(a,b){for(var c in a)b.call(j,a[c],c,a)}function xa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function ya(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function za(){var a=C,b;for(b in a)return r;return k}var Aa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ba(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<Aa.length;e++)c=Aa[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Ca(a){if("function"==typeof a.m)return a.m();if(w(a))return a.split("");if(da(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return xa(a)};function Da(a,b){this.n={};this.c=[];var c=arguments.length;if(1<c){c%2&&h(Error("Uneven number of arguments"));for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Da?(c=a.v(),d=a.m()):(c=ya(a),d=xa(a));for(var f=0;f<c.length;f++)this.set(c[f],d[f])}}s=Da.prototype;s.a=0;s.Ra=0;s.m=function(){Ea(this);for(var a=[],b=0;b<this.c.length;b++)a.push(this.n[this.c[b]]);return a};s.v=function(){Ea(this);return this.c.concat()};s.D=function(a){return D(this.n,a)};
s.remove=function(a){return D(this.n,a)?(delete this.n[a],this.a--,this.Ra++,this.c.length>2*this.a&&Ea(this),k):r};function Ea(a){if(a.a!=a.c.length){for(var b=0,c=0;b<a.c.length;){var d=a.c[b];D(a.n,d)&&(a.c[c++]=d);b++}a.c.length=c}if(a.a!=a.c.length){for(var f={},c=b=0;b<a.c.length;)d=a.c[b],D(f,d)||(a.c[c++]=d,f[d]=1),b++;a.c.length=c}}s.get=function(a,b){return D(this.n,a)?this.n[a]:b};s.set=function(a,b){D(this.n,a)||(this.a++,this.c.push(a),this.Ra++);this.n[a]=b};s.R=function(){return new Da(this)};
function D(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var E,Fa,Ga,Ha;function Ia(){return t.navigator?t.navigator.userAgent:m}Ha=Ga=Fa=E=r;var Ja;if(Ja=Ia()){var Ka=t.navigator;E=0==Ja.indexOf("Opera");Fa=!E&&-1!=Ja.indexOf("MSIE");Ga=!E&&-1!=Ja.indexOf("WebKit");Ha=!E&&!Ga&&"Gecko"==Ka.product}var La=E,G=Fa,H=Ha,I=Ga,Ma=t.navigator,Na=-1!=(Ma&&Ma.platform||"").indexOf("Mac"),Oa;
a:{var Pa="",Qa;if(La&&t.opera)var Ra=t.opera.version,Pa="function"==typeof Ra?Ra():Ra;else if(H?Qa=/rv\:([^\);]+)(\)|;)/:G?Qa=/MSIE\s+([^\);]+)(\)|;)/:I&&(Qa=/WebKit\/(\S+)/),Qa)var Sa=Qa.exec(Ia()),Pa=Sa?Sa[1]:"";if(G){var Ta,Ua=t.document;Ta=Ua?Ua.documentMode:j;if(Ta>parseFloat(Pa)){Oa=String(Ta);break a}}Oa=Pa}var Va={};
function J(a){var b;if(!(b=Va[a])){b=0;for(var c=String(Oa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",i=d[e]||"",l=RegExp("(\\d*)(\\D*)","g"),p=RegExp("(\\d*)(\\D*)","g");do{var q=l.exec(g)||["","",""],n=p.exec(i)||["","",""];if(0==q[0].length&&0==n[0].length)break;b=((0==q[1].length?0:parseInt(q[1],10))<(0==n[1].length?0:parseInt(n[1],10))?-1:(0==q[1].length?0:parseInt(q[1],
10))>(0==n[1].length?0:parseInt(n[1],10))?1:0)||((0==q[2].length)<(0==n[2].length)?-1:(0==q[2].length)>(0==n[2].length)?1:0)||(q[2]<n[2]?-1:q[2]>n[2]?1:0)}while(0==b)}b=Va[a]=0<=b}return b}var Wa={};function Xa(){return Wa[9]||(Wa[9]=G&&!!document.documentMode&&9<=document.documentMode)};var Ya=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");function Za(a){if($a){$a=r;var b=t.location;if(b){var c=b.href;if(c&&(c=(c=Za(c)[3]||m)&&decodeURIComponent(c))&&c!=b.hostname)$a=k,h(Error())}}return a.match(Ya)}var $a=I;function ab(a,b){var c;if(a instanceof ab)this.e=b!==j?b:a.e,bb(this,a.B),c=a.ja,K(this),this.ja=c,c=a.G,K(this),this.G=c,cb(this,a.da),c=a.ca,K(this),this.ca=c,db(this,a.o.R()),c=a.V,K(this),this.V=c;else if(a&&(c=Za(String(a)))){this.e=!!b;bb(this,c[1]||"",k);var d=c[2]||"";K(this);this.ja=d?decodeURIComponent(d):"";d=c[3]||"";K(this);this.G=d?decodeURIComponent(d):"";cb(this,c[4]);d=c[5]||"";K(this);this.ca=d?decodeURIComponent(d):"";db(this,c[6]||"",k);c=c[7]||"";K(this);this.V=c?decodeURIComponent(c):
""}else this.e=!!b,this.o=new eb(m,0,this.e)}s=ab.prototype;s.B="";s.ja="";s.G="";s.da=m;s.ca="";s.V="";s.rb=r;s.e=r;s.toString=function(){var a=[],b=this.B;b&&a.push(fb(b,gb),":");if(b=this.G){a.push("//");var c=this.ja;c&&a.push(fb(c,gb),"@");a.push(encodeURIComponent(String(b)));b=this.da;b!=m&&a.push(":",String(b))}if(b=this.ca)this.G&&"/"!=b.charAt(0)&&a.push("/"),a.push(fb(b,"/"==b.charAt(0)?hb:ib));(b=this.o.toString())&&a.push("?",b);(b=this.V)&&a.push("#",fb(b,jb));return a.join("")};
s.R=function(){return new ab(this)};function bb(a,b,c){K(a);a.B=c?b?decodeURIComponent(b):"":b;a.B&&(a.B=a.B.replace(/:$/,""))}function cb(a,b){K(a);b?(b=Number(b),(isNaN(b)||0>b)&&h(Error("Bad port number "+b)),a.da=b):a.da=m}function db(a,b,c){K(a);b instanceof eb?(a.o=b,a.o.ya(a.e)):(c||(b=fb(b,kb)),a.o=new eb(b,0,a.e))}function K(a){a.rb&&h(Error("Tried to modify a read-only Uri"))}s.ya=function(a){this.e=a;this.o&&this.o.ya(a);return this};
function fb(a,b){return w(a)?encodeURI(a).replace(b,lb):m}function lb(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var gb=/[#\/\?@]/g,ib=/[\#\?:]/g,hb=/[\#\?]/g,kb=/[\#\?@]/g,jb=/#/g;function eb(a,b,c){this.d=a||m;this.e=!!c}
function L(a){if(!a.b&&(a.b=new Da,a.a=0,a.d))for(var b=a.d.split("&"),c=0;c<b.length;c++){var d=b[c].indexOf("="),f=m,e=m;0<=d?(f=b[c].substring(0,d),e=b[c].substring(d+1)):f=b[c];f=decodeURIComponent(f.replace(/\+/g," "));f=M(a,f);a.add(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}s=eb.prototype;s.b=m;s.a=m;s.add=function(a,b){L(this);this.d=m;var a=M(this,a),c=this.b.get(a);c||this.b.set(a,c=[]);c.push(b);this.a++;return this};
s.remove=function(a){L(this);a=M(this,a);return this.b.D(a)?(this.d=m,this.a-=this.b.get(a).length,this.b.remove(a)):r};s.D=function(a){L(this);a=M(this,a);return this.b.D(a)};s.v=function(){L(this);for(var a=this.b.m(),b=this.b.v(),c=[],d=0;d<b.length;d++)for(var f=a[d],e=0;e<f.length;e++)c.push(b[d]);return c};s.m=function(a){L(this);var b=[];if(a)this.D(a)&&(b=ta(b,this.b.get(M(this,a))));else for(var a=this.b.m(),c=0;c<a.length;c++)b=ta(b,a[c]);return b};
s.set=function(a,b){L(this);this.d=m;a=M(this,a);this.D(a)&&(this.a-=this.b.get(a).length);this.b.set(a,[b]);this.a++;return this};s.get=function(a,b){var c=a?this.m(a):[];return 0<c.length?String(c[0]):b};s.toString=function(){if(this.d)return this.d;if(!this.b)return"";for(var a=[],b=this.b.v(),c=0;c<b.length;c++)for(var d=b[c],f=encodeURIComponent(String(d)),d=this.m(d),e=0;e<d.length;e++){var g=f;""!==d[e]&&(g+="="+encodeURIComponent(String(d[e])));a.push(g)}return this.d=a.join("&")};
s.R=function(){var a=new eb;a.d=this.d;this.b&&(a.b=this.b.R());return a};function M(a,b){var c=String(b);a.e&&(c=c.toLowerCase());return c}
s.ya=function(a){if(a&&!this.e){L(this);this.d=m;var b=this.b,c=function(a,b){var c=b.toLowerCase();b!=c&&(this.remove(b),this.remove(c),0<a.length&&(this.d=m,this.b.set(M(this,c),ua(a)),this.a+=a.length))};if("function"==typeof b.forEach)b.forEach(c,this);else if(da(b)||w(b))ra(b,c,this);else{var d;if("function"==typeof b.v)d=b.v();else if("function"!=typeof b.m)if(da(b)||w(b)){d=[];for(var f=b.length,e=0;e<f;e++)d.push(e)}else d=ya(b);else d=j;b=Ca(b);f=b.length;for(e=0;e<f;e++)c.call(this,b[e],
d&&d[e])}}this.e=a};var mb,nb=!G||Xa();!H&&!G||G&&Xa()||H&&J("1.9.1");G&&J("9");function ob(a){a=a.className;return w(a)&&a.match(/\S+/g)||[]}function N(a,b){for(var c=ob(a),d=va(arguments,1),f=c.length+d.length,e=c,g=0;g<d.length;g++)0<=qa(e,d[g])||e.push(d[g]);a.className=c.join(" ");return c.length==f}function pb(a,b){var c=ob(a),d=va(arguments,1),c=sa(c,function(a){return!(0<=qa(d,a))});a.className=c.join(" ")};function qb(a){return w(a)?document.getElementById(a):a}
function rb(a,b,c){var d=document,c=c||d,a=a&&"*"!=a?a.toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(a||b))return c.querySelectorAll(a+(b?"."+b:""));if(b&&c.getElementsByClassName){c=c.getElementsByClassName(b);if(a){for(var d={},f=0,e=0,g;g=c[e];e++)a==g.nodeName&&(d[f++]=g);d.length=f;return d}return c}c=c.getElementsByTagName(a||"*");if(b){d={};for(e=f=0;g=c[e];e++)a=g.className,"function"==typeof a.split&&0<=qa(a.split(/\s+/),b)&&(d[f++]=g);d.length=f;return d}return c}
var sb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function tb(a,b,c){var d=arguments,f=document,e=d[0],g=d[1];if(!nb&&g&&(g.name||g.type)){e=["<",e];g.name&&e.push(' name="',ka(g.name),'"');if(g.type){e.push(' type="',ka(g.type),'"');var i={};Ba(i,g);delete i.type;g=i}e.push(">");e=e.join("")}e=f.createElement(e);if(g)if(w(g))e.className=g;else if(v(g))N.apply(m,[e].concat(g));else{var l=e;wa(g,function(a,b){"style"==b?l.style.cssText=a:"class"==b?l.className=a:"for"==b?l.htmlFor=a:b in sb?l.setAttribute(sb[b],a):0==b.lastIndexOf("aria-",0)||0==
b.lastIndexOf("data-",0)?l.setAttribute(b,a):l[b]=a})}if(2<d.length)for(var p=f,q=e,f=function(a){a&&q.appendChild(w(a)?p.createTextNode(a):a)},g=2;g<d.length;g++)if(i=d[g],da(i)&&!(ea(i)&&0<i.nodeType)){var n=ra,u;a:{if((u=i)&&"number"==typeof u.length){if(ea(u)){u="function"==typeof u.item||"string"==typeof u.item;break a}if(x(u)){u="function"==typeof u.item;break a}}u=r}n(u?ua(i):i,f)}else f(i);return e}
function ub(a,b){if("textContent"in a)a.textContent=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode(b))}}function vb(a){this.F=a||t.document||document}vb.prototype.createElement=function(a){return this.F.createElement(a)};vb.prototype.createTextNode=function(a){return this.F.createTextNode(a)};
vb.prototype.appendChild=function(a,b){a.appendChild(b)};!G||Xa();var wb=!G||Xa(),xb=G&&!J("9");!I||J("528");H&&J("1.9b")||G&&J("8")||La&&J("9.5")||I&&J("528");H&&!J("8")||G&&J("9");function O(){0!=yb&&(this.Eb=Error().stack,y(this))}var yb=0;function P(a,b){this.type=a;this.currentTarget=this.target=b}s=P.prototype;s.s=r;s.defaultPrevented=r;s.ea=k;s.stopPropagation=function(){this.s=k};s.preventDefault=function(){this.defaultPrevented=k;this.ea=r};function zb(a){zb[" "](a);return a}zb[" "]=ba;function Q(a,b){a&&this.W(a,b)}A(Q,P);s=Q.prototype;s.target=m;s.relatedTarget=m;s.offsetX=0;s.offsetY=0;s.clientX=0;s.clientY=0;s.screenX=0;s.screenY=0;s.button=0;s.keyCode=0;s.charCode=0;s.ctrlKey=r;s.altKey=r;s.shiftKey=r;s.metaKey=r;s.Ab=r;s.H=m;
s.W=function(a,b){var c=this.type=a.type;P.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(H){var f;a:{try{zb(d.nodeName);f=k;break a}catch(e){}f=r}f||(d=m)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=I||a.offsetX!==j?a.offsetX:a.layerX;this.offsetY=I||a.offsetY!==j?a.offsetY:a.layerY;this.clientX=a.clientX!==j?a.clientX:a.pageX;this.clientY=a.clientY!==j?a.clientY:a.pageY;this.screenX=a.screenX||
0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.Ab=Na?a.metaKey:a.ctrlKey;this.state=a.state;this.H=a;a.defaultPrevented&&this.preventDefault();delete this.s};s.stopPropagation=function(){Q.t.stopPropagation.call(this);this.H.stopPropagation?this.H.stopPropagation():this.H.cancelBubble=k};
s.preventDefault=function(){Q.t.preventDefault.call(this);var a=this.H;if(a.preventDefault)a.preventDefault();else if(a.returnValue=r,xb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};function Ab(){}var Bb=0;s=Ab.prototype;s.key=0;s.A=r;s.Ba=r;s.W=function(a,b,c,d,f,e){x(a)?this.Ja=k:a&&a.handleEvent&&x(a.handleEvent)?this.Ja=r:h(Error("Invalid listener argument"));this.J=a;this.Pa=b;this.src=c;this.type=d;this.capture=!!f;this.qa=e;this.Ba=r;this.key=++Bb;this.A=r};s.handleEvent=function(a){return this.Ja?this.J.call(this.qa||this.src,a):this.J.handleEvent.call(this.J,a)};var R={},S={},T={},U={};
function V(a,b,c,d,f){if(b){if(v(b)){for(var e=0;e<b.length;e++)V(a,b[e],c,d,f);return m}var d=!!d,g=S;b in g||(g[b]={a:0,g:0});g=g[b];d in g||(g[d]={a:0,g:0},g.a++);var g=g[d],i=y(a),l;g.g++;if(g[i]){l=g[i];for(e=0;e<l.length;e++)if(g=l[e],g.J==c&&g.qa==f){if(g.A)break;return l[e].key}}else l=g[i]=[],g.a++;var p=Cb,q=wb?function(a){return p.call(q.src,q.key,a)}:function(a){a=p.call(q.src,q.key,a);if(!a)return a},e=q;e.src=a;g=new Ab;g.W(c,e,a,b,d,f);c=g.key;e.key=c;l.push(g);R[c]=g;T[i]||(T[i]=[]);
T[i].push(g);a.addEventListener?(a==t||!a.Ea)&&a.addEventListener(b,e,d):a.attachEvent(b in U?U[b]:U[b]="on"+b,e);return c}h(Error("Invalid event type"))}function Db(a,b,c,d,f){if(v(b))for(var e=0;e<b.length;e++)Db(a,b[e],c,d,f);else{d=!!d;a:{e=S;if(b in e&&(e=e[b],d in e&&(e=e[d],a=y(a),e[a]))){a=e[a];break a}a=m}if(a)for(e=0;e<a.length;e++)if(a[e].J==c&&a[e].capture==d&&a[e].qa==f){Eb(a[e].key);break}}}
function Eb(a){if(R[a]){var b=R[a];if(!b.A){var c=b.src,d=b.type,f=b.Pa,e=b.capture;c.removeEventListener?(c==t||!c.Ea)&&c.removeEventListener(d,f,e):c.detachEvent&&c.detachEvent(d in U?U[d]:U[d]="on"+d,f);c=y(c);if(T[c]){var f=T[c],g=qa(f,b);0<=g&&B.splice.call(f,g,1);0==f.length&&delete T[c]}b.A=k;if(b=S[d][e][c])b.La=k,Fb(d,e,c,b);delete R[a]}}}
function Fb(a,b,c,d){if(!d.X&&d.La){for(var f=0,e=0;f<d.length;f++)d[f].A?d[f].Pa.src=m:(f!=e&&(d[e]=d[f]),e++);d.length=e;d.La=r;0==e&&(delete S[a][b][c],S[a][b].a--,0==S[a][b].a&&(delete S[a][b],S[a].a--),0==S[a].a&&delete S[a])}}function Gb(a){var b,c=0,d=b==m;b=!!b;if(a==m)wa(T,function(a){for(var e=a.length-1;0<=e;e--){var f=a[e];if(d||b==f.capture)Eb(f.key),c++}});else if(a=y(a),T[a])for(var a=T[a],f=a.length-1;0<=f;f--){var e=a[f];if(d||b==e.capture)Eb(e.key),c++}}
function Hb(a,b,c,d,f){var e=1,b=y(b);if(a[b]){a.g--;a=a[b];a.X?a.X++:a.X=1;try{for(var g=a.length,i=0;i<g;i++){var l=a[i];l&&!l.A&&(e&=Ib(l,f)!==r)}}finally{a.X--,Fb(c,d,b,a)}}return Boolean(e)}function Ib(a,b){a.Ba&&Eb(a.key);return a.handleEvent(b)}
function Cb(a,b){if(!R[a])return k;var c=R[a],d=c.type,f=S;if(!(d in f))return k;var f=f[d],e,g;if(!wb){var i;if(!(i=b))a:{i=["window","event"];for(var l=t;e=i.shift();)if(l[e]!=m)l=l[e];else{i=m;break a}i=l}e=i;i=k in f;l=r in f;if(i){if(0>e.keyCode||e.returnValue!=j)return k;a:{var p=r;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(q){p=k}if(p||e.returnValue==j)e.returnValue=k}}p=new Q;p.W(e,this);e=k;try{if(i){for(var n=[],u=p.currentTarget;u;u=u.parentNode)n.push(u);g=f[k];g.g=g.a;for(var F=n.length-
1;!p.s&&0<=F&&g.g;F--)p.currentTarget=n[F],e&=Hb(g,n[F],d,k,p);if(l){g=f[r];g.g=g.a;for(F=0;!p.s&&F<n.length&&g.g;F++)p.currentTarget=n[F],e&=Hb(g,n[F],d,r,p)}}else e=Ib(c,p)}finally{n&&(n.length=0)}return e}d=new Q(b,this);return e=Ib(c,d)};function Jb(){O.call(this)}A(Jb,O);s=Jb.prototype;s.Ea=k;s.Na=m;s.addEventListener=function(a,b,c,d){V(this,a,b,c,d)};s.removeEventListener=function(a,b,c,d){Db(this,a,b,c,d)};
s.dispatchEvent=function(a){var b=a.type||a,c=S;if(b in c){if(w(a))a=new P(a,this);else if(a instanceof P)a.target=a.target||this;else{var d=a,a=new P(b,this);Ba(a,d)}var d=1,f,c=c[b],b=k in c,e;if(b){f=[];for(e=this;e;e=e.Na)f.push(e);e=c[k];e.g=e.a;for(var g=f.length-1;!a.s&&0<=g&&e.g;g--)a.currentTarget=f[g],d&=Hb(e,f[g],a.type,k,a)&&a.ea!=r}if(r in c)if(e=c[r],e.g=e.a,b)for(g=0;!a.s&&g<f.length&&e.g;g++)a.currentTarget=f[g],d&=Hb(e,f[g],a.type,r,a)&&a.ea!=r;else for(f=this;!a.s&&f&&e.g;f=f.Na)a.currentTarget=
f,d&=Hb(e,f,a.type,r,a)&&a.ea!=r;a=Boolean(d)}else a=k;return a};function W(){O.call(this);this.p=Kb;this.Ga=this.startTime=m}A(W,Jb);var Kb=0;W.prototype.M=function(){this.q("begin")};W.prototype.ba=function(){this.q("end")};W.prototype.q=function(a){this.dispatchEvent(a)};var Lb=t.window;function X(a,b,c){O.call(this);this.Ka=a;this.qb=b||0;this.ra=c;this.gb=z(this.kb,this)}A(X,O);X.prototype.w=0;X.prototype.start=function(a){this.stop();var b=this.gb,a=a!==j?a:this.qb;x(b)||(b&&"function"==typeof b.handleEvent?b=z(b.handleEvent,b):h(Error("Invalid listener argument")));this.w=2147483647<a?-1:Lb.setTimeout(b,a||0)};X.prototype.stop=function(){0!=this.w&&Lb.clearTimeout(this.w);this.w=0};X.prototype.kb=function(){this.w=0;this.Ka&&this.Ka.call(this.ra)};var C={},Mb=m;function Nb(a){a=y(a);delete C[a];za()&&Mb&&Mb.stop()}function Ob(){Mb||(Mb=new X(function(){var a=ja();wa(C,function(c){Pb(c,a)});za()||Ob()},20));var a=Mb;0!=a.w||a.start()};function Qb(a,b,c,d){W.call(this);(!v(a)||!v(b))&&h(Error("Start and end parameters must be arrays"));a.length!=b.length&&h(Error("Start and end points must be the same length"));this.O=a;this.lb=b;this.duration=c;this.Aa=d;this.coords=[];this.Ib=r}A(Qb,W);s=Qb.prototype;s.Ha=0;s.f=0;s.sa=m;
s.play=function(a){if(a||this.p==Kb)this.f=0,this.coords=this.O;else if(1==this.p)return r;Nb(this);this.startTime=a=ja();-1==this.p&&(this.startTime-=this.duration*this.f);this.Ga=this.startTime+this.duration;this.sa=this.startTime;this.f||this.M();this.q("play");-1==this.p&&this.q("resume");this.p=1;var b=y(this);b in C||(C[b]=this);Ob();Pb(this,a);return k};s.stop=function(a){Nb(this);this.p=Kb;a&&(this.f=1);Rb(this,this.f);this.q("stop");this.ba()};
function Pb(a,b){a.f=(b-a.startTime)/(a.Ga-a.startTime);1<=a.f&&(a.f=1);a.Ha=1E3/(b-a.sa);a.sa=b;Rb(a,a.f);1==a.f?(a.p=Kb,Nb(a),a.q("finish"),a.ba()):1==a.p&&a.va()}function Rb(a,b){x(a.Aa)&&(b=a.Aa(b));a.coords=Array(a.O.length);for(var c=0;c<a.O.length;c++)a.coords[c]=(a.lb[c]-a.O[c])*b+a.O[c]}s.va=function(){this.q("animate")};s.q=function(a){this.dispatchEvent(new Sb(a,this))};
function Sb(a,b){P.call(this,a);this.coords=b.coords;this.x=b.coords[0];this.y=b.coords[1];this.Jb=b.coords[2];this.duration=b.duration;this.f=b.f;this.Gb=b.Ha;this.state=b.p;this.Db=b}A(Sb,P);function Tb(a,b){var c=a.style;"opacity"in c?c.opacity=b:"MozOpacity"in c?c.MozOpacity=b:"filter"in c&&(c.filter=""===b?"":"alpha(opacity="+100*b+")")};function Y(a,b,c,d,f){Qb.call(this,b,c,d,f);this.element=a}A(Y,Qb);Y.prototype.ga=ba;Y.prototype.va=function(){this.ga();Y.t.va.call(this)};Y.prototype.ba=function(){this.ga();Y.t.ba.call(this)};Y.prototype.M=function(){this.ga();Y.t.M.call(this)};function Ub(a,b,c,d,f){"number"==typeof b&&(b=[b]);"number"==typeof c&&(c=[c]);Y.call(this,a,b,c,d,f);(1!=b.length||1!=c.length)&&h(Error("Start and end points must be 1D"))}A(Ub,Y);Ub.prototype.ga=function(){Tb(this.element,this.coords[0])};
Ub.prototype.show=function(){this.element.style.display=""};function Vb(a,b,c){Ub.call(this,a,0,1,b,c)}A(Vb,Ub);Vb.prototype.M=function(){this.show();Vb.t.M.call(this)};var Wb={Ua:".",Xa:",",ab:"%",za:"0",eb:"+",Za:"-",Wa:"E",cb:"\u2030",Ya:"\u221e",$a:"NaN",Ta:"#,##0.###",fb:"#E0",bb:"#,##0%",Sa:"\u00a4#,##0.00;(\u00a4#,##0.00)",Va:"USD"},Z=Wb,Z=Wb;var Xb={AED:[2,"dh","\u062f.\u0625.","DH"],AUD:[2,"$","AU$"],BDT:[2,"\u09f3","Tk"],BRL:[2,"R$","R$"],CAD:[2,"$","C$"],CHF:[2,"CHF","CHF"],CLP:[0,"$","CL$"],CNY:[2,"\u00a5","RMB\u00a5"],COP:[0,"$","COL$"],CRC:[0,"\u20a1","CR\u20a1"],CZK:[2,"K\u010d","K\u010d"],DKK:[18,"kr","kr"],DOP:[2,"$","RD$"],EGP:[2,"\u00a3","LE"],EUR:[18,"\u20ac","\u20ac"],GBP:[2,"\u00a3","GB\u00a3"],HKD:[2,"$","HK$"],ILS:[2,"\u20aa","IL\u20aa"],INR:[2,"\u20b9","Rs"],ISK:[0,"kr","kr"],JMD:[2,"$","JA$"],JPY:[0,"\u00a5","JP\u00a5"],
KRW:[0,"\u20a9","KR\u20a9"],LKR:[2,"Rs","SLRs"],MNT:[0,"\u20ae","MN\u20ae"],MXN:[2,"$","Mex$"],MYR:[2,"RM","RM"],NOK:[18,"kr","NOkr"],PAB:[2,"B/.","B/."],PEN:[2,"S/.","S/."],PHP:[2,"\u20b1","Php"],PKR:[0,"Rs","PKRs."],RUB:[2,"Rup","Rup"],SAR:[2,"Rial","Rial"],SEK:[2,"kr","kr"],SGD:[2,"$","S$"],THB:[2,"\u0e3f","THB"],TRY:[2,"TL","YTL"],TWD:[2,"NT$","NT$"],USD:[2,"$","US$"],UYU:[2,"$","UY$"],VND:[0,"\u20ab","VN\u20ab"],YER:[0,"Rial","Rial"],ZAR:[2,"R","ZAR"]};function Yb(){this.I=Z.Va;this.ib=Zb;this.Y=40;this.j=1;this.ua=3;this.Z=this.K=0;this.Qa=r;this.xa=this.wa="";this.$="-";this.aa="";this.L=1;this.pa=3;this.ia=this.Fa=r;switch(1){case 1:$b(this,Z.Ta);break;case 2:$b(this,Z.fb);break;case 3:$b(this,Z.bb);break;case 4:var a;a=Z.Sa;var b=["0"],c=Xb[this.I][0]&7;if(0<c){b.push(".");for(var d=0;d<c;d++)b.push("0")}a=a.replace(/0.00/g,b.join(""));$b(this,a);break;default:h(Error("Unsupported pattern type."))}}var Zb=0;
function $b(a,b){a.Hb=b.replace(/ /g,"\u00a0");var c=[0];a.wa=ac(a,b,c);for(var d=c[0],f=-1,e=0,g=0,i=0,l=-1,p=b.length,q=k;c[0]<p&&q;c[0]++)switch(b.charAt(c[0])){case "#":0<g?i++:e++;0<=l&&0>f&&l++;break;case "0":0<i&&h(Error('Unexpected "0" in pattern "'+b+'"'));g++;0<=l&&0>f&&l++;break;case ",":l=0;break;case ".":0<=f&&h(Error('Multiple decimal separators in pattern "'+b+'"'));f=e+g+i;break;case "E":a.ia&&h(Error('Multiple exponential symbols in pattern "'+b+'"'));a.ia=k;a.Z=0;c[0]+1<p&&"+"==
b.charAt(c[0]+1)&&(c[0]++,a.Qa=k);for(;c[0]+1<p&&"0"==b.charAt(c[0]+1);)c[0]++,a.Z++;(1>e+g||1>a.Z)&&h(Error('Malformed exponential pattern "'+b+'"'));q=r;break;default:c[0]--,q=r}0==g&&(0<e&&0<=f)&&(g=f,0==g&&g++,i=e-g,e=g-1,g=1);(0>f&&0<i||0<=f&&(f<e||f>e+g)||0==l)&&h(Error('Malformed pattern "'+b+'"'));i=e+g+i;a.ua=0<=f?i-f:0;0<=f&&(a.K=e+g-f,0>a.K&&(a.K=0));a.j=(0<=f?f:i)-e;a.ia&&(a.Y=e+a.j,0==a.ua&&0==a.j&&(a.j=1));a.pa=Math.max(0,l);a.Fa=0==f||f==i;d=c[0]-d;a.xa=ac(a,b,c);c[0]<b.length&&b.charAt(c[0])==
bc?(c[0]++,a.$=ac(a,b,c),c[0]+=d,a.aa=ac(a,b,c)):(a.$=a.wa+a.$,a.aa+=a.xa)}
function cc(a,b){if(isNaN(b))return Z.$a;var c=[],d=0>b||0==b&&0>1/b;c.push(d?a.$:a.wa);if(isFinite(b))if(b=b*(d?-1:1)*a.L,a.ia){var f=b;if(0==f)dc(a,f,a.j,c),ec(a,0,c);else{var e=Math.floor(Math.log(f)/Math.log(10)),f=f/Math.pow(10,e),g=a.j;if(1<a.Y&&a.Y>a.j){for(;0!=e%a.Y;)f*=10,e--;g=1}else 1>a.j?(e++,f/=10):(e-=a.j-1,f*=Math.pow(10,a.j-1));dc(a,f,g,c);ec(a,e,c)}}else dc(a,b,a.j,c);else c.push(Z.Ya);c.push(d?a.aa:a.xa);return c.join("")}
function dc(a,b,c,d){var f=Math.pow(10,a.ua),e=Math.round(b*f),g;isFinite(e)?(b=Math.floor(e/f),g=Math.floor(e-b*f)):g=0;for(var i=0<a.K||0<g,l="",e=b;1E20<e;)l="0"+l,e=Math.round(e/10);var l=e+l,p=Z.Ua,q=Z.Xa,e=Z.za.charCodeAt(0),n=l.length;if(0<b||0<c){for(b=n;b<c;b++)d.push(String.fromCharCode(e));for(b=0;b<n;b++)d.push(String.fromCharCode(e+1*l.charAt(b))),1<n-b&&(0<a.pa&&1==(n-b)%a.pa)&&d.push(q)}else i||d.push(String.fromCharCode(e));(a.Fa||i)&&d.push(p);c=""+(g+f);for(f=c.length;"0"==c.charAt(f-
1)&&f>a.K+1;)f--;for(b=1;b<f;b++)d.push(String.fromCharCode(e+1*c.charAt(b)))}function ec(a,b,c){c.push(Z.Wa);0>b?(b=-b,c.push(Z.Za)):a.Qa&&c.push(Z.eb);for(var b=""+b,d=Z.za,f=b.length;f<a.Z;f++)c.push(d);c.push(b)}var bc=";";
function ac(a,b,c){for(var d="",f=r,e=b.length;c[0]<e;c[0]++){var g=b.charAt(c[0]);if("'"==g)c[0]+1<e&&"'"==b.charAt(c[0]+1)?(c[0]++,d+="'"):f=!f;else if(f)d+=g;else switch(g){case "#":case "0":case ",":case ".":case bc:return d;case "\u00a4":if(c[0]+1<e&&"\u00a4"==b.charAt(c[0]+1))c[0]++,d+=a.I;else switch(a.ib){case Zb:d+=Xb[a.I][1];break;case 2:var g=a.I,i=Xb[g],d=d+(g==i[1]?g:g+" "+i[1]);break;case 1:d+=Xb[a.I][2]}break;case "%":1!=a.L&&h(Error("Too many percent/permill"));a.L=100;d+=Z.ab;break;
case "\u2030":1!=a.L&&h(Error("Too many percent/permill"));a.L=1E3;d+=Z.cb;break;default:d+=g}}return d};function fc(a){return a*a*a}function gc(a){return 1-Math.pow(1-a,3)};function hc(a){O.call(this);this.ra=a;this.c=[]}A(hc,O);var ic=[];function jc(a,b,c,d){v(c)||(ic[0]=c,c=ic);for(var f=0;f<c.length;f++){var e=V(b,c[f],d||a,r,a.ra||a);a.c.push(e)}}hc.prototype.handleEvent=function(){h(Error("EventHandler.handleEvent not implemented"))};function kc(a,b,c,d,f){function e(a){a&&(a.tabIndex=0,a.setAttribute("role","tab"),N(a,"goog-zippy-header"),a&&jc(g.ub,a,"click",g.xb),a&&jc(g.sb,a,"keydown",g.yb))}O.call(this);f||(f=mb||(mb=new vb));this.la=f;this.i=(w(a)?this.la.F.getElementById(a):a)||m;this.ma=w(d||m)?this.la.F.getElementById(d||m):d||m;this.h=(this.ta=x(b)?b:m)||!b?m:w(b)?this.la.F.getElementById(b):b;this.l=c==k;this.sb=new hc(this);this.ub=new hc(this);var g=this;e(this.i);e(this.ma);this.N(this.l)}A(kc,Jb);s=kc.prototype;
s.toggle=function(){this.N(!this.l)};s.N=function(a){this.h?this.h.style.display=a?"":"none":a&&this.ta&&(this.h=this.ta());this.h&&N(this.h,"goog-zippy-content");this.ma?(this.i.style.display=!a?"":"none",this.ma.style.display=a?"":"none"):this.fa(a);this.l=a;this.dispatchEvent(new lc("toggle",this,this.l))};
s.fa=function(a){if(this.i){var b=this.i;a?N(b,"goog-zippy-expanded"):pb(b,"goog-zippy-expanded");b=this.i;!a?N(b,"goog-zippy-collapsed"):pb(b,"goog-zippy-collapsed");this.i.setAttribute("aria-expanded",a)}};s.yb=function(a){if(13==a.keyCode||32==a.keyCode)this.toggle(),this.dispatchEvent(new P("action",this)),a.preventDefault(),a.stopPropagation()};s.xb=function(){this.toggle();this.dispatchEvent(new P("action",this))};function lc(a,b,c){P.call(this,a,b);this.Fb=c}A(lc,P);function mc(a,b,c){var d=tb("div",{style:"overflow:hidden"}),b=qb(b);b.parentNode.replaceChild(d,b);d.appendChild(b);this.T=d;this.k=m;kc.call(this,a,b,c);a=this.l;this.T.style.display=a?"":"none";this.fa(a)}A(mc,kc);s=mc.prototype;s.Q=500;s.P=gc;
s.N=function(a){if(this.l!=a||this.k){"none"==this.T.style.display&&(this.T.style.display="");var b=this.h.offsetHeight,c=0;this.k?(a=this.l,Gb(this.k),this.k.stop(r),c=b-Math.abs(parseInt(this.h.style.marginTop,10))):c=a?0:b;this.fa(a);this.k=new Qb([0,c],[0,a?b:0],this.Q,this.P);V(this.k,["begin","animate","end"],this.vb,r,this);V(this.k,"end",z(this.wb,this,a));this.k.play(r)}};s.vb=function(a){var b=this.h;b.style.marginTop=a.y-b.offsetHeight+"px"};
s.wb=function(a){a&&(this.h.style.marginTop="0");Gb(this.k);this.l=a;this.k=m;a||(this.T.style.display="none");this.dispatchEvent(new lc("toggle",this,a))};function nc(a){if(a.ha){var b=a.ha,c=a.r;K(b);b.o.set("tco",c);a.tb.href=b.toString().replace("?","#")}}
function oc(a){a.r=parseInt(a.U.value,10);if(a.r){a.r=99999999<a.r?99999999:a.r;N(a.oa,"hide");var b="edu"==a.Bb?a.S["chromebook-edu"]:a.S["chromebook-biz"];a.u.total=0;for(var c in b)a.u[c]=Math.ceil(b[c]*a.r),a.u.total+=a.u[c];b=a.S.pc;a.z.total=0;for(c in b)a.z[c]=Math.ceil(3*b[c]*a.r),a.z.total+=a.z[c];c=0;for(b=a.C.length;c<b;c++){var d=a.C[c].id.substr(a.C[c].id.lastIndexOf("-")+1),f=cc(a.Ma,a.u[d]),d=cc(a.Ma,a.z[d]);ub(a.C[c],"NaN"!=f?a.ka+f:a.ka+0);ub(a.Oa[c],a.ka+d)}nc(a)}else pb(a.oa,"hide"),
a.U.focus()}
var pc={USD:{symbol:"$",pc:{hardware:205,maintenance:41,software:195,management:1145,enduser:485},"chromebook-biz":{hardware:249,maintenance:90,software:150,management:219,enduser:364},"chromebook-edu":{hardware:249,maintenance:80,software:30,management:219,enduser:364}},EUR:{symbol:"\u20ac",pc:{hardware:166.66,maintenance:33.33,software:160,management:935,enduser:395},"chromebook-biz":{hardware:309,maintenance:93,software:113,management:180,enduser:100},"chromebook-edu":{hardware:309,maintenance:60.4,
software:23,management:180,enduser:100}},GBP:{symbol:"\u00a3",pc:{hardware:131.33,maintenance:26.67,software:125,management:735,enduser:310},"chromebook-biz":{hardware:380,maintenance:76,software:93,management:140,enduser:80},"chromebook-edu":{hardware:229,maintenance:49.4,software:19,management:140,enduser:80}}};function qc(a){O.call(this);this.hb=a;this.Cb=[];a=rb(a.twistyTag,a.classTwisty,qb(a.parentId));ra(a,this.jb,this)}A(qc,Jb);
qc.prototype.jb=function(a){var b;if(a.nextElementSibling!=j)b=a.nextElementSibling;else for(b=a.nextSibling;b&&1!=b.nodeType;)b=b.nextSibling;if(b){if("A"!=a.tagName){var c=tb("A",{href:"javascript: void 0"});c.innerHTML=a.innerHTML;a.innerHTML="";a.appendChild(c)}a=new $(a,b,this.hb);V(a,"toggle",this.nb,m,this);this.Cb.push(a)}};qc.prototype.nb=function(a){this.dispatchEvent(new P("toggle",a.currentTarget))};
function $(a,b,c){c=c||{};this.Ca=c.classCollapse||"goog-zippy-expanded";this.Da=c.classExpand||"goog-zippy-collapsed";this.ob=c.intervalCollapse&&10*c.intervalCollapse||150;this.Ia=c.intervalExpand&&10*c.intervalExpand||200;this.pb=c.intervalFade&&10*c.intervalFade||150;this.na=c.enableFade;this.Q=this.Ia;this.P=gc;mc.call(this,a,b,r);V(this,"toggle",this.zb,m,this);this.na&&(this.mb=new Vb(this.h,this.pb))}A($,mc);
$.prototype.fa=function(a){this.i&&(a?(pb(this.i,this.Da),N(this.i,this.Ca)):(pb(this.i,this.Ca),N(this.i,this.Da)))};$.prototype.N=function(a){$.t.N.call(this,a);this.na&&!a&&Tb(this.h,0)};$.prototype.zb=function(){this.na&&(this.l?(this.mb.play(),this.Q=this.ob,this.P=fc):(this.Q=this.Ia,this.P=gc))};aa("gweb.ui.Twisties",qc);
aa("chrm.widget.TcoCalculator",function(a,b,c){this.S=c||pc[a||"USD"];this.ka=this.S.symbol;this.Bb=b||"biz";this.Ma=new Yb;this.u={};this.z={};this.r=1;this.oa=m;this.C=[];this.Oa=[];this.tb=parent.window?parent.window.location:window.location;this.ha=m;a=qb("tco-form");this.oa=qb("submit-error");this.U=qb("tco-employees");V(a,"submit",function(a){a.preventDefault();oc(this)},r,this);this.C=rb("td","cb",j);this.Oa=rb("td","pc",j);this.ha=new ab((parent.window?parent.window.location.href:window.location.href).replace("#",
"?"));a=this.ha.o.get("tco");parseInt(a,10)?(this.U.value=a,oc(this)):nc(this);this.U.focus()});
})()