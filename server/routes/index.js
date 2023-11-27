var express = require('express');
var md5 = require('md5');
const { upload } = require('./common/fileUploader');
const dbm = require('./common/dbm');
const e = require('express');
require('dotenv').config();
const jwt=require('jsonwebtoken')
const verifyToken=require('./common/verifyToken')
const jwt_decode=require('jwt-decode')


var router = express.Router();

router.post('/registration', upload.single('picture'), function (req, res, next) {
  rdata = req.body;
  var capApi='https://www.google.com/recaptcha/api/siteverify?secret='+process.env.RECAP_SECRET_KEY+'&response='+req.body.captcha;
  console.log(capApi);
  fetch(capApi,{method:'GET'}).then(apiRes=>apiRes.json()).
  then((data)=>{
    if(data.success){

      var cmd_reg = "insert into registration (name, gender,dob,email,mobno,course,address,pic_path) values('" + rdata.name + "','" + rdata.gender + "','" + rdata.dob + "','" + rdata.email + "','" + rdata.mobno + "','" + rdata.course + "','" + rdata.address + "','" + req.file.filename + "')";

      var cmd_login = "insert into login (email,password,utype) values('" + rdata.email + "','" + md5(rdata.password )+ "','user')";
    
      dbm.con.query(cmd_reg,function (err, recordset) {
        if (err) {
          console.log(err);
          var data = {
            success:false,
            message: 'Something went wrong, please come back later.'
          }
          res.send(data);
        }else{
          dbm.con.query(cmd_login,function (err, recordset) {
            if (err) {
              console.log(err);
            var data = {
                success:false,
                message: 'Something went wrong, please come back later.'
              }
            }else{
              console.log(recordset);
             var data = {
                success:true,
                message: 'Record inserted successfully.'
              }
            }   
            res.send(data);
        }); 
        }    
    });
      
    }else{
      var data= {
        'success':false,
        'message':'Human varifation failed',
        'ecode':data.error-codes
    }
    }
  
  }).catch(e=>{
    var data= {
        'success':false,
        'message':'Unable to verify captcha.',
        'ecode':e
    }
    res.send(data);
});
//res.send(data);

});


router.post('/login', upload.single(), function (req, res, next) {
  rdata = req.body;
      var cmd_login = "select * from login where email='"+rdata.email+"' and password='"+md5(rdata.password)+"' and utype='"+rdata.utype+"'";
      console.log(cmd_login);    
      dbm.con.query(cmd_login,function (err, recordset) {
            var data={}
            if (err) {
              console.log(err);
              data = {
                success:false,
                message: 'Something went wrong, please come back later.',
                e_code:err
              }
              res.send(data);
            }else{
              if (recordset.length==1){
                var email=rdata.email;
                jwt.sign({email},process.env.JWT_SECRET_KEY,{expiresIn:'10800s'},(err,token)=>{
                  if(err){
                    data = {
                    success:false,
                    message: 'Unable to login, please come back later.',
                    e_code:'Unable to generate jwt token. '+err
                    }
                    res.send(data);
                  }else{
                    data = {
                      success:true,
                      message: 'Login successful.',
                      email:rdata.email,
                      token:token
                    }
                      res.send(data);
                  }
                });
              }else{
                data = {
                  success:false,
                  message: 'Invalid user Id or Password.'
                  }
                  res.send(data);
              }
            }   
});
});

router.get('/userinfo',verifyToken, function (req, res, next) {
  var email=jwt_decode(req.token).email;
  var cmd="select * from registration where email='"+email+"'"
  console.log(cmd);
  dbm.con.query(cmd,function (err, recordset) {
    var result={}
    if (err) {
      console.log(err);
      result = {
        success:false,
        message: 'Something went wrong, please come back later.',
        e_code:err
      }
     }else{
       result = {
        "success":true,
        "data":recordset
      }
      }
    res.send(result);   
});
});


router.get('/getRegDetails',verifyToken, function (req, res, next) {
  var searchData=req.param("sdata");
  var cmd;
  if(searchData && searchData!==""){
    cmd="select * from registration where name like '%"+searchData+"%' or email like '%"+searchData+"%' or address like '%"+searchData+"%' or mobno like '%"+searchData+"%' or course like '%"+searchData+"%'"
  }else{
     cmd="select * from registration"
  }

  console.log(cmd);
  dbm.con.query(cmd,function (err, recordset) {
    var result={}
    if (err) {
      console.log(err);
      result = {
        success:false,
        message: 'Something went wrong, please come back later.',
        e_code:err
      }
     }else{
       result = {
        "success":true,
        "data":recordset
      }
      }
    res.send(result);   
});
});

router.get('/getEnquiry',verifyToken, function (req, res, next) {
  //var email=jwt_decode(req.token).email;
  var cmd="select * from enquiry"
  console.log(cmd);
  dbm.con.query(cmd,function (err, recordset) {
    var result={}
    if (err) {
      console.log(err);
      result = {
        success:false,
        message: 'Something went wrong, please come back later.',
        e_code:err
      }
     }else{
       result = {
        "success":true,
        "data":recordset
      }
      }
    res.send(result);   
});
});


router.post('/enquiry',upload.single(), function (req, res, next) {
  rdata = req.body;
  var cmd_enq = "insert into enquiry (name,email,mobno,message) values('" + rdata.name + "','" + rdata.email + "','" + rdata.mobno + "','" + rdata.message + "')";

  dbm.con.query(cmd_enq,function (err, recordset) {
    if (err) {
      console.log(err);
      var data = {
        success:false,
        message: 'Something went wrong, please come back later.'
      }
      res.send(data);
    }else{
      var data = {
        success:true,
        message: 'Enquiry saved successfully.'
      }
      res.send(data);
    }    
});
});

/* GET home page. */
router.get('/', function (req, res, next) {
  
  res.render('index', { title: 'Express' });
});

module.exports = router;
