'use strict';
angular.module('myApp.controllers', []).controller('NgGridCtrl',
  ['$scope', 'dataService', function ($scope, dataService) {

   console.log(dataService.data);
}]);
