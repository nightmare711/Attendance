class MailSender{
    nodemailer;
    gmail;
    mailfrom;
    tomail;
    sub;
    message;
    
    constructor(to, sub, msg){
        this.mailfrom = 'tranhoang.finizz@gmail.com';
        this.tomail = to;
        this.sub = sub;
        this.message = msg;
        this.nodemailer = require('nodemailer');
        this.gmail = this.nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'tranhoang.finizz@gmail.com',
              pass: 'jfbdwdzbeoikuarq'
            }
          });
        console.log('Mail obj created')
    }

    send(){
      console.log("sending mail")
      var mailOptions = {
        from: this.mailfrom,
        to: this.tomail,
        subject: this.sub,
        html: this.message,
        //html: "<b>From Capture It</b>", // html body
      };
      
      this.gmail.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  };

}

module.exports = MailSender;

