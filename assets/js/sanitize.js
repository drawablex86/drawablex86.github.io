---
---

// DOMPurify configuration
const purifyConfig = {
    ALLOWED_TAGS: ['a', 'b', 'br', 'div', 'em', 'i', 'li', 'ol', 'p', 'span', 'strong', 'ul'],
    ALLOWED_ATTR: ['href', 'class', 'id', 'style']
};

// Sanitize search input
function sanitizeInput(input) {
    return DOMPurify.sanitize(input, purifyConfig);
}

// Add event listener to search input
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            e.target.value = sanitizeInput(e.target.value);
        });
    }
});