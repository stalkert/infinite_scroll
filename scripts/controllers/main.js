'use strict';

/**
 * @ngdoc function
 * @name test-task.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test-task
 */

angular.module('test-task',['infinite-scroll'])
  .controller('MainCtrl', function ($scope) {
    var count = 1;
    $scope.arr = [0];
    $scope.loadMore = function () {
      $scope.arr.push(count++);
    };

  })
  .controller('ItemCtrl', function (Items) {
    var listItems = this;
    Items.getItemsAll().success(function (data) {
      listItems.items = data;
    });

  });

