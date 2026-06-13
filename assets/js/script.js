
const panels = document.querySelectorAll('.about-panel');
const prevBtn = document.getElementById('prevAbout');
const nextBtn = document.getElementById('nextAbout');

let current = 0;

function showPanel(index) {
  panels.forEach((panel, i) => {
    panel.classList.toggle('active', i === index);
  });
  current = index;
}

function nextPanel() {
  current = (current + 1) % panels.length;
  showPanel(current);
}

function prevPanel() {
  current = (current - 1 + panels.length) % panels.length;
  showPanel(current);
}

if (panels.length > 0) {
  showPanel(0);
  nextBtn?.addEventListener('click', nextPanel);
  prevBtn?.addEventListener('click', prevPanel);
}

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
