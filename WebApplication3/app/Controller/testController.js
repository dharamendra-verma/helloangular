(function () {
    'use strict'

    myapp.controller('testController', ['$scope', TestController]);

    function TestController($scope) {

        $scope.title = 'Dharmendra';
        $scope.A = 10;
        $scope.B = 20;

        console.log('starting TestController');
        $scope.calculateSum = function () {
            $scope.R = $scope.A + $scope.B;
        };

        $scope.sayHello = function () {

            return 'hello';
        };

    };
})();

