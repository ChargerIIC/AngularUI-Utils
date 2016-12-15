'use strict';

angular.module('myApp', ['myApp.controllers', 'myApp.filters', 'ui.calendar'])
.value('uiJqConfig', {
        tooltip: {
            placement: 'bottom'
          }
        });
