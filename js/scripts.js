$(function() {
  $('#residentsLink').click(function() {
    $('#residentsModal').modal('show');
  });
});

// Sticky menu background
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('main-nav');
  if (window.scrollY > 150) {
    document.querySelector('#main-nav').style.opacity = 0.9;
    navbar.classList.add('bg-dark');
  } else if (window.scrollY < 150) {
    navbar.classList.remove('bg-dark');
  }
});
