parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),e="\n/* 你好，我是一名新手玩家\n * 我要演示一个画板\n * 首先我要准备一个div\n*/\n#div1{\n    border: 1px solid black;\n    width: 200px;\n    height: 200px;\n}\n/* 接下来我把div变成一个八卦图\n * 首先把div变成一个圆\n*/\n#div1{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border: none;\n}\n/* 八卦是由阴阳形成的\n * 阴中有阳，阳中有阴\n*/\n#div1{\n    background: rgb(255,255,255);\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);\n}\n/* 加点细节*/\n#div1::before{\n    width: 100px;\n    height: 100px;\n    left: 0;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: black;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);\n}\n#div1::after{\n    width: 100px;\n    height: 100px;\n    left: 0;\n    top: 100px;\n    left: 50%;\n    transform: translateX(-50%);\n    background: white;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);\n}\n\n",a="",d=0,i=function i(){setTimeout(function(){"\n"===e[d]?a+="<br>":" "===e[d]?a+="&nbsp;":a+=e[d],n.innerHTML=a,r.innerHTML=e.substring(0,d),window.scrollTo(0,9999999),n.scrollTo(0,999999),d<e.length-1&&(d+=1,i())},10)};i(),r.innerHTML="\nbody{\n    color:blue\n}\n";
},{}]},{},["epB2"], null)
//# sourceMappingURL=dist/main.f9aeddc3.js.map