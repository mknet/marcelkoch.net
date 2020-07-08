class MKContactForm extends HTMLFormElement {
    constructor() {
        super();
      let shadowRoot = this.shadowRoot
      shadowRoot.innerHTML = '<style>h3{ color: red; }</style>' +
                   '<h3>Shadow DOM</h3>';
    }
  }
  customElements.define("mk-contact-form", MKContactForm, { 
    extends: "form" 
  });