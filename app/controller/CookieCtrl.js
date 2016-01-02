'use strict';

eventsApp.controller('CookieCtrl',
    function CookieCtrl ($scope, $cookieStore) {
        $scope.event = {id:1,name:"myEvent"};

        $scope.saveEventToCookie = function (event) {
            $cookieStore.put('event' ,event);
        };

        $scope.getEventToCookie = function () {
            console.log($cookieStore.get('event'));
        };

        $scope.removeEventToCookie = function () {
            $cookieStore.remove('event');
        };
    }
);