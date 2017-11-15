'use strict';

angular.module('myApp.aboutPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/aboutPage', {
            templateUrl: 'views/aboutPage/aboutPage.html',
            controller: 'aboutPageCtrl'
        });
    }])

    .controller('aboutPageCtrl', [ '$scope', function($scope) {
        $scope.employees = [
            {
                "name": "Tommy Wiseau",
                "jobTitle": "Daglig leder",
                "pictureUrl": "https://vignette.wikia.nocookie.net/geminidrake/images/7/71/Tommy-wiseau-face.png/revision/latest?cb=20121011031448",
                "information": "I did naat hit her, I did naat hit her, I did naat hit her, I did naat hit her, I did naat hit her," +
                "I did naat hit her, I did naat hit her, I did naat hit her, Oh Hi Mark"
            },
            {
                "name": "Anne Lise Brekke",
                "jobTitle": "Styreleder",
                "pictureUrl": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAQOAAAAJGMxNGZlYWRmLWM2NDYtNGIwNy1hOWRmLWViM2IzYjRhYmFjYg.jpg",
                "information": ":*"
            },
            {
                "name": "Trude Dreveland",
                "jobTitle": "Økonomiansvarlig",
                "pictureUrl": "https://pbs.twimg.com/profile_images/378800000601466756/e6cf59437332c25c7b2a4b0f498dc87a.jpeg",
                "information": "Hei."
            }
        ]
    }]);