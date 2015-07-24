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
