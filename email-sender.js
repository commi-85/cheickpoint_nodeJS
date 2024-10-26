var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sangharearona@gmail.com',
    pass: 'SOKHNATHIAM1985'
  }
});

var mailOptions = {
  from: 'sangharearona@gmail.com',
  to: 'sokhnathiam964@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});