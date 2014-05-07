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
            .when('/donationlevels',
                {
                    controller:'SimpleController',
                    templateUrl:'partials/donationlevels.html'
                })
            .when('/donate',
                {
                    controller:'SimpleController',
                    templateUrl:'partials/donate.html'
                })
            .when('/2013sponsors',
            	{
            		controller:'SimpleController',
            		templateUrl:'partials/2013sponsors.html'
           	 	})
       	 	.when('/2014sponsors',
       	 	{
       	 		controller:'SimpleController',
       	 		templateUrl:'partials/2014sponsors.html'
       	 	})
       	 	.when('/wishlist',
       	 	{
       	 		controller:'SimpleController',
       	 		templateUrl:'partials/wishlist.html'
       	 	})
            .otherwise({ redirectTo: '/'});
});