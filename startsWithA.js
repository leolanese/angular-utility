;(function () {
  angular
    .module('myApp')
    .filter('startsWithA', function () {
    
      return function (items) {
        return items.filter(function (item) {
          return /l/i.test(item.name.substring(0, 1));
        });
      };
      
    });

})();

/* borrowed from @toddmotto */

/*
// V
<div ng-app="app">
    <div ng-controller="PersonCtrl as person">
        <ul>
            <li ng-repeat="friend in person.friends | startsWithA">
                {{ friend }}
            </li>
        </ul>
    </div>
</div>

// C
.controller('PersonCtrl', function () {
    this.friends = [{
        name: 'Andrew'        
    }, {
        name: 'Will'
    }, {
        name: 'Mark'
    }, {
        name: 'Leo'
    }, {
        name: 'Tod'
    }];
});
*/
