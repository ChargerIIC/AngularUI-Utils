'use strict';
describe('controller specs', function() {
  var $scope;

  beforeEach(module('myApp.controllers'));

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controller('helloWorldCtrl', {$scope: $scope});
  }));

  it('should create "person" model with first name "Jane"', function() {
    expect($scope.person.firstName).toBe('Jane');
  });

  it('should create "person" model with last name "Doe"', function() {
    expect($scope.person.firstName).toBe('Doe');
  });
});
