var fs=require('fs');
var path=require('path');

module.exports=function(dir_name,file_ext,callback){
	file_ext+=".";
	var array=[];
	fs.readdir(dir_name,function(err,list){
		if(err)
			callback(err,null);
		else{
			list.forEach(function(file){
			if(path.extname(file)==file_ext)
				array.push(file);		
			
			});
			
			callback(null,result);
		}
	});
};
