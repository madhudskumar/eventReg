'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize','ngResource','ngCookies','ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/reg',
            {
               templateUrl:'templates/reg.html',
                controller:'EditEventCtrl'
            })
            .when('/event',
                {
                    //routeDemo:'hella manaken',
                    templateUrl:'templates/eventList.html',
                    controller:'AllEventCtrl'
                })
            .when('/event/:eventId',
                {
                    templateUrl:'templates/eventDetails.html',
                    controller:'EventCtrl'
                })
            .otherwise({redirectTo:'/event'})
        ;

        $locationProvider.html5Mode(true);
    });
    //.factory('cacheService', function ($cacheFactory) {
    //    return $cacheFactory('cacheService',{capacity:3});
    //});