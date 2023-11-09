 function sendEmail(){
        Email.send({
        SecureToken: "3834dc34-0b21-4d88-a84e-dfca0a815efb", 1 I
        To: 'yaswanthd161@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body: "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> phone: " + document.getElementById("phone").value
        "<br> Message: " + document.getElementById("message").value
        }).then(
        message => alert ("Message Sent Succesfully")
        );
}