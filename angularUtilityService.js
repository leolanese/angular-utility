;(function(){
  'use strict';

    angular

      .module('myApp')

      .factory('toggleNavService'), toggleNavService);

      /* @ngInject */
      angularUtilityService.$inject = ['$location', '$scope'];

      ////
      function toggleNavService($location, $scope){
      
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
          
          //

      }

})();
