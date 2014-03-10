angular.module('app', ['charts.ng.justgage']).controller('myController', function($scope) {
    $scope.value1 = 42;

    setInterval(function(){
        $scope.$apply(function() {
            $scope.valueGauge2 = getRandomInt(10, 90);
            $scope.valueGauge3 = getRandomInt(10, 90);
        });
    }, 1000);
});
