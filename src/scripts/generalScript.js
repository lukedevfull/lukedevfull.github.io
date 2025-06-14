const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Verifica se há preferência salva
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  if (theme === 'dark') {
    themeIcon.className = 'fas fa-sun';
  } else {
    themeIcon.className = 'fas fa-moon';
  }
}

// Menu móvel
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('active');
  });
});

// Animação ao rolar
const animateElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

animateElements.forEach(element => {
  observer.observe(element);
});

// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Formulário de contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulação de envio
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };

    console.log('Formulário enviado:', formData);

    // Exibe mensagem de sucesso
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    contactForm.reset();
  });
}

// Ajustar altura do hero para compensar o header
function adjustHeroHeight() {
  const header = document.querySelector('header');
  const hero = document.getElementById('hero');

  if (header && hero) {
    hero.style.paddingTop = header.offsetHeight + 'px';
  }
}

// Executar no carregamento e no redimensionamento
window.addEventListener('load', adjustHeroHeight);
window.addEventListener('resize', adjustHeroHeight);