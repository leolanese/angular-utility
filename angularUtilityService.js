;(function(){
  'use strict';

    angular

      .module('myApp')

      .factory('angularUtilityService'), angularUtilityService);

      /* @ngInject */
      angularUtilityService.$inject = ['$location', '$scope'];

      ////
      function angularUtilityService($location, $scope){
        
        isMsie: function() {
            var match = /(msie) ([\w.]+)/i.exec(navigator.userAgent);
            return match ? parseInt(match[2], 10) : false;
        },
        
        isBlankString: function(str) {
            return !str || /^\s*$/.test(str);
        },
        
        escapeRegExChars: function(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        },
        
        isString: function(obj) {
            return typeof obj === "string";
        },
        
        isNumber: function(obj) {
            return typeof obj === "number";
        },
        
        isUndefined: function(obj) {
            return typeof obj === "undefined";
        },
    
        isUndefined: function(obj) {
            return typeof obj === "undefined";
        },
        
        isElement: function(obj) {
            return !!(obj && obj.nodeType === 1);
        },
        
        isJQuery: function(obj) {
            return obj instanceof $;
        },
        
        toStr: function toStr(s) {
            return _.isUndefined(s) || s === null ? "" : s + "";
        },
        
        clone: function(obj) {
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
          
      }

}();
