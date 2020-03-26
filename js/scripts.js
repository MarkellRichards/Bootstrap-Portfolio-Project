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

// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 41.19097, lng: -111.96246 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}
