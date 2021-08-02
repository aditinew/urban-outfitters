const nodemailer = require("nodemailer");
const mailHost = 'email-smtp.ap-south-1.amazonaws.com'; //mail host (string type)
const mailPort = 465; //port of mail (string type)
const mailSecure = true; //  true for 465, false for other ports (boolean type)
const mailAuthUser = 'AKIAS7GXSG4DE4TNB2QY'; // user of the mailer (string type)
const mailAuthPassword = 'BBraJmotx5KdkrXyUnY5UXl0ux+lvsKW8F2fjQTIWaJN'; // password of mailer (string type)
const mailSendersAddress = 'contact@jiorooms.com'; // sender mail address (string type)

// where you will recive your mail
const adminMailAddress = 'contact@jiorooms.com'; // mail address of admin where he can view all entries (string type)



// async..await is not allowed in global scope, must use a wrapper
const nodemail = async  (from,to,sub,html)=> {
  try
{

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //   let testAccount = await nodemailer.createTestAccount();
  
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: mailHost,
    // port: 465,
    // secure: true,
    // requireTLS: true,
    service:'SendGrid',
    auth: {
      user: 'apikey', // generated ethereal user
      pass: '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'// generated ethereal password
    }
  });
  
  // send mail with defined transport object
  transporter.sendMail({
    from:adminMailAddress , // sender address
    to: to, // list of receivers
    subject: sub, // Subject line
    // text: "Hello world?", // plain text body
    html: html // html body
  },(err,data)=>{
    return new Promise ((resolve,reject)=>{
      if(err) reject(err)
      console.log("MAIL SENT to "+ to ) ;
      resolve(data)
    }).catch(err=>{
      console.log(err)
    })
    
  });
  
}
catch(err)
{

  console.log(err)
}
  
}

module.exports={nodemail}