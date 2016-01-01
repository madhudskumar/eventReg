'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize','ngResource','ngCookies'])
    .factory('cacheService', function ($cacheFactory) {
        return $cacheFactory('cacheService',{capacity:3});
    });