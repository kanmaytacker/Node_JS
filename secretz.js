var crypto=require('crypto');
var tar=require('tar');
var zlib=require('zlib');
var cipher=process.argv[2];
var pass=process.argv[3];
var through=require('through2');

var tar_parse=tar.Parse();
tar_parse.on('entry',function (e){
	if(e.type=='File'){
	
		var stream=crypto.createHash('md5',{encoding:'hex'});
		e.pipe(stream).pipe(through(function(buf){
			process.stdout.write(buf+' '+e.path+'\n');
	}))

		
	}
	
});

process.stdin.pipe(crypto.createDecipher(cipher,pass)).pipe(zlib.createGunzip()).pipe(tar_parse);
