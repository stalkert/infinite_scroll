'use strict';
angular.module('test-task')
  .directive('allItems', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/items.html',
      controller: 'ItemCtrl',
      controllerAs: 'ctrl'


    };
  });

