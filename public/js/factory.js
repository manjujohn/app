
app.factory('usersData', ['$http','$resource', function($http, $resource) {

	return $resource('/api/users/:id', {
	    id: '@_id'
	}, {
	    update: {
	        method: 'PUT',
	        params: {
	            id: 'id'
	        }
	    },
	    getDetails : {
	    	method : 'GET',
	    	isArray: true
	    },
	    get: {
	    	method : 'GET',
	    	 params: {
	            id: 'id'
	        }
	    },
	    save : {
	    	method : 'POST'
	    }

	});
  /* 
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

  		return $http.put("/api/users/"+display.id,display);
	

  }
   return usersData;
*/
}]);

