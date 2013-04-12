
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.one = function(req, res){
	res.send('user: ' + req.params.number);
};