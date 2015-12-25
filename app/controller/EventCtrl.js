'use strict';

eventsApp.controller('EventCtrl',
    function EventCtrl ($scope, eventData, $anchorScroll) {
        $scope.snippet = '<span class="container" style="color: darkslateblue;">tabs</span>';

        $scope.boolVal = true;

        $scope.sortOrder = "name";

        $scope.event = eventData
            .getEvent()
            .then(
                function (event) {
                    $scope.event = event;
                    console.log(event);
                },
                function (response) {
                    console.log(response);
                }
            );



        $scope.voteAdd = function(sessions,event){
            sessions.upVoteCount++;
        };

        $scope.voteSub = function (sessions) {
            if(sessions.upVote == 0) sessions.upVoteCount = 0;
            else sessions.upVote--;
        };

        $scope.invert = function(event){
            this.boolVal = !this.boolVal;
        };

        $scope.scroll = function(){
            $anchorScroll();
        };

        $scope.myStyle = {color:'lightPink'};
        $scope.myClass = 'lightPink';
        $scope.btnDisabled = true;
    });
