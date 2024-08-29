document.addEventListener("DOMContentLoaded", function() {
    // Select all anchor tags with href attributes
    const links = document.querySelectorAll('a[href]');

    links.forEach(function(link) {
        const url = new URL(link.href, window.location.origin);

        // Check if the link is external
        if (url.origin !== window.location.origin) {
            link.setAttribute('target', '_blank');
        }
    });
});
