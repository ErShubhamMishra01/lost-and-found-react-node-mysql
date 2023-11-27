var multer=require('multer');

var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/data/proPicture/');
    },
    filename:function(req,file,cb){
        cb(null, Date.now()+file.originalname);
    }
});
var upload=multer({storage:storage});

exports.upload=upload;

