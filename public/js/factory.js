
app.factory('usersData', ['$http','$resource', function($http, $resource) {
   
    var usersData= {};

  usersData.getDetails = function () {
        return $http.get("/api/users");
    };
  usersData.getId = function (id){
  		return $http.get("/api/users/"+id);
  }
  usersData.addDetails = function (display){
  		return $http.post("/api/users",display);
  }
  usersData.saveDetails = function (display){

  		//return $http.put("/api/users/"+display.id,display);
	return $resource('/api/users:id', {
	    bookId: '@display.id'
	}, {
	    saveDetails: {
	        method: 'PUT',
	        params: {
	            bookId: '@display.id'
	        },
	        isArray: false
	    }

	});

  }
   return usersData;

}]);

