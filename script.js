// Анимация появления секций при прокрутке
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
      }
  });
}, {
  threshold: 0.1, // Анимация начнётся, когда 10% элемента видны (можно настроить под ваши предпочтения)
  rootMargin: '0px 0px -50px 0px' // Добавляет небольшой отступ снизу для более плавного срабатывания
});

document.querySelectorAll('.service, .testimonial, .section-title').forEach(el => {
  el.classList.remove('fade-in-up'); // Сброс изначального состояния
  observer.observe(el);
});
  // Ваши анимации или другие скрипты, например:

// Пример плавной анимации при скроллинге
window.addEventListener('scroll', function() {
    let hero = document.querySelector('.hero');
    let scrollPosition = window.scrollY;
    
    if (scrollPosition > 200) {
      hero.style.transform = 'translateY(-20px)';
      hero.style.opacity = '0.8';
    } else {
      hero.style.transform = 'translateY(0)';
      hero.style.opacity = '1';
    }
  });
  
  // Можете добавить другие скрипты для анимаций или интерактивных элементов
// Получаем элементы
const contactBtn = document.querySelector('.contact-btn');
const socialLinks = document.getElementById('social-links');

// Добавляем обработчик клика
contactBtn.addEventListener('click', function () {
  contactBtn.classList.toggle('active'); // Показать/скрыть ссылки
});  

const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

burger.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

// Dropdown
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.service').forEach((service, index) => {
    const btn = service.querySelector('.dropdown-toggle');
    const content = service.querySelector('.dropdown-content');

    if (!btn || !content) return;

    if (!content.id) content.id = 'dropdown-content-' + index;

    btn.setAttribute('aria-controls', content.id);
    btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', function() {
      const isOpen = content.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

      btn.innerHTML = isOpen ? 'Скрыть ▲' : 'Подробнее о курсе ▼';
    });
  });
});
