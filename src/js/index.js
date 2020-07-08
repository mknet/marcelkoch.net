import dialogPolyfill from 'dialog-polyfill/dist/dialog-polyfill.esm'
import cookie from 'js-cookie'

import DocReady from 'es6-docready'
import sendInfoRequest from './contact'

import { Elm } from '../Main.elm'

Elm.Main.init({
  node: document.querySelector('main')
})

const CONSENT_COOKIE = 'mtm_consent'

const bodyElement = document.querySelector('body')

const dialog = document.querySelector('dialog');
dialogPolyfill.registerDialog(dialog);

dialog.addEventListener('click', (e) => {
  if(!e.target.closest('div')) {
    e.target.close();
  }
})


const header = document.querySelector('body > header > .object');

DocReady( () => {
  setTimeout(() => {
    if (cookie.get(CONSENT_COOKIE)) {
      body.classList.remove('no-cookie-decision');
    } else {
      header.classList.add("cookie-bar");
    }
  }, 1000)
} )

const cookiesOkButton = document.querySelector('button[name=cookies-ok]');
cookiesOkButton.addEventListener('click', (e) => {
  e.preventDefault()
  _paq.push(['rememberConsentGiven', 1000]);
  header.classList.remove('cookie-bar')
  const flankContentElement = document.querySelector('.flank-content');
  flankContentElement.textContent='Vielen Dank!'
})

const cookiesNoButton = document.querySelector('button[name=cookies-no]');
cookiesNoButton.addEventListener('click', (e) => {
  e.preventDefault()
  header.classList.remove('cookie-bar')
  const flankContentElement = document.querySelector('.flank-content');
  flankContentElement.textContent='Sehr schade!'
})

const body = document.querySelector('body');
body.classList.add('no-cookie-decision');
const flixBox = document.querySelector('.flip-box .object');
flixBox.addEventListener('transitionend', function(e) {
  body.classList.remove('no-cookie-decision');
}, false);


const emailInput = document.querySelector('form input');

const moreLinks = document.querySelectorAll('#methoden a');

moreLinks.forEach(moreLink => {
  moreLink.addEventListener('click', function(e) {
    _paq.push(['trackEvent', 'link', 'methods', e.target.pathname])
    e.preventDefault();
    e.stopPropagation();
    if (!dialog.open) {
      dialog.showModal();
      debugger;
      emailInput.blur();
    }
  })
});

const moreSections = document.querySelectorAll('#methoden section');

moreSections.forEach(moreSection => {
  moreSection.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    const linkElement = e.currentTarget.querySelector('a')
    linkElement.click()
  })
});

const formElement = document.querySelector('form');
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  sendInfoRequest(formElement.elements[0].value);
})
