document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Voorkomt herladen van de pagina

        emailjs.send("service_gn52r1c", "template_8ngoxvs", {
            name: this.name.value,
            email: this.email.value,
            subject: this.subject.value,
            message: this.message.value
        }).then(function(response) {
            alert("Bericht verzonden! 🎉");
            window.location.href = "../html/Success(1).html"; 
        }, function(error) {
            alert("Er is iets misgegaan. Probeer opnieuw.");
            console.error("Fout:", error);
        });
    });
});