angular.module('application', [])

// super simple service
// each function returns a promise object
	.factory('application', ['$http',function($http) {
		return {
		get : function() {
			return $http.get('/api/application');
		}
	}
}]);