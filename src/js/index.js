import dialogPolyfill from 'dialog-polyfill/dist/dialog-polyfill.esm'
import cookie from 'js-cookie'

const CONSENT_COOKIE = 'mtm_consent'

const dialog = document.querySelector('dialog');
dialogPolyfill.registerDialog(dialog);


const coachingLink = document.querySelector('a.coaching');
coachingLink.addEventListener('click', function(e) {
  e.preventDefault();
  dialog.showModal();
}, false);


console.log('Bla'+cookie.get('mkCookie'))

debugger;
if (cookie.get(CONSENT_COOKIE)) {
  console.log('Cookie is already set')
} else {
  _paq.push(['rememberConsentGiven', 1000]);
  console.log('Cookie has just been set')
}


document.cookie = 'mkCookie=jo; expires=Wed, 31 Oct 2020 08:50:17 GMT;path=/';
