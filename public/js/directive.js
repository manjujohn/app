app.directive("getId", function($window, usersData) {
    return {
        restrict: 'E',
        scope: {
            display: '=info',
            item: '=',
            err: '='
        },
        templateUrl: 'person.html',
        link: function(scope, element) {


            scope.saveDetails = function(display, item) {
               
                console.log(display);
                if (display.id != "") {

                	usersData.update({ id: display.id },display,function(data){
                		item.push(data);
                		 scope.err = "Updated succesfully";
                    	 console.log(data);
                    	 window.location.reload();
                	});
                    /*usersData.saveDetails(display)
                        .success(function(data) {
                            
                            scope.err = "Updated succesfully";
                            console.log("Updated succesfully");
                        }).
                    error(function(error) {
                        console.log(error.message);
                    });*/

                } else {
                	usersData.save(display,function(data){
                		item.push(display);
                		console.log("Inserted successfully");
                		scope.err = "Inserted successfully";

                	})
                    /*usersData.addDetails(display)
                        .success(function(data) {
                            console.log(item);
                            item.push(display);
                            scope.err = "Inserted successfully";
                            console.log("Inserted successfully");
                        }).
                    error(function(error) {
                        console.log(error.message);
                    });
*/

                }



            }

        }
    }

})
