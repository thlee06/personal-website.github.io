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
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    cards.forEach(card => {
        observer.observe(card);
    });
});

function copyEmail() {
    const el = document.getElementById('emailAddr');
    if (!el) return;
    navigator.clipboard.writeText(el.innerText).then(() => {
        const btn = document.querySelector('.copy-btn');
        if (!btn) return;
        const original = btn.innerText;
        btn.innerText = 'Copied!';
        setTimeout(() => { btn.innerText = original; }, 2000);
    }).catch(() => {
        // Fallback: select the text so the user can copy manually
        const range = document.createRange();
        range.selectNode(el);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    });
}
