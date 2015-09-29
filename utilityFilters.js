(function () {
  'use strict';

  angular.module('utilityFiltersApp')
  
    .filter('booleanToYesNo', [BooleanToYesNo])
    .filter('replaceCamelCaseToWordCaseAndSpaces', [replaceCamelCaseToWordCaseAndSpaces])         
    .filter('nullOrMessage', [nullOrMessage])
          
  function booleanToYesNo(n) {
      return n === true || n === 'true' ? 'Yes' : 'No';
  };
  // booleanToYesNo(true) // "Yes"
  
  function replaceCamelCaseToWordCaseAndSpaces(input) {
    return input.replace(/([A-Z])/g, ' $1').replace(/^./, function(n) {
      return n.toUpperCase();
    });
  };
  // camelCaseToWordCaseWithSpaces(leoLanese); // "Leo Lanese"
  
  function nullOrMessage(n, message) {
    return n || message;
  }
  // Returns a message if the value of the n is null.
  // IfNull(0,'leo'); // "leo"
  // IfNull(1,'leo'); // 1

})();  
  
