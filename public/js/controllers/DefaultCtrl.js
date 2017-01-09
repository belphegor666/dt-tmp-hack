angular.module('DefaultCtrl', []).controller('DefaultController', ['$scope', '$location', '$http', '$window', 'default', function($scope, $location, $http, $window, signout) {

    $scope.logout = function() {
        signout.get().success(function(data) {
            $window.location = "/";
        }).
        error(function(data) {})

    };
}]);
