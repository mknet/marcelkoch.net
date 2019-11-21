import dialogPolyfill from 'dialog-polyfill/dist/dialog-polyfill.esm'


const dialog = document.querySelector('dialog');
dialogPolyfill.registerDialog(dialog);


const coachingLink = document.querySelector('a.coaching');
coachingLink.addEventListener('click', function(e) {
  e.preventDefault();
  dialog.showModal();
}, false);
