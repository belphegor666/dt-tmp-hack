angular.module('default', [])

// super simple service
// each function returns a promise object
	.factory('default', ['$http',function($http) {
		return {
		get : function() {
			return $http.get('/signout');
		}
	}
}]);