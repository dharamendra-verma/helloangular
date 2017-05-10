
var myapp;

(function () {
    'use strict';
   
    myapp = angular.module('app', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('test');

            $stateProvider
            .state ('test', {
                url: '/test',
                templateUrl: 'app/template/testhtml.html',
                controller: 'testController'
            })
            .state('test1', {
                url: '/test1',
                templateUrl: 'app/template/testhtm1.html',
                controller: 'testController1'
            })
            .state('employeelist', {
                url: '/employeelist',
                templateUrl: 'app/template/employeeList.html',
                controller: 'EmployeeController'
            })

        //$qProvider.errorOnUnhandledRejections(false);
    });

    
    
    
    
    //myapp = angular.module('app', ['ngRoute'])
    //      .config(function ($routeProvider) { 
    //          $routeProvider.when("/employee",
    //            {
    //                templateUrl: "app/template/employeeDetail.html",
    //                controller: 'empDetailsController'
    //            })
    //          .when("/employeelist", {
    //              templateUrl: "app/template/employeeList.html",
    //              controller: 'EmployeeController'
    //          })
    //        .when("/newemployee", {
    //            templateUrl: "app/template/newemployee.html",
    //            controller: 'newemployeecontroller'
    //        })
    //        .when("/test", {
    //            templateUrl: "app/template/testhtml.html",
    //            controller: 'testController'
    //        })
    //        .when("/", {

    //            templateUrl: "app/template/testhtm1.html",
    //            controller: 'testController1',
    //            controllerAs: 'controller'

    //            //templateUrl: "app/template/testhtml.html",
    //            //controller: 'testController'

    //            //templateUrl: "app/template/employeeList.html",
    //            //controller: 'EmployeeController'
    //        });
     //     });
    


})();
