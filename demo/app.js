angular.module('app', ['charts.ng.justgage']).controller('myController', function($scope) {
    $scope.valueGauge2 = 42;
    $scope.valueGauge3 = 11;

    setInterval(function(){
        $scope.$apply(function() {
            $scope.valueGauge2 = getRandomInt(10, 90);
            $scope.valueGauge3 = getRandomInt(10, 90);
        });
    }, 1000);
});
