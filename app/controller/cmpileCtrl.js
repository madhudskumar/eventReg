'use strict';

eventsApp.controller('cmpileCtrl',
    function cmpileCtrl ($scope, $compile, $parse) {

        var fn = $parse('1+2');

        console.log(fn());

        var getter = $parse('event.name');

        var c1 = {event:{name:'mad'}};
        var c2 = {event:{name:'hu'}};

        console.log(getter(c1) + getter(c2));

        console.log(getter(c2, c1));  // local overlapping of a parser

        var setter = getter.assign;

        setter(c2,'Kumar');

        console.log(getter(c2));

        $scope.appendDivToElement = function(markup) {
            return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
        }
    }
);