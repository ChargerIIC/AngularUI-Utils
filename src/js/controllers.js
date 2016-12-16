'use strict';
angular.module('myApp.controllers', ['myApp.filters'])
    .controller('NgAnimateCtrl', ['$scope', function ($scope) {
        $scope.items = [
            { text: "call mum", completed: false },
            { text: "do laundry", completed: false }
        ];
        $scope.inputText = "";
        $scope.addItem = function () {
          var arrTodos = $scope.inputText.split(',');
          for(var i = 0; i < arrTodos.length; i++) {
               $scope.items.push({
                   text: arrTodos[i],
                   completed: false
               });
           }
          $scope.inputText = "";
        };
}])
.animation('.item', function() {
    return {
        enter: function(element, done) {
            element.css({'opacity': 0, 'margin-left': '-230px'});
            element.animate({'opacity': 1, 'margin-left': 0}, 500, done);
        },
        leave: function(element, className, done) {element.animate({'opacity': 0, 'margin-left': -230}, 500, done);
        }
    }
 });
