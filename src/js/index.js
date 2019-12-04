import dialogPolyfill from 'dialog-polyfill/dist/dialog-polyfill.esm'
import cookie from 'js-cookie'

import DocReady from 'es6-docready'

const CONSENT_COOKIE = 'mtm_consent'

const dialog = document.querySelector('dialog');
dialogPolyfill.registerDialog(dialog);


const coachingLink = document.querySelector('a.coaching');
coachingLink.addEventListener('click', function(e) {
  e.preventDefault();
  dialog.showModal();
}, false);

const header = document.querySelector('body > header > .object');

DocReady( () => {
  setTimeout(() => {
    if (cookie.get(CONSENT_COOKIE)) {
      console.log('Cookie is already set')
    } else {
      header.classList.add("cookie-bar");
      console.log('Cookie has just been set')
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
