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

// Аккордеон для услуг на мобильных
document.addEventListener("DOMContentLoaded", function() {
  // Аккордеон для услуг (только на мобильных)
  document.querySelectorAll('.service-title').forEach(title => {
    title.addEventListener('click', function() {
      if (window.innerWidth > 768) return;
      
      const service = this.closest('.service');
      const wasActive = service.classList.contains('active');
      const icon = this.querySelector('.accordion-icon');
      
      // Закрываем все другие услуги
      document.querySelectorAll('.service').forEach(item => {
        if (item !== service) {
          item.classList.remove('active');
          const otherIcon = item.querySelector('.accordion-icon');
          if (otherIcon) {
            otherIcon.style.transform = 'rotate(0deg)';
          }
        }
      });
      
      // Открываем/закрываем текущую
      if (wasActive) {
        service.classList.remove('active');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        service.classList.add('active');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Кнопки "Подробнее" в обучении
  document.querySelectorAll('.training').forEach(training => {
    const btn = training.querySelector('.dropdown-toggle');
    const content = training.querySelector('.dropdown-content');
    
    if (!btn || !content) return;
    
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = content.classList.toggle('open');
      btn.classList.toggle('active', isOpen);
    });
  });
});
// Keep contact button above footer
(function() {
  const btn = document.querySelector('.contact-btn');
  const footer = document.querySelector('.footer');
  if (!btn || !footer) return;

  function updateButtonPosition() {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const btnHeight = btn.offsetHeight;
    const defaultBottom = 30;

    if (footerTop < windowHeight - defaultBottom - btnHeight) {
      btn.style.bottom = (windowHeight - footerTop + 10) + 'px';
    } else {
      btn.style.bottom = defaultBottom + 'px';
    }
  }

  window.addEventListener('scroll', updateButtonPosition, { passive: true });
  window.addEventListener('resize', updateButtonPosition);
  updateButtonPosition();
})();

// ══ TAROT CAROUSEL ══
(function() {
  const track = document.getElementById('t-track');
  const stage = document.getElementById('t-stage');
  const dotsEl = document.getElementById('tDots');
  if (!track) return;
  const total = 7;
  let cur = 0, userActive = false, autoT, resumeT;

  function vis() {
    const w = stage.offsetWidth;
    return w < 600 ? 1 : w < 900 ? 2 : 3;
  }
  function cw() {
    const c = track.querySelector('.t-card');
    return c ? c.offsetWidth + 14 : 0;
  }
  function maxIdx() { return total - vis(); }
  function go(n) {
    cur = Math.max(0, Math.min(n, maxIdx()));
    track.style.transform = 'translateX(-' + (cur * cw()) + 'px)';
    dotsEl.querySelectorAll('.t-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
  }
  function buildDots() {
    dotsEl.innerHTML = '';
    for (let i = 0; i <= maxIdx(); i++) {
      const d = document.createElement('button');
      d.className = 't-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Отзыв ' + (i + 1));
      d.addEventListener('click', () => { pause(); go(i); });
      dotsEl.appendChild(d);
    }
  }
  function pause() {
    userActive = true;
    clearInterval(autoT);
    clearTimeout(resumeT);
    resumeT = setTimeout(() => { userActive = false; start(); }, 8000);
  }
  function start() {
    clearInterval(autoT);
    autoT = setInterval(() => { if (!userActive) go(cur >= maxIdx() ? 0 : cur + 1); }, 5500);
  }
  document.getElementById('tPrev').addEventListener('click', () => { pause(); go(cur <= 0 ? maxIdx() : cur - 1); });
  document.getElementById('tNext').addEventListener('click', () => { pause(); go(cur >= maxIdx() ? 0 : cur + 1); });
  let sx = 0;
  stage.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', e => {
    const d = sx - e.changedTouches[0].clientX;
    if (Math.abs(d) < 40) return;
    pause();
    go(d > 0 ? (cur >= maxIdx() ? 0 : cur + 1) : (cur <= 0 ? maxIdx() : cur - 1));
  }, { passive: true });
  window.addEventListener('resize', () => { buildDots(); go(Math.min(cur, maxIdx())); });
  buildDots(); go(0); start();
})();