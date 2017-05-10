
(function () {
    'use strict';
    myapp.controller('EditEmployee', ['$scope', 'employeesrv', EditEmployeeController]);

    function EditEmployeeController($scope, employeesrv) {
        $scope.saveemployee = function (employee) {
            window.alert('Save employee ' + employee.name);
        }
       
    }
})();
