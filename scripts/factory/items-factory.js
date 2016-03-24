'use strict';
angular.module('test-task')
  .factory('Items', function ItemsFactory($http) {

    return {
      getItemsAll: function () {
        return $http.get('data/items.json');
      }
    };
  });
