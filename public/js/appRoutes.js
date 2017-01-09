angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    var checkLoggedin = function($q, $timeout, $http, $window, $rootScope) {
        // Initialize a new promise
        var deferred = $q.defer();

        // Make an AJAX call to check if the user is logged in
        $http.get('/loggedin').success(function(user) {
            // Authenticated
            if (user !== '0')
            /*$timeout(deferred.resolve, 0);*/
                deferred.resolve();

            // Not Authenticated
            else {
                $rootScope.message = 'You need to log in.';
                //$timeout(function(){deferred.reject();}, 0);
                deferred.reject();
                $window.location = "/login";
            }
        });

        return deferred.promise;
    };


    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/main.html',
            controller:  'MainController', 
            resolve: {
                loggedin: checkLoggedin
            }
		})

        // cloud fabric page
        .when('/cloud-fabric', {
            templateUrl: 'views/cloud-canopy.html',
            controller:  'CanopyController', 
            resolve: {
                loggedin: checkLoggedin
            }
        })   

        // cloud fabric page
        .when('/news', {
            templateUrl: 'views/news.html',
            controller:  'NewsController', 
            resolve: {
                loggedin: checkLoggedin
            }
        })     

        
    // $locationProvider.html5Mode(true).hashPrefix('#');

}]);
         