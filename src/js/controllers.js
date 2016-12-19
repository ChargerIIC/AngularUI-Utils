angular.module('myApp.controllers', []).controller('ViewIssueCtrl', function($scope, $route, $element, $timeout) {
  $scope.$watch(function() { return $route.current && $route.current.params.issue; },        function(newVal, oldVal) {
    $scope.showTab = !!newVal;
    $scope.issueId = newVal;
    if ($scope.showTab) {
      $timeout(function() {
        $element.find('a').click();
      }, 0, false);
    }
    });
    $scope.carousel = [
    { image: 'images/1.png' },
    { image: 'images/2.png' },
    { image: 'images/3.png' }
  ];
});
