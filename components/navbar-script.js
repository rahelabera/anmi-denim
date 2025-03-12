// Add this script to your page to handle the mobile menu
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && closeMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.remove('hidden');
    });

    closeMenuButton.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
    });
  }
});
