(function () {
    'use strict';

    myapp.factory('employeesrv', ['$http', employeeservice] );

    function employeeservice($http) {

        function fetchEmployees() {

            //==>this works
            //return $http.get('http://localhost:62574/api/employee');

            //==>this works
            //return $http({ method: 'GET', url: 'http://localhost:62574/api/employee' });

            //==>this also works
            var employees = $http.get('http://localhost:62574/api/employee');
            return employees;
        }

        function fetchEmployee() {
            console.log('fetchEmployee...');
            return $http({ method: 'GET', url: 'http://localhost:62574/api/employee/3' });
        }
       
        return {
            getemployees: fetchEmployees,
            getemployee: fetchEmployee
           };
    
    };
})();