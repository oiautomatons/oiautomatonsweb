/**
 * Created by gjbelang on 3/5/14.
 */
var automatonsApp = angular.module('automatonsApp',[]);

automatonsApp.config(function ($routeProvider){
    $routeProvider
            .when('/',
                {
                    controller: 'SimpleController',
                    templateUrl:'partials/main.html'
                })
            .when('/about',
                {
                    controller:'SimpleController',
                    templateUrl:'partials/about.html'
                })
            .when('/blog',
                {
                    controller:'SimpleController',
                    templateUrl:'partials/construction.html'
                })
            .when('/2013bios',
                {
                    controller:'SimpleController',
                    templateUrl:'partials/2013bios.html'
                })
            .when('/2012bios',
                {
                    controller:'SimpleController',
                    templateUrl:'partials/2012bios.html'
                })
            .when('/construction',
                {
                    controller:'SimpleController',
                    templateUrl:'partials/construction.html'
                })
            .otherwise({ redirectTo: '/'});
});