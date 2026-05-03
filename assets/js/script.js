
// Scroll lisse pour les liens de navigation
document.querySelectorAll('nav a[href^="#"]').forEach(function(lien) {
  lien.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Récupérer l'ID de la section
    var cible = this.getAttribute('href');
    var section = document.querySelector(cible);
    
    // Scroller vers la section
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Message de bienvenue dans la console
console.log('Portfolio chargé !');
