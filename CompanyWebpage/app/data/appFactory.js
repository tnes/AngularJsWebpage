'use strict';

angular.module('myApp.appFactory', [])

    .factory('appFactory', function() {
        var appData = [
            {
                "name": "Torkel Nes",
                "jobTitle": "Daglig leder",
                "pictureUrl": "http://wiseheartdesign.com/images/articles/default-avatar.png",
                "information": "Daglig leder i company",
                "email": "torkel@leder.com",
                "phonenumber": "555 12 674"
            },
            {
                "name": "Jone Bjoa",
                "jobTitle": "Assisterende vaskehjelp",
                "pictureUrl": "http://wiseheartdesign.com/images/articles/default-avatar.png",
                "information": "Vaskehjelp på huset. Stor Skal Vi Danse-entusiast. Heia Drevland",
                "email": "annelise@jone.no",
                "phonenumber": "12366632"
            },
            {
                "name": "Vidar Hartveit",
                "jobTitle": "Økonomiansvarlig",
                "pictureUrl": "http://wiseheartdesign.com/images/articles/default-avatar.png",
                "information": "Økonomiansvarlig er jeg",
                "email": "trude@trude.no",
                "phonenumber": "12343211"
            },
            {
                "name": "Sindre Eik deLange",
                "jobTitle": "Nestleder",
                "pictureUrl": "http://wiseheartdesign.com/images/articles/default-avatar.png",
                "information": "Nestleder er jeg",
                "email": "sindre@trude.no",
                "phonenumber": "12343211"
            }
        ];

        function getData() {
            return appData;
        }

        return {
            getData: getData
        }
    });
