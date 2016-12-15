'use strict';
angular.module('myApp.controllers', []).controller('NgGridCtrl',
['$scope', 'dataService', function ($scope, dataService) {
        $scope.data = dataService.data;
        $scope.selection = [];
        $scope.gridOptions = {
            data: 'data',
            columnDefs: [
                { name: 'lang', field: 'lang', displayName: 'Language', width: "45%" },
                { name: 'year', field: 'year', displayName: 'Year', width: "25%" },
                { name: 'decade',field: 'decade', displayName: 'Decade', width: "30%" }
            ],
            showGroupPanel: true,
            jqueryUIDraggable: true,
            selectedItems: $scope.selection,
            multiSelect: true,
            enableCellEdit: true
        };
}]);
