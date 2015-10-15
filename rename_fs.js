var fs=require('fs');
var path=require('path');
var split=require('split');
var file_path=process.argv[2];
var ext='.'+ process.argv[3];
var count=1;

fs.readdir(file_path,function(err,list){
	list.forEach(function (file){
		if(path.extname(file)==ext){
			var file_split=file.split(".");
			old_path=file_path+file;
			new_path=file_path+file_split[0]+count+ext;
			count++;	
			console.log("Old Path :"+old_path);
			console.log(new_path);
			fs.rename(old_path,new_path,function (err){
				if(err)
					console.error("Error :"+err);
				else
					console.log("New Path:"+new_path);
			});
			
		}
	}); 
	
});
