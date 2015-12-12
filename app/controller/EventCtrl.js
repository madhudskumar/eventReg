'use strict';

eventsApp.controller('EventCtrl', function ($scope) {
    $scope.event = {
        name: 'My little angular app',
        version: '0.0.01',
        author: 'Madhu Kumar D S',
        email: 'madhudskumar@live.in',
        location:{
            address:"#4139 behind anjeneya temple road",
            city:"Davangere",
            state:"karnataka"
        },
        img: 'img/img.png',

        sessions:[
            {
                name:'my rampage',
                creator:'williams',
                duration:'1 hr',
                level:12,
                upVote:0
            },
            {
                name:'pesistance of life',
                creator:'williams',
                duration:'1 hr',
                level:21,
                upVote:0
            },
            {
                name:'live in the dom',
                creator:'williams',
                duration:'1 hr',
                level:4,
                upVote:0
            }
        ]
    };

    $scope.voteAdd = function(sessions){
        sessions.upVote++;
    };

    $scope.voteSub = function (sessions) {
        if(sessions.upVote == 0) sessions.upVote = 0;
        else sessions.upVote--;
    };

});
