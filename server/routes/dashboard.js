var express = require('express');
var md5 = require('md5');
const { upload } = require('./common/fileUploader');
const dbm = require('./common/dbm');
const e = require('express');
require('dotenv').config();
const jwt = require('jsonwebtoken')
const verifyToken = require('./common/verifyToken')
const jwt_decode = require('jwt-decode')
var nodemailer = require('nodemailer');

var router = express.Router();

router.post('/addNotification', verifyToken, upload.single(), function (req, res, next) {
    try {
        rdata = req.body;
        var cmd = "insert into notification (notification) values('" + rdata.notification + "')";
        dbm.con.query(cmd, function (err, recordset) {
            if (err) {
                console.log(err);
                var data = {
                    success: false,
                    message: 'Something went wrong, please come back later.'
                }
                res.send(data);
            } else {
                var data = {
                    success: true,
                    message: 'Notification saved successfully.'
                }
                res.send(data);
            }
        });
    } catch (error) {
        console.log(error);
    }
});


router.get('/getNotification', function (req, res, next) {
    try {
        //var email=jwt_decode(req.token).email;
        var cmd = "select * from notification"
        console.log(cmd);
        console.log('THis is test message for logger');
        dbm.con.query(cmd, function (err, recordset) {
            var result = {}
            if (err) {
                console.log(err);
                result = {
                    success: false,
                    message: 'Something went wrong, please come back later.',
                    e_code: err
                }
            } else {
                result = {
                    "success": true,
                    "data": recordset
                }
            }
            res.send(result);
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/deleteNotification', verifyToken, upload.single(), function (req, res, next) {
    try {
        rdata = req.body;
        var email = jwt_decode(req.token).email;
        var tcmd = "select utype from login where email='" + email + "'"
        var utype = ""
        dbm.con.query(tcmd, function (err, recordset) {
            if (!err) {
                utype = JSON.stringify(recordset[0].utype)
                if (utype) {
                    var cmd = "delete from notification where id='" + rdata.id + "'"
                    console.log(cmd);
                    dbm.con.query(cmd, function (err, recordset) {
                        var result = {}
                        if (err) {
                            console.log(err);
                            result = {
                                success: false,
                                message: 'Something went wrong, please come back later.',
                                e_code: err
                            }
                        } else {
                            result = {
                                "success": true,
                                "data": recordset
                            }
                        }
                        res.send(result);
                    });
                }

            } else {
                console.log(err);
            }
        });
    } catch (error) {
        console.log(error);
    }
});


router.post('/changePassword', verifyToken, upload.single(), function (req, res, next) {
    var email = jwt_decode(req.token).email;
    try {
        rdata = req.body;
        var cmd = "update login set password='" + md5(rdata.newPass) + "' where email='" + email + "' and password='" + md5(rdata.oldPass) + "'";
        console.log(cmd);
        console.log(rdata.oldPass);
        console.log(rdata.newPass);
        dbm.con.query(cmd, function (err, recordset) {
            if (err) {
                console.log(err);
                var data = {
                    success: false,
                    message: 'Something went wrong, please come back later.'
                }
                res.send(data);
            } else {
                if (recordset.affectedRows > 0) {
                    var data = {
                        success: true,
                        message: 'Password changes successfully.'
                    }
                    res.send(data);
                } else {
                    var data = {
                        success: false,
                        message: 'Unable to change password, please try again with valid current passwod.'
                    }
                    res.send(data);
                }
                console.log(recordset);

            }
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/submitFeedback', verifyToken, upload.single(), function (req, res, next) {
    try {
        var email = jwt_decode(req.token).email;
        rdata = req.body;
        var cmd = "insert into feedback (email,feedback, topic ) values('" + email + "', '" + rdata.feedback + "','" + rdata.topic + "')";
        dbm.con.query(cmd, function (err, recordset) {
            if (err) {
                console.log(err);
                var data = {
                    success: false,
                    message: 'Something went wrong, please come back later.'
                }
                res.send(data);
            } else {
                var data = {
                    success: true,
                    message: 'Thanks for your valuable, your feedback submited successfully.'
                }
                res.send(data);
            }
        });
    } catch (error) {
        console.log(error);
    }
});


router.get('/getFeedback', function (req, res, next) {
    try {
        var cmd = "select * from feedback join registration on feedback.email=registration.email"
        console.log(cmd);
        dbm.con.query(cmd, function (err, recordset) {
            var result = {}
            if (err) {
                console.log(err);
                result = {
                    success: false,
                    message: 'Something went wrong, please come back later.',
                    e_code: err
                }
            } else {
                result = {
                    "success": true,
                    "data": recordset
                }
            }
            res.send(result);
        });
    } catch (error) {
        console.log(error);
    }
});


router.post('/sendMail', verifyToken, upload.single(), function (req, res, next) {
    try {
        rdata = req.body;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_SENDER_ID,
                pass: process.env.MAIL_SENDER_TOKEN
            }
        });
        var mailOptions = {
            from: process.env.MAIL_SENDER_ID,
            to: rdata.to,
            subject: rdata.subject,
            text: rdata.text
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log("err " + error);
                var data = {
                    success: false,
                    message: 'Unable to send email. Something went wrong, please come back later.'
                }
                res.send(data);
            } else {
                console.log('Email sent: ' + info.response);
                var cmd = "insert into email (receiver,subject, text ) values('" + rdata.to + "', '" + rdata.subject + "','" + rdata.text + "')";
                dbm.con.query(cmd, function (err, recordset) {
                    if (err) {
                        console.log(err);
                        var data = {
                            success: false,
                            message: 'Something went wrong, please come back later.'
                        }
                        res.send(data);
                    } else {
                        var data = {
                            success: true,
                            message: 'EMail sended successfully.'
                        }
                        res.send(data);
                    }
                });
            }
        });
        // res.send("all");
    } catch (error) {
        console.log("catch " + error);
    }
});

router.get('/getMail', function (req, res, next) {
    try {
        var cmd = "select * from email"
        console.log(cmd);
        dbm.con.query(cmd, function (err, recordset) {
            var result = {}
            if (err) {
                console.log(err);
                result = {
                    success: false,
                    message: 'Something went wrong, please come back later.',
                    e_code: err
                }
            } else {
                result = {
                    "success": true,
                    "data": recordset
                }
            }
            res.send(result);
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/addLostMaterial', verifyToken, upload.single(), function (req, res, next) {
    try {
        rdata = req.body;
        var email = jwt_decode(req.token).email;
        var cmd = "insert into lostmaterial (name, category, date, time,place, ecost, oemail, mstatus,fpersonname,fpersondetails, rewartstatus,rewarddetails) values('" + rdata.name + "','" + rdata.category + "','" + rdata.date + "','" + rdata.time + "','" + rdata.place + "','" + rdata.ecost + "','" + email + "','lost','','','no','')";
        dbm.con.query(cmd, function (err, recordset) {
            if (err) {
                console.log(err);
                var data = {
                    success: false,
                    message: 'Something went wrong, please come back later.'
                }
                res.send(data);
            } else {
                var data = {
                    success: true,
                    message: 'Lost material added successfully.'
                }
                res.send(data);
            }
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/updateLF', verifyToken, upload.single(), function (req, res, next) {
    try {
        rdata = req.body;
        var email = jwt_decode(req.token).email;

        if(rdata.loststatus!=="")
        {
            var cmd = "update lostmaterial set mstatus='"+rdata.loststatus+"' where id='"+rdata.id+"'";
            dbm.con.query(cmd);
            console.log(cmd);
        }
       
        if(rdata.fpersonname!=="")
        {
            var cmd = "update lostmaterial set fpersonname='"+rdata.fpersondname+"' where id='"+rdata.id+"'";
            dbm.con.query(cmd);
            console.log(cmd);
        }
        if(rdata.fpersondetails!=="")
        {
            var cmd = "update lostmaterial set fpersondetails='"+rdata.fpersondetails+"' where id='"+rdata.id+"'";
            dbm.con.query(cmd);
            console.log(cmd);
        }
        if(rdata.rewartstatus!=="")
        {
            var cmd = "update lostmaterial set rewartstatus='"+rdata.rewardstatus+"' where id='"+rdata.id+"'";
            dbm.con.query(cmd);
            console.log(cmd);
        }
        if(rdata.rewarddetails!=="")
        {
            var cmd = "update lostmaterial set rewarddetails='"+rdata.regdetails+"' where id='"+rdata.id+"'";
            dbm.con.query(cmd);
            console.log(cmd);
        }
        var data = {
            success: true,
            message: 'Record Updated successfully.'
        }
        res.send(data);

    } catch (error) {
        var data = {
            success: false,
            message: 'Sorry Unable to update record.'
        }
        res.send(data);
        console.log(error);
    }
});

router.get('/getLostMaterial', function (req, res, next) {
    try {
        var cmd = "select * from lostmaterial"
        console.log(cmd);
        dbm.con.query(cmd, function (err, recordset) {
            var result = {}
            if (err) {
                console.log(err);
                result = {
                    success: false,
                    message: 'Something went wrong, please come back later.',
                    e_code: err
                }
            } else {
                result = {
                    "success": true,
                    "data": recordset
                }
            }
            res.send(result);
        });
    } catch (error) {
        console.log(error);
    }
});


router.get('/getDashboardData', verifyToken, upload.single(), function (req, res, next) {
    try {  
    //    no need to write
        var email = jwt_decode(req.token).email;
        var cmd = "select utype from login where email='" + email + "'"
        var utype = ""
        dbm.con.query(cmd, function (err, recordset) {
            if (!err && JSON.stringify(recordset[0].utype)) {
                utype = JSON.stringify(recordset[0].utype);
                console.log("UTYPE=" + utype);
        //end no need to write
                var cmd = "select count(*) as tusers from registration"
        dbm.con.query(cmd, function (err, rrecordset) {
            if (!err) {
                const tusers = JSON.stringify(rrecordset[0].tusers);
                var cmd = "select count(*) as tenq from enquiry"
                dbm.con.query(cmd, function (err, rrecordset) {
                    if (!err) {
                        var tenq = JSON.stringify(rrecordset[0].tenq);
                        var cmd = "select count(*) as tfeed from feedback"
                        dbm.con.query(cmd, function (err, rrecordset) {

                            if (!err) {
                                var tfeed = JSON.stringify(rrecordset[0].tfeed);
                                var cmd = "select count(*) as tnoti from notification"
                                dbm.con.query(cmd, function (err, rrecordset) {
        
                                    if (!err) {
                                        var tnoti = JSON.stringify(rrecordset[0].tnoti);
                                        var cmd = "select count(*) as tlost from lostmaterial"
                                        dbm.con.query(cmd, function (err, rrecordset) {
                
                                            if (!err) {
                                                var tlost = JSON.stringify(rrecordset[0].tlost);
                                                console.log("count users =" + tusers)
                                                console.log("count enq=" + tenq)
                                                console.log("count feed=" + tfeed)
                                                console.log("count lost=" + tlost)
                                                var result={}
                                                console.log(utype)
                                                if(utype=='"admin"'){
                                                    result={
                                                        success:true,
                                                        data: {
                                                            tusers:tusers,
                                                            tenq:tenq,
                                                            tnoti:tnoti,
                                                            tlost:tlost,
                                                            tfeed:tfeed
                                                        }
                                                    }
                                                }else{
                                                        result={
                                                            success:true,
                                                            data: {
                                                                tnoti:tnoti,
                                                                tlost:tlost
                                                            }  
                                                    }
                                                }
                                                res.send(result);
                
                                            } else {
                                                console.log(err)
                                            }
                                        });
        
                                    } else {
                                        console.log(err)
                                    }
                                });

                            } else {
                                console.log(err)
                            }
                        });

                    } else {
                        console.log(err)
                    }
                   
                });
            } else {
                console.log(err)
            }
            //res.send("OK");
        });
 //    no need to write
       // res.send("OK");
        }else{
            console.log('something went wrong');
            result = {
                success: false,
                message: 'Something went wrong, please come back later.',
                e_code: err
            }
        }
        });
 //  end  no need to write

    } catch (error) {
        console.log(error);
    }
});


router.post('/updateProfile', upload.single('picture'), verifyToken, function (req, res, next) {
        try {
            rdata = req.body;
        var email = jwt_decode(req.token).email;
       var cmd=""
       var fname=""
       try {
        fname=req.file.filename;
       } catch (error) {
        fname=""
       }
        if( fname!==""){
         cmd="update registration set name='"+rdata.name+"', mobno='"+rdata.mobno+"' , dob='"+rdata.dob+"' , address='"+rdata.address+"' , pic_path='"+req.file.filename+"' where email='"+email+"'"
       }else{
        cmd="update registration set name='"+rdata.name+"' , mobno='"+rdata.mobno+"' , dob='"+rdata.dob+"' , address='"+rdata.address+"' where email='"+email+"'"
       }
       console.log(cmd);
        
        dbm.con.query(cmd,function (err, recordset) {
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
                message: 'Profile Updated Successfully.'
              }
              res.send(data)
          }    
      });
        
      
    
    
  //res.send(data);
        } catch (error) {
            console.log(error)
        }
  
  });



module.exports = router;


