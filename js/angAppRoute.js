angular.module('angAppRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider

        //All Over World Routing
        .when('/', {
            templateUrl: '../Home.html',
            controller: 'HomeController'
        })
        .when('/countries', {
            templateUrl: '../pages/tables/data.html',
            controller: 'HomeController'
        })

        //India Routing
        .when('/indiaDashboard', {
            templateUrl: '../pages/india/india_dashboard.html',
            controller: 'indiaController'
        })
        .when('/indiatable', {
            templateUrl: '../pages/india/india_table.html',
            controller: 'indiaController'
        })
        .when('/indiaChart', {
            templateUrl: '../pages/chart/indiachart.html',
            controller: 'indiaController'
        })
        .when('/indiaState', {
            templateUrl: '../pages/india/state_dashboard.html',
            controller: 'stateController'
        })

        //FAQs
        .when('/FAQsEnglish', {
            templateUrl: '../pages/FAQ/FAQs.html'
        })
        .when('/FAQsHindi', {
            templateUrl: '../pages/FAQ/FAQsHindi.html'
        })

    $locationProvider.html5Mode(true);
}]);