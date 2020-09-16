const menu = document.getElementById('menu');

function toggleMenu(menu) {
  const top = menu.offsetTop;

  if (window.pageYOffset > top) {
    menu.classList.add('fixed_menu');
  } else {
    menu.classList.remove('fixed_menu');
  }
}

window.addEventListener('scroll', function () {
  toggleMenu(menu);
});
