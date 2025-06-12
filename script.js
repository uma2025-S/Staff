document.addEventListener('DOMContentLoaded', () => {
    // Handle "Contact" button clicks
    const contactButtons = document.querySelectorAll('.contact-button');
    contactButtons.forEach(button => {
        button.addEventListener('click', () => {
            const facultyName = button.dataset.name;
            // You can implement various actions here:
            // 1. Scroll to the contact form:
            document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' });
            // 2. Pre-fill a hidden field in the form with the faculty's name:
            //    (You'd need to add a hidden input field to your HTML form)
            //    document.getElementById('facultyTarget').value = facultyName;
            alert(`You clicked contact for ${facultyName}. Scroll down to fill the form.`);
        });
    });

    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // In a real application, you would send this data to a server.
        // For demonstration, we'll just log it and show an alert.
        console.log('Form Submitted!');
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Message:', message);

        alert('Thank you for your message! We will get back to you soon.');

        // Optionally, clear the form after submission
        contactForm.reset();
    });
});
