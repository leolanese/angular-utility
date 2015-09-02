(function(){
  'use strict';
  
  myApp
  
     // Re-usable maxlength, note that we still can use use the native HTML5 maxlength="2" or AJS way ng-maxlength="2"
    .directive('maxlength', function() {
      return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
          var maxlength = Number(attrs.maxlength);
          function fromUser(text) {
            if (text.length > maxlength) {
              var transformedInput = text.substring(0, maxlength);
              ngModelCtrl.$setViewValue(transformedInput);
              ngModelCtrl.$render();
              return transformedInput;
            }
            return text;
          }
          ngModelCtrl.$parsers.push(fromUser);
        }
      };
    })   

    // to upper case
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
    
    // to lower case
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

    })
    
    // LongPress event
    // HTML: <a long-press></a>
    .directive('longPress', function ($timeout, $parse) {
    return {
      restrict: 'A',
      template: '{{message}}',

      link: function (vm, elm, attrs, ctrl) {
        console.error("--> directive loaded! (touch event not click)");
       // vm.message = "CANT TOUCH THIS!";

        vm.timerStart = 0;
        vm.minimumSeconds = 3000;

        // Locally scoped variable that will keep track of the press
        elm.bind('touchstart', function (evt) {
          console.error("|--> CLICK", evt.type, vm.longPress, evt.timeStamp);
         // vm.message = "OK <--- you touch it";
          vm.timerStart = evt.timeStamp;
        });

        elm.bind('touchend', function (evt) {
          vm.timerEnd = evt.timeStamp;
          vm.hold = vm.timerStart - vm.timerEnd;

          if ( Math.abs(vm.hold) < vm.minimumSeconds ) { // evt.type === 'touchend'
            evt.stopPropagation();
            evt.preventDefault();
           // vm.message = "CANT TOUCH THIS!";
            console.error("EVENT NOT CANCEL!!!",  evt.type,  vm.longPress, evt.timeStamp);
            return true;
          } else {
            //vm.message = "Urgent Assistance CANCEL!";
            console.error("-->| out CLICK. Urgent Assistance CANCEL",  evt.type,  vm.longPress, evt.timeStamp);
          }
        });
      }
    };

  });


})();
