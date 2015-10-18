
var mongo=require('mongodb');
var mong=require('mongoose');
mong.connect('mongodb://localhost/nodetest');

var db=mong.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(callback){
	console.log('Connected');
});

var cats=mong.Schema({
	name: String
});


//var silence=new kitten({name: 'Silence'});
//console.log(silence.name);

cats.methods.speak=function(){
	var greet=this.name?"Meow name is"+this.name:"I don't have a name";
	console.log(greet);
};

var kitten=mong.model('kitten',cats);
var silence=new kitten({name: 'Silence'});
console.log(silence.name);
var fluffy=new kitten({name: 'fluffy'});

fluffy.save(function (err, fluffy) {
  	if (err) return console.error(err);
	fluffy.speak();
});

kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})

kitten.find({name:'fluffy'},function(){
	console.log('Found');
});

