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
         function.toggle = function(){
            $scope.show = !$scope.show;
         }
         
         // redirection
         function.redirection = function(){
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
          
          //
          
          
      }

})();
