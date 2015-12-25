'use strict';

eventsApp.controller('cmpileCtrl',
    function cmpileCtrl ($scope, $compile) {
        $scope.appendDivToElement = function(markup) {
            return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
        }
    }
);