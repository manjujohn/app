app.directive("getId", function($window, usersData) {
    return {
        restrict: 'E',
        scope: {
            display: '=',
            item: '=',
            err: '='
        },
        templateUrl: 'person.html',
        link: function(scope, element) {


            scope.saveDetails = function(display, item) {
                //console.log("id"+display.id);
                console.log(display);
                if (display.id != "") {
                    usersData.saveDetails(display)
                        .success(function(data) {
                            
                            scope.err = "Updated succesfully";
                            console.log("Updated succesfully");
                        }).
                    error(function(error) {
                        console.log(error.message);
                    });

                } else {
                    usersData.addDetails(display)
                        .success(function(data) {
                            console.log(item);
                            item.push(display);
                            scope.err = "Inserted successfully";
                            console.log("Inserted successfully");
                        }).
                    error(function(error) {
                        console.log(error.message);
                    });


                }



            }

        }
    }

})
