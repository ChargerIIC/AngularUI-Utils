'use strict';
angular.module('myApp.filters', [])
    .filter('active', function() {
        return function(items) {
            var filteredItems = [];
            if(items != null && items.length > 0)
            {
              for (var i = 0; i < items.length; i++) {
                  if (!items[i].completed) {
                      filteredItems.push(items[i]);
                  }
              }
          }
            return filteredItems;
        }
    });
