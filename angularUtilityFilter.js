;(function () {
  angular
    .module('ivmaApp')
    .filter('range', range);

  /* @ngInject */
  function range() {
    return function(input, min, max) {
      min = parseInt(min);
      max = parseInt(max);
      for (var i=min; i<=max; i++)
        input.push(i);
      return input;
    };
  }
})();

// limit the range of element display from an Array
// {{ [] | min:max }}
