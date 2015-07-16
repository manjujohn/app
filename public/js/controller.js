angular.module('MyApp')
    .controller('MainController', ['$scope','$element', 'usersData',
        function ($scope,$element,usersData) {

    	$scope.items; 
    	$scope.idSelected ="";
    	$scope.details= {
			firstname: '',
			lastname: '',
			id: ''
		};
		$scope.err = "";

		usersData.getDetails(function(data){
			$scope.items = data;
			console.log("data:",data);
		})
		
    	/*usersData.getDetails()
    		.success(function(data){

    			$scope.items = data;
    			
    		}).
            error(function(error) {
                console.log(error.message);
            });*/
         $scope.getId = function (items)
         {
         	 $scope.idSelected = items._id;


         	 usersData.get({ id: items._id }, function(data) {
         	    	$scope.details.id = data._id;
         			$scope.details.firstname = data.firstname;
         			$scope.details.lastname = data.lastname;
         	  });
           		//   usersData.getId({id :items._id})
         		// .success(function(data){
         		// 	$scope.details.id = data._id;
         		// 	$scope.details.firstname = data.firstname;
         		// 	$scope.details.lastname = data.lastname;

         			
         		// }).
         		// error(function(error){
         		// 	console.log(error.message);
         		// })
         }
         $scope.addDetails= function(){
         	$scope.details.firstname ="";
         	$scope.details.lastname ="";
         	$scope.idSelected ="";
         	angular.element("#firstname").focus();
     

         }
           



}]);