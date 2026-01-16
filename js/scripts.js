document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.main-header');
    
    // Function to handle scroll animations/styles
    function handleScroll() {
        // If the user scrolls more than 50px down
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 5%'; // Shrink header padding
            header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)';
        } else {
            // Return to original style
            header.style.padding = '1rem 5%';
            header.style.boxShadow = 'none';
        }
    }

    // Attach the scroll handler to the window
    window.addEventListener('scroll', handleScroll);
});