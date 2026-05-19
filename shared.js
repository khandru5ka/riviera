/* shared.js — Общий JS: навигация, футер, счётчик */

/* ===== NAV HTML ===== */
function renderNav(activePage) {
  const pages = [
    { href: 'index.html',    label: 'Главная',   key: 'home' },
    { href: 'events.html',   label: 'События',   key: 'events' },
    { href: 'news.html',     label: 'Акции',     key: 'news' },
    { href: 'shops.html',    label: 'Магазины',  key: 'shops' },
    { href: 'map.html',      label: 'Схема',     key: 'map' },
    { href: 'about.html',    label: 'О нас',     key: 'about' },
    { href: 'contacts.html', label: 'Контакты',  key: 'contacts' },
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="nav__link${p.key === activePage ? ' active' : ''}">${p.label}</a></li>`
  ).join('');
  const mobileLinks = pages.map(p =>
    `<a href="${p.href}" class="${p.key === activePage ? 'active' : ''}">${p.label}</a>`
  ).join('');
  document.getElementById('nav-placeholder').innerHTML = `
    <nav class="nav">
      <div class="container">
        <div class="nav__inner">
          <a href="index.html" class="nav__logo">
            <svg class="nav__wave" viewBox="0 0 44 28" fill="none">
              <path d="M2 24 C9 24 9 4 22 4 C35 4 35 24 42 24"
                stroke="#C4EBE5" stroke-width="3.5" stroke-linecap="round" fill="none"/>
            </svg>
            <span class="nav__wordmark">РИВЬЕРА</span>
          </a>
          <ul class="nav__links">${links}
            <li><a href="events.html" class="nav__link nav__cta">Афиша</a></li>
          </ul>
          <button class="nav__mobile-toggle" onclick="toggleMenu()" aria-label="Меню">
            <i class="ti ti-menu-2" style="font-size:24px"></i>
          </button>
        </div>
      </div>
    </nav>
    <div class="mobile-menu" id="mobile-menu">${mobileLinks}</div>
  `;
}

function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

/* ===== FOOTER HTML ===== */
function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div>
            <div class="footer__logo-wrap">
              <svg width="24" height="16" viewBox="0 0 44 28" fill="none">
                <path d="M2 24 C9 24 9 4 22 4 C35 4 35 24 42 24"
                  stroke="#C4EBE5" stroke-width="3.5" stroke-linecap="round" fill="none"/>
              </svg>
              <span class="footer__wordmark">РИВЬЕРА</span>
            </div>
            <div class="footer__tagline">Вспоминая будущее</div>
            <div class="footer__address">
              Москва, Автозаводская, 18<br>
              вс–чт: 10:00–22:00<br>
              пт–сб: 10:00–23:00<br><br>
              <strong style="color:#fff">+7 495 269-99-99</strong><br>
              <span style="font-size:13px">+7 495 269-00-08 (аренда)</span>
            </div>
          </div>
          <div>
            <div class="footer__col-title">Посетителям</div>
            <ul class="footer__links">
              <li><a class="footer__link" href="map.html">Схема ТРЦ</a></li>
              <li><a class="footer__link" href="shops.html">Магазины</a></li>
              <li><a class="footer__link" href="events.html">События</a></li>
              <li><a class="footer__link" href="news.html">Акции и новости</a></li>
              <li><a class="footer__link" href="#">Парковка</a></li>
            </ul>
          </div>
          <div>
            <div class="footer__col-title">О центре</div>
            <ul class="footer__links">
              <li><a class="footer__link" href="about.html">О Ривьере</a></li>
              <li><a class="footer__link" href="contacts.html">Контакты</a></li>
              <li><a class="footer__link" href="#">Аренда</a></li>
              <li><a class="footer__link" href="#">Вакансии</a></li>
              <li><a class="footer__link" href="#">Реклама</a></li>
            </ul>
          </div>
          <div>
            <div class="footer__col-title">Соцсети</div>
            <ul class="footer__links">
              <li><a class="footer__link" href="https://t.me/rivieramoscow" target="_blank">
                <i class="ti ti-brand-telegram"></i> Telegram
              </a></li>
              <li><a class="footer__link" href="https://vk.com/rivieramoscow" target="_blank">
                <i class="ti ti-brand-vk"></i> ВКонтакте
              </a></li>
            </ul>
            <div style="margin-top:20px">
              <div class="footer__col-title">Приложение</div>
              <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:6px">
                iOS / Android — скоро
              </div>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <span>© Ривьера, 2025</span>
          <div style="display:flex;gap:16px">
            <a href="#" style="color:rgba(255,255,255,0.4)">Политика конфиденциальности</a>
            <a href="#" style="color:rgba(255,255,255,0.4)">Правила посещения</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

/* ===== COUNTDOWN ===== */
function startCountdown(elementId, targetDate) {
  function update() {
    const el = document.getElementById(elementId);
    if (!el) return;
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) { el.innerHTML = '<span style="font-weight:700;color:var(--coral)">Идёт прямо сейчас!</span>'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.innerHTML = `
      <div class="cnum"><div class="cnum__n">${d}</div><div class="cnum__l">дней</div></div>
      <div class="cnum"><div class="cnum__n">${h}</div><div class="cnum__l">часов</div></div>
      <div class="cnum"><div class="cnum__n">${m}</div><div class="cnum__l">минут</div></div>
      <div class="cnum"><div class="cnum__n">${s}</div><div class="cnum__l">секунд</div></div>
    `;
  }
  update();
  setInterval(update, 1000);
}

/* ===== FILTER CHIPS ===== */
function initChips(selector, callback) {
  document.querySelectorAll(selector).forEach(chip => {
    chip.addEventListener('click', function() {
      document.querySelectorAll(selector).forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      if (callback) callback(this.dataset.filter);
    });
  });
}
