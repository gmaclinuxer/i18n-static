(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
console.log("こんにちは"),console.log("熱愛");
},{}],2:[function(require,module,exports){
console.log("中国"),console.log("リンゴ");
},{}],3:[function(require,module,exports){
console.log("国際");
},{}],4:[function(require,module,exports){
require("./vendor1"),require("./vendor2"),require("./vendor3");
},{"./vendor1":1,"./vendor2":2,"./vendor3":3}]},{},[4]);