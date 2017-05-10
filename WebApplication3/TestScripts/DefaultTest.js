describe("DefaultTest", function () {
    ///*
    var testVar = 1;
   

    beforeEach(module('app'));

    beforeEach(function () {
        module('app');
        testVar = 1;
    });

    var $scope, testController;

    //beforeEach(inject(function ($injector) {
    //    $rootScope = $injector.get('$rootScope');
    //    //$scope = $injector.get('$rootScope').$new();
    //    //TestController = $injector.get('$controller')('testController', { $scope: $scope });
    //    //testVar = 1;
    //}));

    //beforeEach(angular.mock.inject(function ($controller) {
    //    $scope = {}; //$rootScope.$new();
    //    testController = $controller('testController', {
    //        $scope: $scope
    //    });
    //}));


    it("Test Variable should be 1", function () {
        expect(testVar).toBe(1);
    });

    //it('Verify hello', function () {
    //    expect($scope.title).toBe('Dharmendra');
    //    //expect(TestController.title).toBe('Dharmendra');
    //});
    
   
})