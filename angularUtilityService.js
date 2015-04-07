;(function(){
  'use strict';

    angular

      .module('myApp')

      .factory('angularUtilityService'), angularUtilityService);

      /* @ngInject */
      angularUtilityService.$inject = ['$location', '$scope'];

      ////
      function angularUtilityService($location, $scope){
      
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
              console.log(arr);           
              return arr;            
          }
          
          // Converting Array to JSON
          function convertJSONtoArray(){
            var arr = Object.keys(jo).map(function(k) { return jo[k] });
            console.log(arr)
            return arr;
          }
          /*
          var jo = {"0":"1","1":"2","2":"3","3":"4"};
          */
          
      }

})();
