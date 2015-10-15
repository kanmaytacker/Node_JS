var mod=require('./filtered_ls.js');
mod(process.argv[2],process.argv[3],function(err,files){for(var i=0;i<files.length;i++){console.log(files[i]);}});
