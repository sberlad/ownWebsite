
function sendEmail () {
    const name = document.getElementById("contact-name").value;
    const mail = document.getElementById('contact-mail').value;
    const phone = document.getElementById('contact-number').value;
    const message = $('#contact-message').val;
    console.log(name+mail+phone+message);
    Email.send({
        Host : "smtp.ionos.de",
        Username : "contactform@samuelberlad.com",
        Password : "U#$qw7&&b^#ae",
        To : 'sberlad@gmail.com',
        From : mail,
        Subject : "Contact Form Submission",
        Body : email
    }).then(
        message => alert("Thank you, your message was sent successfully.")
    );
}