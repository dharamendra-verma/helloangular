

(function () {
    'use strict';
    myapp.controller('EmployeeController', ['$scope', 'employeesrv', '$log',  EmployeeController] );

    function EmployeeController($scope, employeesrv, $log) {
    //myapp.controller('EmployeeController', ['$scope', '$log', EmployeeController]);

    //function EmployeeController($scope,  $log) {

        $scope.snippete = '<span style="color:red">hi there</span>';

        $scope.myStyle = {color:'red'};

        $scope.person = {
            Name: 'Dharmendra Verma',
            City: 'Kanpur',
            Loaction: {
                Address: 'C-304, Rail viahr',
                City: 'Gurgaon',
                Country : 'India'
            },
            imageURL: '/img/angularjs-logo.png',
            Company: 'Siemens'
        };

        getEmp();
        function getEmp() {

            //==> this is working
            employeesrv.getemployees().then(function(result){
                $scope.employees = result.data;
            })

            //==>This is working
           //console.log('EmployeeController:getEmp calling getemployees()');
           //employeesrv.getemployees()
           //     .success(function (emplss) {
           //         $scope.employees = emplss;
           //         console.log('EmployeeController:getEmp ');
           //     })
           //     .error(function (data, status, headers, config) {
           //         $log.warn(data, status, headers(), config);
           //     })

            //$scope.employees = employeesrv1.getemployees();
        };

        //getEmp1();
        //function getEmp1() {

        //    //==> this is working
        //    employeesrv.getemployees().then(function(result){
        //        $scope.employees = result.data;
        //    })

        //    //==>This is working
        //    //employeesrv.getemployee()
        //    //    .success(function (emp) { $scope.employee = emp; })
        //    //    .error(function (data, status, headers, config) {
        //    //        $log.warn(data, status, headers(), config);
        //    //    })

        //    //$scope.employees = employeesrv1.getemployees();
        //};

        $scope.updateCity = function(employee) {
            employee.City = 'newcity';
            var temp = 'asa';
        }
        //$scope.employees = employeesrv.getemployees();
    }
})();
