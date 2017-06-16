angular.module('app', []);
angular.module('app').controller('testCtrl', function($scope) {
    $scope.jobs = [
        { title: 'Sales Person 1', description: 'you will fight dragons'},
        { title: 'Sales Person 2', description: 'you will fight dragons'},
        { title: 'Sales Person 3', description: 'you will fight dragons'},
    ];
});