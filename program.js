var mongo=require('mongodb').MongoClient;
var url ='mongodb://localhost:27017/learnyoumongo';
var number=parseInt(process.argv[2]);

mongo.connect(url,function(err,db){
	if(err)
		throw err;
	var collection =db.collection('parrots');
	collection.find({age:{$gt:+number}}).toArray(function(err,docs){
		if(err)
			throw err;
		console.log(docs);
		db.close();
	})
	
	
});
