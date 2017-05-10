(function () {
    'use strict';
    myapp.controller('newemployeecontroller', ['$scope', NewEmployeeController]);
    function NewEmployeeController($scope) {

        $scope.title = 'Add New Employee';

        $scope.employees = [];

        $scope.newEmployee = {
            Name: '',
            City: ''
        };

        $scope.AddEmployee = function() {
            $scope.employees.push({
                Name: $scope.newEmployee.Name,
                City: $scope.newEmployee.City
            });
        };
    };
})();