//configuring .env file that contains the variables
const dotenv = require('dotenv')
dotenv.config()

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.host_email,
    pass: process.env.host_password
  }
});

module.exports.sendEmailResponse = async (name, email) => {
  console.log('Recipient email:', email);
    console.log('Host email:', process.env.host_email);

    //returns a promise and if it reject and resolves it returns the corresponding message.
    return new Promise((resolve, reject) => {
      const mailOptions = {
        from: process.env.host_email,
        to: email,
        subject: 'Chalk59 Επικοινωνία ',
        text: `Καλησπέρα σας κύριε/κυρία ${name}, 
        \n Λάβαμε το Email σας και είμαστε πρόθυμοι να σας εξυπηρετήσουμε!
        \n Θα σας ενημερώσουμε με νεότερα σύντομα!
        \nΜε εκτίμηση Chalk59 
        `
      };
      
      transporter.sendMail(mailOptions, function(error,info){
        if (error) {
          reject(new Error({message: 'client email not sent'}))
        } else {
          resolve({message: 'client email sent'})
        }
      });
    })
    
}

module.exports.newMessageEmail = async (name, surname, email, message) => {
  console.log('Recipient email:', process.env.host_email);
    console.log('Host email:', process.env.host_email);


    return new Promise((resolve, reject) => {
      const mailOptions = {
        from: process.env.host_email,
        to: process.env.host_email,
        subject: 'Νέα συμπλήρωση φόρμας!',
        text: `O ενδιαφερόμενος με ονοματεπώνυμο ${name} ${surname} \n Προσωπικό Email: ${email} \n \n Έστειλε το ακόλουθο μήνυμα: \n ${message}`
      }
      
      transporter.sendMail(mailOptions, function(error,info){
        if (error) {
          reject(new Error({message: 'email not recieved'}))
        } else {
          resolve({message: 'email recieved'})
        }
      });
    })
    
}


