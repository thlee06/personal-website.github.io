// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all project cards
    const cards = document.querySelectorAll('.project-card');

    // Setup the observer options
    const options = {
        threshold: 0.1, // Trigger when 10% of the card is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'show' class when it enters the screen
                entry.target.classList.add('show');
                // Stop observing once it's visible (optional)
                observer.unobserve(entry.target);
            }
        });
    }, options);
    

    // Tell the observer to watch each card
    cards.forEach(card => {
        observer.observe(card);
    });
});
function copyEmail() {
    const email = document.getElementById('emailAddr').innerText;
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
    });
    }