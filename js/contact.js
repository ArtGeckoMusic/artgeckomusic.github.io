$(document).ready(() => {
  emailjs.init({
    publicKey: "Vcbp-7Sga0gcxBbHc",
  });
  $('#contactForm').on('submit', (e) => {
    // e.preventDefault();
    emailjs.sendForm('contactService', 'contactForm', e.target)
                    .then(() => {
                        console.log('Sent email');
                    }, (error) => {
                        console.log('Failed to send email...', error);
                    });
  });
});