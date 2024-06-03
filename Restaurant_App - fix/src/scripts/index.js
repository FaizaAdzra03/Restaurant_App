/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import './component/headerBar.js';
import './component/footerBar.js';
import './component/hero.js';

import swRegister from './utils/sw-register.js';
import App from './views/app.js';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#navigation'),
  content: document.querySelector('main'),
  nav: document.querySelector('#navigation>li>a'),
  favNav: document.querySelector('.fav-nav'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
