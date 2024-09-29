function initializeRazorpay(amount, service) {
    var options = {
        key: "YOUR_RAZORPAY_KEY", // Replace with your actual Razorpay key
        amount: amount * 100, // Amount in paise
        currency: "INR",
        name: "OurSoulss",
        description: `Payment for ${service}`,
        image: "https://your-logo-url.com/logo.png", // Replace with your logo URL
        handler: function (response) {
            // Redirect to confirmation page with payment details
            window.location.href = `confirmation.html?paymentId=${response.razorpay_payment_id}&amount=${amount}&service=${encodeURIComponent(service)}`;
        },
        prefill: {
            name: "",
            email: "",
            contact: ""
        },
        theme: {
            color: "#4a90e2"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
}

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon!');
            this.reset();
        });
    }

    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});