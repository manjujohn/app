var express = require('express');
var router = express.Router();
var User = require('../models/user');
var expressValidator = require('express-validator');
/* GET users listing. */
router.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
  next();
});
router.route('/')


.post(function(req,res, next){

	var details = req.body;
    var user = new User(details);       
    console.log(details);

    req.checkBody('firstname', 'Firstname cannot be empty').notEmpty();
    req.checkBody('lastname', 'Lastname cannot be empty').notEmpty();
  
    var errors = req.validationErrors();
      if (errors) {
        res.json(400,{"First name or last name could not be empty":errors});
        return;
      }
          user.save(function(err) {
        if (err) {
        	console.error(err);
        	res.status(500);
        	res.json({error: "Internal Error Occured"});
        }

        res.json({ message: 'New person added!' });
    });
    
})

.get(function(req,res, next){
	   User.find(function(err, user) {
        if (err){
            res.send(err);
        	}
       
       if(user){
        	res.json(user);
        }
        else{
        	res.json({message: 'No such data!' })
        }
    });

})

router.route('/:id')

.get(function(req, res, next) {
    User.findOne({ _id: req.params.id}, function(err, user) {
        if (err)
            res.send(err);
        if(user){
        	res.json(user);
        }
        else{
        	res.json({message: 'No such data!' })
        }
        
    });
})
.put(function(req,res, next){

	 User.findById(req.params.id, function(err, user) {
        if (err) res.send(err);
     
        if(user){

            for (prop in req.body) {
             user[prop] = req.body[prop];
            }
            req.checkBody('firstname', 'Firstname cannot be empty').notEmpty();
            req.checkBody('lastname', 'Lastname cannot be empty').notEmpty();
            
            var errors = req.validationErrors();
              if (errors) {
                res.json(400,{"Firstname or lastname couldnot be empty":errors});
                return;
              }
         	
        console.log(user);
            user.save(function(err) {
                if (err) res.send(err);

                res.json({ message: 'Person data updated!' });
            });    
        	
        } else {
        	res.json({ message: 'No such data' });       
        }

		});

})

module.exports = router;
