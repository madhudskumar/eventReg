'use strict';

//services Starts with loweCases

eventsApp.factory('eventData', function eventData ($resource, $q){
    var resource = $resource('/app/data/event/:id.json',{id:'@id'});

    return {
        getEvent: function (eventId) {
            var deffered = $q.defer();

            resource
                .get({id:eventId},
                    function (event) {
                        deffered.resolve(event);
                    },
                    function (response) {
                        deffered.reject(response);
                    }
                );

            return deffered.promise;
        },

        getAll: function () {
            var deffered = $q.defer();

            resource
                .get({id:1},
                    function (event) {
                        deffered.resolve(event);
                    },
                    function (response) {
                        deffered.reject(response);
                    }
                );

            return deffered.promise;
        },

        save: function (event) {
            var deferred = $q.defer();

            event.id = 999;
            resource.save(event,
                function (response) {
                    deferred.resolve(response);
                },
                function (response) {
                    deferred.reject(response);
                }
            );

            return deferred.promise;
        }
    }
});