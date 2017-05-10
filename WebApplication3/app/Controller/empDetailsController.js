(function () {
    'use strict';
    myapp.controller('empDetailsController', ['$scope', 'employeesrv', EmployeeDetailController]);

    function EmployeeDetailController($scope, employeesrv) {

        console.log('Initializing controller...');
        //$scope.employee = {}
        //$scope.employee = { Name: 'Dharam', City: 'HHK', Id: 1 , DepartmentID: 1};
        //$scope.employee = { Name: 'Dharam', City: 'HHK', Id: 1 };

        getEmp();

        function getEmp() {
            
            employeesrv.getemployee()
                .success(function (emplss) 
                {
                    $scope.employee = emplss;
                    
                    console.log ('Employee Name :' + $scope.employee.Name);
                    //window.alert ($scope.employee.name);
                })
                .error(function (data, status, headers, config) {
                    $log.warn(data, status, headers(), config);
                })
        };
        }

    }
)();
