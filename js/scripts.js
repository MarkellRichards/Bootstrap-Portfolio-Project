$(function() {
  $('#residentsLink').click(function() {
    $('#residentsModal').modal('show');
  });
});

const smAndUp = window.matchMedia('(min-width: 578px)');

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('main-nav');
  if (window.scrollY > 150 && smAndUp.matches) {
    document.querySelector('#main-nav').style.opacity = 0.9;
    navbar.classList.add('bg-dark-blue');
  } else if (window.scrollY < 150) {
    navbar.classList.remove('bg-dark-blue');
  }
});
