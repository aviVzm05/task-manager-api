const sendGridAPIKey= '';
class sgMail {
    static send({ to, from, subject, text }) {
        console.log("Pretend like mail has been sent.");
        console.log("to:", to);        
        console.log("from:", from);        
        console.log("subject:", subject);        
        console.log("text:", text);        
    }   
}
// sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:'avi.vzm05@gmail.com',
        subject: 'Welcome Email',
        text: `Hello ${name}, Let me know how you like me now`
    })
};


const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'avi.vzm05@gmail.com',
        subject: 'Cancellation Email',
        text: `Account cancelled man...${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}