const myApp = angular.module('myApp',['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    })
    
    .when('/feature', {
        templateUrl: 'pages/features.html',
        controller: 'featuresController'
    })
    
    .when('/pricing', {
        templateUrl: 'pages/pricing.html',
        controller: 'pricingController'
    })
    
    .when('/order', {
        templateUrl: 'pages/order.html',
        controller: 'orderController'
    })
});

myApp.controller('mainController',['$scope','$log',function($scope,$log){

    $scope.name="Home page";

}]);

myApp.controller('featuresController',['$scope','$log',function($scope,$log){

    $scope.name="features page";

}]);
myApp.controller('pricingController',['$scope','$log',function($scope,$log){

    $scope.name="pricing page";

}]);
myApp.controller('orderController',['$scope','$log',function($scope,$log){

    $scope.name="orders page";

}]);
