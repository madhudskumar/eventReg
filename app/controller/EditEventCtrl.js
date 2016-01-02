'use strict';

eventsApp.controller('EditEventCtrl',
    function EditEventCtrl ($scope, eventData){
        $scope.event = {};

        console.log("got");

        $scope.saveEvent = function(event, newEventForm){
            if( newEventForm.$valid){
                eventData.save(event)
                    .then(
                        function (response) {
                            console.log('success ', response);
                        },
                        function (response) {
                            console.log('fail', response);
                        }
                    );
            }
        };

        $scope.cancel = function (event){
            window.location='/app/'
        }
});
