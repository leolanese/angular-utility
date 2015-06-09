(function(){
  'use strict';
  
  myApp

    .directive('touppercase', function() {
      return {
        require: '?ngModel',
        replace: true,
        link: function(scope, element, attrs, modelCtrl) {
          modelCtrl.$parsers.push(function(n) {
            return n ? n.toUpperCase():'';
          });
          element.css('text-transform','uppercase');
        }
      };
    })
    
    .directive('tolowercase', function() {
      return {
        require: '?ngModel',
        replace: true,
        link: function(scope, element, attrs, modelCtrl) {
          modelCtrl.$parsers.push(function(n) {
            return n ? n.toLowerCase():'';
          });
          element.css('text-transform','lowercase');
        }
      };

    });

})();
