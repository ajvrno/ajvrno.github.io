document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('wipe-overlay');
  
  document.querySelectorAll('.nav-link[data-href]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      if (overlay) {
        overlay.classList.add('active');
        setTimeout(() => {
          window.location.href = link.getAttribute('data-href');
        }, 700); // Match the CSS transition duration
      }
    });
  });
});