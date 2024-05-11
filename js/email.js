function sendMail(){
    var params = {
        name: document.getElementById("contact-your-name-2").value,
        email: document.getElementById("contact-email-2").value,
        phone: document.getElementById("contact-phone-2").value, 
        message: document.getElementById("contact-message-2").value,
    };

    const serviceID = "service_tarc-fitness";
    const templateID = "template_kg9c8r9";

    emailjs
        .send(serviceID, templateID, params)
        .then(res => {
                document.getElementById("contact-your-name-2").value = "";
                document.getElementById("contact-email-2").value = "";
                document.getElementById("contact-phone-2").value = "";
                document.getElementById("contact-message-2").value = "";
                console.log(res);
                alert("message sent successfully");

            })
            .catch(err=>console.log(err))
}
    
function sendModalMail(){
    var params = {
        name: document.getElementById("contact-modal-name").value,
        email: document.getElementById("contact-modal-email").value,
        phone: document.getElementById("contact-modal-phone").value, 
        message: document.getElementById("contact-modal-message").value,
    };

    const serviceID = "service_tarc-fitness";
    const templateID = "template_kg9c8r9";

    emailjs
        .send(serviceID, templateID, params)
        .then(res => {
                document.getElementById("contact-modal-name").value = "";
                document.getElementById("contact-modal-email").value = "";
                document.getElementById("contact-modal-phone").value = "";
                document.getElementById("contact-modal-message").value = "";
                console.log(res);
                alert("message sent successfully");

            })
            .catch(err=>console.log(err))
}