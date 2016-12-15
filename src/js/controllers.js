'use strict';
angular.module('myApp.controllers', [])
.controller('CalCtrl', function ($scope) {
    $scope.events = [
        { title: 'All Day Event',
          start: moment().add('days', 3).format('L') },
        { title: 'Fun with AngularJS',
          start: moment().startOf('hour').format(),
          end: moment().endOf('hour').add('hour', 1).format(),
          allDay: false }
    ];
    $scope.eventSources = [$scope.events];

    $scope.dayClick = function(date){
        $scope.$apply(function() {
            $scope.events.push(
                { title: "new event",
                  start: date,
                  end: moment(date).add('hours', 1).format(),
                  allDay: false });
        });
    };
    $scope.remove = function(index) {
        $scope.events.splice(index,1);
    };

    $scope.uiConfig = {
        calendar:{
            height: 400,
            editable: true,
            header:{
                left: 'month agendaWeek agendaDay',
                center: 'title',
                right: 'today prev,next'
            },
            defaultView: 'agendaWeek',
            dayClick: $scope.dayClick,
            eventDrop: $scope.$apply,
            eventResize: $scope.$apply
        }
    };
  })
.controller('MapCtrl', function ($scope, $timeout) {
  $scope.myMarkers = [];

    $scope.mapOptions = {
        center: new google.maps.LatLng(37.782,-122.418),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    var cloudLayer = new google.maps.weather.CloudLayer();
    $timeout(function(){
        cloudLayer.setMap($scope.myMap);
    }, 1000);

    $scope.addMarker = function($event, $params) {
        $scope.myMarkers.push(new google.maps.Marker({
            map: $scope.myMap,
            position: $params[0].latLng
        }));
    };
    $scope.eventBinding = {'map-click':
       'addMarker($event, $params)'};
})
.controller('helloWorldCtrl', function ($scope, $timeout) {
    $scope.person = {
        firstName: "Jane",
        lastName: "Doe",
        //phone:'(999) 999-9999'
    };
    $scope.mask = "(999) 999-9999 ext 99";
    $scope.getModel = function () {
        return JSON.stringify($scope.person, undefined, 2);
    };
    var colors = ["#CCC", "#F77", "#9F9"];
    var activeColor = 0;

    $scope.modelStatus = function() {
        return { backgroundColor: colors[activeColor] };
    } ;

    $scope.focusCallback = function() {
        activeColor = 1;
    };

    $scope.blurCallback = function() {
        activeColor = 2;
        $timeout(function() { activeColor = 0; }, 2000);
    };

    $scope.helpKeyDown = function($event) {
      console.log($event);
      $scope.helpText = "Easy. Just enter your name."; //I know its a sample, but that is terrible help text
      $timeout(function() { $scope.helpText = "" }, 10000);
    };

    $scope.tooltip = function() {
        if(!$scope.person.hasOwnProperty("phone")) {
            return $scope.person.firstName + " has no phone?"
        }
        else { return "All good."}
    }
  });
