// Анимация появления секций при прокрутке
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.service, .testimonial, .section-title').forEach(el => {
  el.classList.remove('fade-in-up');
  observer.observe(el);
});

// Плавная анимация при скроллинге
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

// Контактная кнопка
const contactBtn = document.querySelector('.contact-btn');
contactBtn.addEventListener('click', function() {
  contactBtn.classList.toggle('active');
});

// Бургер-меню
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
burger.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

// ============= ГЛАВНОЕ ИСПРАВЛЕНИЕ =============
document.addEventListener("DOMContentLoaded", function() {
  // 1. АККОРДЕОН ДЛЯ УСЛУГ (только на мобильных)
  document.querySelectorAll('.service-title').forEach(title => {
    title.addEventListener('click', function() {
      // Проверяем, что это мобильное устройство
      if (window.innerWidth > 768) return;
      
      const service = this.closest('.service');
      const wasActive = service.classList.contains('active');
      const icon = this.querySelector('.accordion-icon');
      
      // Закрываем все другие услуги
      document.querySelectorAll('.service').forEach(item => {
        if (item !== service) {
          item.classList.remove('active');
          // Сбрасываем иконки у других услуг
          const otherIcon = item.querySelector('.accordion-icon');
          if (otherIcon) {
            otherIcon.style.transform = 'rotate(0deg)';
          }
        }
      });
      
      // Открываем/закрываем текущую
      if (wasActive) {
        service.classList.remove('active');
        if (icon) {
          icon.style.transform = 'rotate(0deg)';
        }
      } else {
        service.classList.add('active');
        if (icon) {
          icon.style.transform = 'rotate(180deg)';
        }
      }
    });
  });

  // 2. КНОПКИ "ПОДРОБНЕЕ" В ОБУЧЕНИИ (работают везде)
  document.querySelectorAll('.training').forEach(training => {
    const btn = training.querySelector('.dropdown-toggle');
    const content = training.querySelector('.dropdown-content');
    
    if (!btn || !content) return;
    
    // Создаем уникальный ID если его нет
    if (!content.id) {
      content.id = 'dropdown-' + Math.random().toString(36).substr(2, 9);
    }
    
    btn.setAttribute('aria-controls', content.id);
    btn.setAttribute('aria-expanded', 'false');
    
    btn.addEventListener('click', function(e) {
      e.stopPropagation(); // Предотвращаем всплытие
      
      const isOpen = content.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      btn.classList.toggle('active', isOpen);
    });
  });
});