/**
 * This script automatically makes external links on a webpage open in a new tab.
 * 
 * It adds an event listener for the 'DOMContentLoaded' event, which ensures that 
 * the script runs only after the entire HTML document has been fully loaded and parsed.
 * 
 * The script works as follows:
 * 1. Select all anchor (`<a>`) tags on the page that have an `href` attribute.
 * 2. For each link, the script creates a `URL` object based on the `href` attribute 
 *    and compares the link's origin (protocol + domain) with the current page's origin.
 * 3. If the origin of the link differs from the current page's origin, it indicates 
 *    that the link is external.
 * 4. The script then sets the `target` attribute of the link to `_blank`, which 
 *    instructs the browser to open the link in a new tab.
 * 
 * Compatibility: The script is compatible with modern browsers that support the 
 *                `URL` constructor and `forEach` method.
 */

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
