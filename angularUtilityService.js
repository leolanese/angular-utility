(function(){
  'use strict';

    angular

      .module('myApp')

      .factory('angularUtilityService'), angularUtilityService);

      /* @ngInject */
      function angularUtilityService($location, $scope){
        
        var controllername = "angularUtilityService";
        
        /*jshint validthis: true */
        var vm = this;
      
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
          isMsie : isMsie;
          isBlankString : isBlankString;
          escapeRegExChars : escapeRegExChars;
          isString : isString;
          isNumber : isNumber;
          isUndefined : isUndefined;
          isElement : isElement;
          isJQuery : isJQuery;
          debounce : debounce;
          stringify : stringify;
          clone : clone;
          toggle : toggle;
          redirection : redirection;
          valuesToArray : valuesToArray;
          countJSONObjects : countJSONObjects;
          JSONParse : JSONParse;
          sortBy : sortBy;
          concats : concats;
          convertJSONtoArray : convertJSONtoArray;
          isBiggerThan : isBiggerThan;
          isBigEnough : isBigEnough;
          removeDuplicate : removeDuplicate;
          getKeys : getKeys;
        };
            
        return userService;

       ////////////
            
        function isMsie() {
            var match = /(msie) ([\w.]+)/i.exec(navigator.userAgent);
            return match ? parseInt(match[2], 10) : false;
        },
        
        function isBlankString(str) {
            return !str || /^\s*$/.test(str);
        },
        
        function escapeRegExChars(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        },
        
        function isString(obj) {
            return typeof obj === "string";
        },
        
        function isNumber(obj) {
            return typeof obj === "number";
        },

        function isUndefined(obj) {
            return typeof obj === "undefined";
        },
        
        function isElement(obj) {
            return !!(obj && obj.nodeType === 1);
        },
        
        function isJQuery(obj) {
            return obj instanceof $;
        },
        
        /* borrowed from davidwalsh.name */
        // Returns a function, that, as long as it continues to be invoked, will not
        // be triggered. The function will be called after it stops being called for
        // N milliseconds. If `immediate` is passed, trigger the function on the
        // leading edge, instead of the trailing.
        function debounce(func, wait, immediate) {
        	var timeout;
        	return function() {
        		var context = this, args = arguments;
        		var later = function() {
        			timeout = null;
        			if (!immediate) func.apply(context, args);
        		};
        		var callNow = immediate && !timeout;
        		clearTimeout(timeout);
        		timeout = setTimeout(later, wait);
        		if (callNow) func.apply(context, args);
        	};
        };
        
        /* Usage
        var myEfficientFn = debounce(function() {
        	// All the taxing stuff you do
        }, 250);
        window.addEventListener('resize', myEfficientFn);
        */
        
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
        		if(!a) a = document.createElement('a');
        		a.href = url;
        
        		return a.href;
        	};
        });
        
        // Usage
        /*
        getAbsoluteUrl('/something'); // http://davidwalsh.name/something
        */

        
        function toStr(s) {
            return _.isUndefined(s) || s === null ? "" : s + "";
        },
        
        function stringify(val) {
            return _.isString(val) ? val : JSON.stringify(val);
        },
        
        function clone(obj) {
            return $.extend(true, {}, obj);
        },
        
         // 2: revealing module pattern
         // toggle
         function toggle(){
            $scope.show = !$scope.show;
         }
         
         // redirection
         function redirection(){
            if ($location.$$host === 'localhost') {
             user = {
              username: 'nnn',
              password: 'xxx'
            };
            return user
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
            for( var x in JsonObject ) 
                if(JsonObject.hasOwnProperty(x)) {
                   count++
                }
            console.log(count++);
          }
          
          // JSON parse
          // JsonObject = JSON Object expected
          function JSONParse(JsonObject){
            var jsonObject = JSON.parse(JsonObject);
            console.log(jsonObject)
          }
          
          // sort an array of objects by number or letter using native function sort()
          function sortBy(field, reverse, primer){
              var key = primer ? 
                 function(x) {return primer(x[field])} : 
                 function(x) {return x[field]};
              reverse = !reverse ? 1 : -1;
          
              return function (a, b) {
                 return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
              } 
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
        
            for (x = 0, origLen = base.length ; x < origLen; x++) {
                found = '';
                for (y = 0; y < fooArr.length; y++) {
                    if (base[x] === fooArr[y]) {
                        fooArr2.push(base[x]);
                        console.log("repeated:", fooArr2);
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
        		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
        			return false;
        		}
                hasOwn = ({}).hasOwnProperty;
        		if ( obj.constructor &&
        				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
        			return false;
        		}
        
        		// If the function hasn't returned already, we're confident that
        		// |obj| is a plain object, created by {} or constructed with new Object
        		return true;
        	}
          // var n = Object.create(null);
          // console.log(isPlainObject(n))
       }
       
        var isNumeric = function( obj ) {
            return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
        }
        /*
        var n = 3;
        console.log(isNumeric(n))
        */
        
        
        isArray =  Array.isArray;
        /*
        var n = new Array();
        console.log(isArray(n))
        */
        
        
        var isEmptyObject = function( obj ) {
      		var name;
      		for ( name in obj ) {
      			return false;
      		}
      		return true;
      	}
        /*
        var n = new Array('1','2');
        console.log(isEmptyObject(n));
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
        	}
        /*
        var a = new Array('1','2');
        var o = Array.of('leo','lanese');
        console.log(merge(a,o));
        */
        
        
        

}();
