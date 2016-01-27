(function(){
  'use strict';

  angular

    .module('myApp')

    .factory('angularUtilityService', angularUtilityService);

  /* @ngInject */
  function angularUtilityService($location, $scope){

    var controllername = "angularUtilityService";

    /*jshint validthis: true */
    var vm = this;
    vm.isObject = isObject,
    vm.isInteger = isInteger,
    vm.isFloat = isFloat,
    vm.isBoolean = isBoolean,
    vm.betterTypeOf = betterTypeOf;
    vm.makeArray = makeArray;
    vm.toggle = toggle;
    vm.isMsie = isMsie;
    vm.isBlankString = isBlankString;
    vm.escapeRegExChars = escapeRegExChars;
    vm.isString = isString;
    vm.isNumber = isNumber;
    vm.isUndefined = isUndefined;
    vm.isElement = isElement;
    vm.isJQuery = isJQuery;
    vm.debounce = debounce;
    vm.stringify = stringify;
    vm.clone = clone;
    vm.toggle = toggle;
    vm.redirection = redirection;
    vm.valuesToArray = valuesToArray;
    vm.countJSONObjects = countJSONObjects;
    vm.JSONParse = JSONParse;
    vm.sortBy = sortBy;
    vm.concats = concats;
    vm.convertJSONtoArray = convertJSONtoArray;
    vm.isBiggerThan = isBiggerThan;
    vm.isBigEnough = isBigEnough;
    vm.removeDuplicate = removeDuplicate;
    vm.getKeys = getKeys;

    /* NOTE: I'm making all methods and properties public and private. Take those that we need and make the rest privates */
    var utilityService = {
      isObject:isObject,
      isInteger:isInteger,
      isFloat:isFloat,
      printUpperCase:printUpperCase,
      shuffleArray:shuffleArray, 
      emptyArray:emptyArray,
      betterTypeOf:betterTypeOf,	
      makeArray: makeArray,
      toggle : toggle,
      isMsie : isMsie,
      isBlankString : isBlankString,
      escapeRegExChars : escapeRegExChars,
      isString : isString,
      isNumber : isNumber,
      isUndefined : isUndefined,
      isElement : isElement,
      isJQuery : isJQuery,
      isEmpty: isEmpty,
      debounce : debounce,
      stringify : stringify,
      clone : clone,
      toggle : toggle,
      redirection : redirection,
      valuesToArray : valuesToArray,
      countJSONObjects : countJSONObjects,
      JSONParse : JSONParse,
      sortBy : sortBy,
      concats : concats,
      convertJSONtoArray : convertJSONtoArray,
      isBiggerThan : isBiggerThan,
      isBigEnough : isBigEnough,
      removeDuplicate : removeDuplicate,
      getKeys : getKeys,
      once: once,
      getAbsoluteUrl: getAbsoluteUrl,
      toStr: toStr,
      replacer: replacer,
      deleteKeyJSON: deleteKeyJSON,
      contain: contain,
      convertToNumber: convertToNumber,
      isFunction: isFunction,
      isInArray: isInArray
  };

  ////////////
  
  /*
	betterTypeOf(null); // null
	betterTypeOf(NaN); // number
	betterTypeOf({a: 4}); //"object"
	betterTypeOf([1, 2, 3]); //"array"
	(function() {console.log(toType(arguments))})(); //arguments
	betterTypeOf(new ReferenceError); //"error"
	betterTypeOf(new Date); //"date"
	betterTypeOf(/a-z/); //"regexp"
	betterTypeOf(Math); //"math"
	betterTypeOf(JSON); //"json"
	betterTypeOf(new Number(4)); //"number"
	betterTypeOf(new String("abc")); //"string"
	betterTypeOf(new Boolean(true)); //"boolean"
  */
  
  function printUpperCase(words) {
  var elements = [].concat(words);
    for (var i = 0; i < elements.length; i++) {
      console.log(elements[i].toUpperCase());
    }
  }
  /*
  printUpperCase(["l", "e", "o"]);
  */
  
  function shuffleArray(arr) {
    var i,
        j,
        temp;
    for (i = arr.length-1; i>0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
  };
  /*
   var a = [1, 2, 3, 4, 5, 6, 7, 8];
   var b = shuffleArray(a);
   console.log(b);
   // [2, 7, 8, 6, 5, 3, 1, 4]
  */
  
  function emptyArray() {
    var n = list.length = 0;
    console.log(n)
  }
  /*
   var list = [1, 2, 3, 4];
   emptyArray();
  */
    
  function betterTypeOf(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }
  
  function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  }
  
  function isFloat(value) {
    return typeof value === "number" && value === +value && Math.round(value) !== value;
  }
  
  function isInteger(value) {
    return typeof value === "number" && value === +value && Math.round(value) === value;
  }
  
  function isBoolean(value) {
    return typeof value === 'boolean' || value === 'true' || value === 'false';
  },
  
  function makeArray(obj){
    var a = jQuery.makeArray(obj); 
    if (Array.isArray(a){
    	return a;
    } else {
    	return false;
    }
  }
  
  function toggle($scope) {
    $scope.toggle = !$scope.toggle;
  }

  function isMsie() {
    var match = /(msie) ([\w.]+)/i.exec(navigator.userAgent);
    return match ? parseInt(match[2], 10) : false;
  }
  
  function isBlankString(str) {
    return !str || /^\s*$/.test(str);
  }

  function escapeRegExChars(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }

  function isString(obj) {
    return typeof obj === "string";
  }

  function isNumber(obj) {
    return typeof obj === "number";
  }

  function isUndefined(obj) {
    return typeof obj === "undefined";
  }

  function isElement(obj) {
    return !!(obj && obj.nodeType === 1);
  }

  function isJQuery(obj) {
    return obj instanceof $;
  }

  /* borrowed from @rhysbrettbowen */
  var debounce = function(func, wait) {
    // we need to save these in the closure
    var timeout, args, context, timestamp;

    return function() {

      // save details of latest call
      context = this;
      args = [].slice.call(arguments, 0);
      timestamp = new Date();

      // this is where the magic happens
      var later = function() {

        // how long ago was the last call
        var last = (new Date()) - timestamp;

        // if the latest call was less that the wait period ago
        // then we reset the timeout to wait for the difference
        if (last < wait) {
          timeout = setTimeout(later, wait - last);

          // or if not we can null out the timer and run the latest
        } else {
          timeout = null;
          func.apply(context, args);
        }
      };

      // we only need to set the timer now if one isn't already running
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
    };
  };


  // The once function ensures a given function can only be called once, thus prevent duplicate initialization
  function once(fn, context) {
    var result;

    return function() {
      if(fn) {
        result = fn.apply(context || this, arguments);
        fn = null;
      }

      return result;
    };
  }
  // Usage
  /*
   var canOnlyFireOnce = once(function() {
   console.log('Fired!');
   });
   canOnlyFireOnce(); // "Fired!"
   canOnlyFireOnce(); // nada
  */


  // Getting an absolute URL from a variable string
  var getAbsoluteUrl = function() {
    var a;

    return function(url) {
      if (!a) {
        a = document.createElement('a');
        a.href = url;
      }
      return a.href;
    };

  };
  // Usage
  /*
   getAbsoluteUrl('/something'); // http://davidwalsh.name/something
   */


  function toStr(s) {
    return isUndefined(s) || s === null ? "" : s + "";
  }
  
  function convertToNumber(value){
    return parseInt(value, 10);
  }

  function stringify(val) {
    return isString(val) ? val : JSON.stringify(val);
  }

  function clone(obj) {
    return $.extend(true, {}, obj);
  }

  // 2: revealing module pattern
  // toggle
  function toggle(){
    $scope.show = !$scope.show;
  }

  // redirection
  function redirection(){
    if ($location.$$host === 'localhost') {
      var user = {
        username: 'nnn',
        password: 'xxx'
      };
      return user;
    }
  }

  // ES5 methods Object.keys and Array.prototype.map (can I use: http://kangax.github.io/compat-table/es5/)
  function valuesToArray(obj) {
    return Object.keys(obj).map(function (key) { return obj[key]; });
  }

  // JSON Objects counter
  // JsonObject = JSON Object expected
  function countJSONObjects(JsonObject){
    var count = 0;
    for( var x in JsonObject ) {
      if (JsonObject.hasOwnProperty(x)) {
        count++;
      }
    }
    console.log(count++);
  }

  // JSON parse
  // JsonObject = JSON Object expected
  function JSONParse(JsonObject){
    var jsonObject = JSON.parse(JsonObject);
    console.log(jsonObject);
  }

  // sort an array of objects by number or letter using native function sort()
  function sortBy(field, reverse, primer){
    var key = primer ?
      function(x) { return primer(x[field]); } :
      function(x) { return x[field] };
    reverse = !reverse ? 1 : -1;

    return function (a, b) {
      return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    };
  }
  /*
   // Sort by JSON n_key high to low
   homes.sort( sort_by('n_key', true, parseInt) );

   // Sort by JSON n_key, case-insensitive, A-Z
   homes.sort( sort_by('n_key', false, function(a){ return a.toUpperCase() }) );
   */


  // Concatenating 2 or 3 arrays
  function concats(arr1, arr2, arr3){
    if (arr3 === undefined || arr3 === null) {
      var arr = arr1.concat(arr2);
    } else {
      var arr = arr1.concat(arr2, arr3);
    }
    return arr;
  }

  // Converting Array to JSON
  function convertJSONtoArray(jo){
    var arr = Object.keys(jo).map(function(k) { return jo[k] });
    return arr;
  }
  /*
   var jo = {"0":"1","1":"2","2":"3","3":"4"};
   */

  // test Array to validate the function
  var num = 5;
  function isBiggerThan(element, index, array){
    return element > num;
  }
  /*
   console.log( [2, 5, 8, 1, 4].some( isBiggerThan )); //true
   */

  //  method tests whether all elements in the typed array pass the test
  function isBigEnough(element, index, array) {
    return element >= 10;
  }
  /*
   console.log( [12, 54, 18, 130, 44].every(isBigEnough) );
  */

  // Remove duplicate items from an array
  function removeDuplicate(base) {
    var fooArr = [],
      fooArr2 = [],
      found, x, y;

    var origLen = base.length;
    for (x = 0; x < origLen; x++) {
      found = '';
      for (y = 0; y < fooArr.length; y++) {
        if (base[x] === fooArr[y]) {
          fooArr2.push(base[x]);
          window.console.log("repeated:", fooArr2);
          found = 1;
          break;
        }
      }
      if (!found) {
        fooArr.push(base[x]);
      }
    }
    console.log("repeated:" + fooArr2);
    return fooArr2;
  }
  /*
   usage:
   var   arr = [0, 1, 2, 2, 3, 3, 4, 20, 21, 22, 24],
   arrUnique = removeDuplicate(arr);
   */

  // return JSON keys
  function getKeys(jsonObj){
    return Object.keys(jsonObj);
  }
  /*
   var jsonObj = {"key1":"value1","key2":"value2"};
   getKeys(jsonObj);
  */


  /*
   Borrowed from jQuery, and adapted to AJS environment
   */
  var isPlainObject = function( obj ) {
    // Not plain objects:
    // - Any object or value whose internal [[Class]] property is not "[object Object]"
    // - DOM nodes
    // - window
    if ( $.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
      return false;
    }
    var hasOwn = ({}).hasOwnProperty;
    if ( obj.constructor &&
      !hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
      return false;
    }

    // If the function hasn't returned already, we're confident that
    // |obj| is a plain object, created by {} or constructed with new Object
    return true;
  };
  // var n = Object.create(null);
  // console.log(isPlainObject(n))


  var isNumeric = function( obj ) {
    return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
  };
  /*
   var n = 3;
   console.log(isNumeric(n))
   */


  var isArray =  function(){
    return Array.isArray();
  };
  /*
   var n = new Array();
   isArray(n);
   */


  var isEmpty = function( obj ) {
    var name;
    for ( name in obj ) {
      return false;
    }
    return true;
  };
  /*
   var n = new Array('1','2');
   console.log(isEmpty(n));
   */


  var merge = function( first, second ) {
    var len = +second.length,
      j = 0,
      i = first.length;

    for ( ; j < len; j++ ) {
      first[ i++ ] = second[ j ];
    }

    first.length = i;

    return first;
  };
  /*
   var a = new Array('1','2');
   var o = Array.of('leo','lanese');
   console.log(merge(a,o));
   */

  // Search for a specified value within an array and return its index (or -1 if not found).
  Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
      if (this[i] === obj) {
        return true;
      }
    }
    return false;
  };
  /*
   var a = [ 'foo', 'bar' ];
   console.log( a.contains('foo') )
   console.log( a.contains('fox') )
   console.log( [1, 2, 3].contains(2) ); // => true
   console.log( [1, 2, 3].contains('2') ); // => false
   */


  var jsonSize = function( obj ) {
    return Object.keys(obj).length || null;
  };
  /*
   var obj = {
   foo: 'foo',
   toJSON: function() {
   return 'bar';
   }
   };
   jsonSize(obj);
   */

  /* borrowed from developer.mozilla.org */
  var replacer = function(key, value) {
    if (typeof value === "string") {
      return undefined;
    }
    return value;
  };
  /*
   var foo = {foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
   var jsonString = JSON.stringify(foo, replacer); // {"week":45,"month":7}.
   */

  // Remove a JSON attribute
  var deleteKeyJSON =  function(myObj, keyToDelete){
    delete myObj.test[keyToDelete];
  };
  /*
   var myObj = {'test' : {'key1' : 'value', 'key2': 'value'}};
   var keyToDelete = "key1";

   deleteKeyJSON(myObj, keyToDelete);
   */

  // check if one string contains another substring
  var contain = function(s,o){
    return s.indexOf(o) > -1;
  };
  /*
   var s = "foo";
   var o = "oo";
   contain(s,o);
   */

   // return the Service
   return utilityService;
  }
  
  
  var isFunction = function(obj){
    return typeof(obj) === "function";
  }
  /*
  var f = function f() {};
  isFunction(f); // true
  */


  var isInArray = function(value, array) {
    return array.indexOf(value) > -1;
  }
  /*
  var a = [1,2,3,4];
  var v = 1;
  isInArray(v, a); // true
  */
	
	

})();
