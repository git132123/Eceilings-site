// მთავარი სკრიპტები
console.log("main.js loaded");


<!-- JavaScript Logic -->
  const menuToggle = document.getElementById('menuToggle');
  const sideMenu = document.getElementById('sideMenu');

  menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      sideMenu.classList.remove('open');
    }
  });
