<div class="container header-container">
  <a href="./index.html" class="logo__link">
    <img
      srcset="
        ./images/header/logo_s_x1.png  40w,
        ./images/header/logo_s_x2.png  80w,
        ./images/header/logo_m_x1.png  48w,
        ./images/header/logo_m_x2.png  96w,
        ./images/header/logo_l_x1.png  60w,
        ./images/header/logo_l_x2.png 120w
      "
      sizes="(min-width: 1200px) 60px, (min-width: 768px) 48px, (min-width: 480px) 40px"
      src="./images/header/logo_l_x1.png"
      alt="logo"
    />
  </a>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item"><a class="nav__link link" href="">Home</a></li>
      <li class="nav__item">
        <a class="nav__link link" href="">How it’s made?</a>
      </li>
      <li class="nav__item">
        <a class="nav__link link" href="">Our products</a>
      </li>
      <li class="nav__item"><a class="nav__link link" href="">Contact</a></li>
    </ul>
  </nav>
  <button
    class="menu-toggle js-open-menu"
    aria-expanded="false"
    aria-controls="mobile-menu"
  >
    <svg class="mobile-menu__icon" width="32" height="32">
      <use href="./images/ice-cream-vectors.svg#icon-mobile-menu-open"></use>
    </svg>
  </button>
  <button class="button nav__btn" type="submit">Buy now</button>
</div>
