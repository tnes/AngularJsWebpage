'use strict';

angular.module('myApp.appFactory', [])

    .factory('appFactory', ['$http', function($http) {


        var appData = [
            {
                "name": "Torkel Nes",
                "jobTitle": "Manager",
                "pictureUrl": "http://wiseheartdesign.com/images/articles/default-avatar.png",
                "information": "I manage the company and control that everything is done as it should.",
                "email": "torkel@leder.com",
                "phonenumber": "555 12 674"
            },
            {
                "name": "Jone Bjoa",
                "jobTitle": "Assisting cleaner",
                "pictureUrl": "http://wiseheartdesign.com/images/articles/default-avatar.png",
                "information": "I clean the company building for all its dirt, and empty the trash cans.",
                "email": "annelise@jone.no",
                "phonenumber": "12366632"
            },
            {
                "name": "Vidar Hartveit",
                "jobTitle": "Accountant",
                "pictureUrl": "http://wiseheartdesign.com/images/articles/default-avatar.png",
                "information": "I am the accountant of the firm. I make sure that everything is done correctly.",
                "email": "trude@trude.no",
                "phonenumber": "12343211"
            },
            {
                "name": "Sindre Eik deLange",
                "jobTitle": "Security manager",
                "pictureUrl": "http://wiseheartdesign.com/images/articles/default-avatar.png",
                "information": "I am responsible for the security at the firm and the website.",
                "email": "sindre@trude.no",
                "phonenumber": "12343211"
            }
        ];

        var appProjects = [
            {
                "name": "Kangaroo Haven",
                "shortDescription": "Apartments in Australia",
                "longDescription": "The new apartments is just finished in Australia. They were sold out in weeks due to the design of Sindre Eik deLange.",
                "pictureUrl": "http://bengfa.info/wp-content/uploads/2016/06/top-famous-architectural-buildings-with-zaha-hadid-unveils-first-building-in-new-york-city-business-insider-14-150x150.jpg"

            },
            {
                "name": "Fish Chop Suey",
                "shortDescription": "The aquarium in Singapore",
                "longDescription": "This is the new aquarium designed by none others than Jone and Vidar. It has been a great success.",
                "pictureUrl": "http://bengfa.info/wp-content/uploads/2016/06/best-architectural-buildings-designs-with-amazing-concept-architecture-concept-tweet-this-bookmark-this-on-9-150x150.jpg"
            },
            {
                "name": "Treet 2.0",
                "shortDescription": "New age house in Sweden",
                "longDescription": "This modern house was created by Torkel. Beautiful elements to match the nature.",
                "pictureUrl": "https://spmarchitecture.com/wp-content/uploads/2016/01/modern-residential-building-architectural-style-104627-150x150.jpg"
            }
        ];

        var appMessages = [];

        function getXmlData(){
           return $http({
                method  : 'GET',
                url     : 'http://localhost:8080/WebAuctionApp/webresources/beans.product',
                timeout : 10000,
                params  : {},  // Query Parameters (GET)
                transformResponse : function(data) {
                    // string -> XML document object
                    return $.parseXML(data);
                }
        });
        }

        function getMessages() {
            return appMessages;
        }

        function getData() {
            return appData;
        }

        function getProjects() {
            return appProjects;
        }

        return {
            getXmlData: getXmlData,
            getData: getData,
            getProjects: getProjects,
            getMessages: getMessages
        }
    }]);
