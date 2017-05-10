(function () {
    'use strict';

    myapp.factory('employeesrv1', ['$resource', employeeservice] );

    function employeeservice($resource) {
        return {
            //console.log ('employeesrv1 : constructor');
            getemployees: $resource('http://localhost:62574/api/employee')
        };
    };
})();