// ================================
// Shared footer — included on every page
// ================================
(function() {
  const style = document.createElement('style');
  style.textContent = `
    footer.footer { background: #2e1a28 !important; color: rgba(255,245,247,0.75) !important; padding: 0 !important; font-size: 0.82rem !important; font-weight: 300 !important; font-family: 'Montserrat', sans-serif !important; text-align: left !important; }
    footer.footer .footer-inner { display: grid !important; grid-template-columns: 1.6fr 1fr 1fr 1.2fr !important; gap: 3rem !important; width: 90% !important; max-width: 1200px !important; margin: 0 auto !important; padding: 3.5rem 0 2.5rem !important; border-bottom: 1px solid rgba(244,194,194,0.12) !important; text-align: left !important; }
    footer.footer .footer-logo { display: flex !important; align-items: center !important; gap: 0.6rem !important; margin-bottom: 0.6rem !important; }
    footer.footer .footer-logo img { height: 2rem !important; opacity: 0.85 !important; filter: brightness(0) invert(1) !important; border: none !important; box-shadow: none !important; border-radius: 0 !important; }
    footer.footer .footer-logo span { font-family: 'Cormorant Garamond', serif !important; font-size: 1.2rem !important; font-weight: 300 !important; color: rgba(255,245,247,0.9) !important; letter-spacing: 0.04em !important; }
    footer.footer .footer-tagline { font-size: 0.68rem !important; letter-spacing: 0.12em !important; text-transform: uppercase !important; color: rgba(244,194,194,0.5) !important; margin-bottom: 1.2rem !important; font-weight: 300 !important; }
    footer.footer .footer-contact { display: flex !important; flex-direction: column !important; gap: 0.35rem !important; margin-bottom: 1.4rem !important; }
    footer.footer .footer-contact a, footer.footer .footer-contact span { font-size: 0.78rem !important; color: rgba(255,245,247,0.6) !important; text-decoration: none !important; }
    footer.footer .footer-contact a:hover { color: #f4c2c2 !important; }
    footer.footer .footer-socials { display: flex !important; gap: 0.6rem !important; }
    footer.footer .footer-social-btn { width: 34px !important; height: 34px !important; border-radius: 50% !important; border: 1px solid rgba(244,194,194,0.2) !important; display: flex !important; align-items: center !important; justify-content: center !important; color: rgba(255,245,247,0.5) !important; text-decoration: none !important; background: transparent !important; box-shadow: none !important; }
    footer.footer .footer-social-btn:hover { border-color: #f4c2c2 !important; color: #f4c2c2 !important; background: rgba(244,194,194,0.08) !important; }
    footer.footer .footer-col-title { font-size: 0.62rem !important; font-weight: 400 !important; letter-spacing: 0.22em !important; text-transform: uppercase !important; color: rgba(244,194,194,0.55) !important; margin-bottom: 1rem !important; padding-bottom: 0.6rem !important; border-bottom: 1px solid rgba(244,194,194,0.1) !important; display: block !important; }
    footer.footer .footer-links { list-style: none !important; padding: 0 !important; margin: 0 !important; display: flex !important; flex-direction: column !important; gap: 0.5rem !important; }
    footer.footer .footer-links li { padding: 0 !important; border: none !important; }
    footer.footer .footer-links li::before { display: none !important; }
    footer.footer .footer-links li a { font-size: 0.8rem !important; font-weight: 300 !important; color: rgba(255,245,247,0.6) !important; text-decoration: none !important; display: inline-block !important; padding: 0.2rem 0 !important; background: none !important; border: none !important; }
    footer.footer .footer-links li a:hover { color: rgba(255,245,247,0.95) !important; }
    footer.footer .footer-links li a:visited { color: rgba(255,245,247,0.5) !important; }
    footer.footer .footer-payment { display: flex !important; gap: 0.5rem !important; margin-top: 1.4rem !important; align-items: center !important; }
    footer.footer .footer-bottom { width: 90% !important; max-width: 1200px !important; margin: 0 auto !important; padding: 1.2rem 0 1.5rem !important; font-size: 0.65rem !important; color: rgba(255,245,247,0.25) !important; letter-spacing: 0.06em !important; text-align: left !important; }
    @media (max-width: 768px) {
      footer.footer .footer-inner { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; padding: 2.5rem 0 2rem !important; }
      footer.footer .footer-brand { grid-column: 1 / -1 !important; padding-bottom: 1.5rem !important; border-bottom: 1px solid rgba(244,194,194,0.1) !important; }
      footer.footer .footer-bottom { padding-bottom: 5rem !important; }
      footer.footer .footer-links li a { padding: 0.4rem 0 !important; font-size: 0.85rem !important; }
    }
    @media (max-width: 480px) {
      footer.footer .footer-inner { grid-template-columns: 1fr !important; }
    }
  `;
  document.head.appendChild(style);
})();

document.addEventListener('DOMContentLoaded', function () {
  const footerEl = document.querySelector('footer.footer');
  if (!footerEl) return;

  footerEl.innerHTML = `
    <div class="footer-inner">

      <div class="footer-col footer-brand">
        <div class="footer-logo">
          <img src="./image/logoms.svg" alt="Marina Smit logo">
          <span>Marina Smit</span>
        </div>
        <p class="footer-tagline">Ведическая астрология · DeviAcademy</p>
        <div class="footer-contact">
          <a href="tel:+380633521117">+38 063 352 11 17</a>
          <a href="mailto:deviacademy.com.ua@gmail.com">deviacademy.com.ua@gmail.com</a>
          <span>Киев, Украина</span>
        </div>
        <div class="footer-socials">
          <a href="https://t.me/marinasmiit" target="_blank" class="footer-social-btn" aria-label="Telegram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.48 14.67l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.445c.537-.194 1.006.131.37.895z"/></svg>
          </a>
          <a href="https://instagram.com/marina.smit_jyotish" target="_blank" class="footer-social-btn" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="https://wa.me/380633521117" target="_blank" class="footer-social-btn" aria-label="WhatsApp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4 class="footer-col-title">Обучение</h4>
        <ul class="footer-links">
          <li><a href="./m0-doma.html">Модуль 0 · Основы</a></li>
          <li><a href="./m1-horoscope.html">Модуль 1 · Гороскоп</a></li>
          <li><a href="./index.html#edu">Все курсы</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="footer-col-title">Консультации</h4>
        <ul class="footer-links">
          <li><a href="./index.html#services">Натальная карта</a></li>
          <li><a href="./index.html#services">Отношения</a></li>
          <li><a href="./index.html#services">Финансы</a></li>
          <li><a href="./index.html#services">Карьера</a></li>
          <li><a href="./index.html#contact">Записаться</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="footer-col-title">Документы</h4>
        <ul class="footer-links">
          <li><a href="./public-offer.html">Публичный договор</a></li>
          <li><a href="./terms-refund.html">Условия и возврат</a></li>
          <li><a href="./privacy-policy.html">Политика конфиденциальности</a></li>
        </ul>
        <div class="footer-payment">
          <svg width="38" height="24" viewBox="0 0 38 24" fill="none"><rect width="38" height="24" rx="4" fill="#fff" stroke="#e0e0e0"/><path d="M14.5 16.5h-2l1.25-8h2L14.5 16.5zm7.25-7.8c-.4-.15-.95-.3-1.7-.3-1.85 0-3.15 1-3.15 2.4 0 1.05.95 1.6 1.65 1.95.75.35 1 .6 1 .9 0 .5-.6.7-1.15.7-.75 0-1.15-.1-1.8-.4l-.25-.1-.25 1.6c.45.2 1.25.4 2.1.4 1.95 0 3.2-1 3.2-2.45 0-.8-.5-1.45-1.6-1.95-.65-.35-1.05-.55-1.05-.9 0-.3.35-.6 1.05-.6.6 0 1.05.15 1.4.3l.15.1.25-1.65zm4.75-.2h-1.45c-.45 0-.8.15-.95.55l-2.7 6.45h1.95l.4-1.05h2.35l.2 1.05H28l-1.5-7zm-2.3 4.4l.7-1.9.4 1.9h-1.1zm-11.5-4.4l-1.85 5.35-.2-1c-.35-1.2-1.45-2.5-2.7-3.15l1.7 6.3h1.95l2.95-7.5H12.7z" fill="#1A1F71"/><path d="M9.5 8.5H6.5l-.05.2c2.3.6 3.85 2.05 4.5 3.8L10.3 9.1c-.1-.45-.45-.6-.8-.6z" fill="#F9A51A"/></svg>
          <svg width="38" height="24" viewBox="0 0 38 24" fill="none"><rect width="38" height="24" rx="4" fill="#fff" stroke="#e0e0e0"/><circle cx="15" cy="12" r="7" fill="#EB001B"/><circle cx="23" cy="12" r="7" fill="#F79E1B"/><path d="M19 6.8a7 7 0 010 10.4A7 7 0 0119 6.8z" fill="#FF5F00"/></svg>
        </div>
      </div>

    </div>
    <div class="footer-bottom">
      <span>© 2024–2026 Marina Smit · DeviAcademy · Все права защищены</span>
    </div>
  `;
});
