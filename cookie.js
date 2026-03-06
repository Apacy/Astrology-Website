// ================================
// Shared cookie banner — all pages
// ================================
(function() {
  const style = document.createElement('style');
  style.textContent = `
    #cookie-banner {
      position: fixed;
      bottom: 1.5rem;
      left: 50%;
      transform: translateX(-50%) translateY(200px);
      width: calc(100% - 3rem);
      max-width: 700px;
      background: rgba(255,255,255,0.97);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border: 1px solid rgba(244,194,194,0.6);
      border-radius: 20px;
      padding: 1.4rem 1.8rem;
      box-shadow: 0 8px 32px rgba(65,36,2,0.12), 0 2px 8px rgba(238,198,211,0.4), inset 0 1px 0 rgba(255,255,255,0.85);
      display: flex;
      align-items: center;
      gap: 1.5rem;
      z-index: 9999;
      opacity: 0;
      transition: transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease;
      font-family: 'Montserrat', sans-serif;
    }
    #cookie-banner.visible {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
    #cookie-banner::before {
      content: '';
      position: absolute;
      top: 0; left: 12%; right: 12%; height: 1px;
      background: linear-gradient(to right, transparent, rgba(244,194,194,0.9), transparent);
    }
    .cookie-icon { font-size: 1.7rem; flex-shrink: 0; }
    .cookie-text {
      flex: 1;
      font-size: 0.75rem;
      font-weight: 300;
      color: rgba(46,26,40,0.7);
      line-height: 1.7;
    }
    .cookie-text strong {
      display: block;
      font-weight: 400;
      color: #2e1a28;
      margin-bottom: 0.25rem;
      font-size: 0.8rem;
    }
    .cookie-text a {
      color: #412402;
      text-decoration-color: rgba(65,36,2,0.3);
      text-underline-offset: 2px;
      transition: color 0.2s;
    }
    .cookie-text a:hover { color: #6b3d04; }
    .cookie-actions {
      display: flex;
      flex-direction: row;
      gap: 0.6rem;
      flex-shrink: 0;
      align-items: center;
    }
    .btn-cookie-accept {
      background: linear-gradient(135deg, #c8845a, #412402);
      color: #fff;
      border: none;
      border-radius: 20px;
      padding: 0.6rem 1.6rem;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.68rem;
      font-weight: 400;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(65,36,2,0.25);
      transition: opacity 0.2s;
      white-space: nowrap;
    }
    .btn-cookie-accept:hover { opacity: 0.88; }
    .btn-cookie-decline {
      background: transparent;
      color: rgba(46,26,40,0.5);
      border: 1px solid rgba(244,194,194,0.7);
      border-radius: 20px;
      padding: 0.55rem 1.4rem;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.68rem;
      font-weight: 300;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      cursor: pointer;
      transition: border-color 0.2s, color 0.2s;
      white-space: nowrap;
    }
    .btn-cookie-decline:hover { border-color: #f4c2c2; color: rgba(46,26,40,0.75); }
    @media (max-width: 600px) {
      #cookie-banner { flex-direction: column; align-items: flex-start; gap: 1rem; padding: 1.2rem 1.3rem; }
      .cookie-actions { flex-direction: row; width: 100%; }
      .btn-cookie-accept, .btn-cookie-decline { flex: 1; text-align: center; padding: 0.65rem 0.8rem; }
    }
  `;
  document.head.appendChild(style);
})();

document.addEventListener('DOMContentLoaded', function() {
  // Inject banner HTML
  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Согласие на использование cookie');
  banner.innerHTML = [
    '<span class="cookie-icon">\uD83C\uDF43</span>',
    '<div class="cookie-text">',
    '  <strong>\u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0444\u0430\u0439\u043B\u044B cookie</strong>',
    '  \u042D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 cookie \u0438 \u043F\u0438\u043A\u0441\u0435\u043B\u0438 \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u044F (Meta Pixel) \u0434\u043B\u044F \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438 \u0438 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441\u0430\u0439\u0442\u0430. \u041D\u0430\u0436\u0438\u043C\u0430\u044F \u00AB\u041F\u0440\u0438\u043D\u044F\u0442\u044C\u00BB, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u0448\u0435\u0439 <a href="./privacy-policy.html">\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438</a>.',
    '</div>',
    '<div class="cookie-actions">',
    '  <button class="btn-cookie-accept" onclick="cookieAccept()">',
    '    \u041F\u0440\u0438\u043D\u044F\u0442\u044C',
    '  </button>',
    '  <button class="btn-cookie-decline" onclick="cookieDecline()">',
    '    \u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C',
    '  </button>',
    '</div>'
  ].join('');
  document.body.appendChild(banner);

  // Show banner if no consent stored
  if (!localStorage.getItem('cookie_consent')) {
    setTimeout(function() { banner.classList.add('visible'); }, 900);
  } else if (localStorage.getItem('cookie_consent') === 'accepted') {
    loadMetaPixel();
  }
});

function cookieAccept() {
  localStorage.setItem('cookie_consent', 'accepted');
  cookieHide();
  loadMetaPixel();
}
function cookieDecline() {
  localStorage.setItem('cookie_consent', 'declined');
  cookieHide();
}
function cookieHide() {
  var b = document.getElementById('cookie-banner');
  if (b) {
    b.style.opacity = '0';
    b.style.transform = 'translateX(-50%) translateY(200px)';
    setTimeout(function() { b.style.display = 'none'; }, 500);
  }
}
function loadMetaPixel() {
  if (window._metaPixelLoaded) return;
  window._metaPixelLoaded = true;
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init','2227666094419935');
  fbq('track','PageView');
}
