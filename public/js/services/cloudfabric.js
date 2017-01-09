angular.module('cloudfabric', [])

// super simple service
// each function returns a promise object
	.factory('cloudfabric', ['$http',function($http) {
		return {
		get : function() {
			return $http.get('/api/cloudfabric');
		}
	}
}]);