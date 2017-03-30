(function() {
'use strict';

    
// Feature detect
if (!(window.customElements && document.body.attachShadow)) {
  document.querySelector('mon-element').innerHTML = "<b>Your browser doesn't support Shadow DOM and Custom Elements v1.</b>";
  return;
}



    
class MonElement extends HTMLElement {

  constructor() {
    super(); // always call super() first in the ctor.
    var shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: 'Roboto Slab';
          padding: 16px;
        }
        :host([background]) {
          background: var(--background-color, #9E9E9E);
          
        }
      </style>
      <slot></slot>
    `;
  }
  
 
  connectedCallback() {
      this.addEventListener("click", this._click);
  }
  
  disconnectedCallback() {
    this.removeEventListener("click", this._click);
  }
  _click(){
      console.log("clic");
      console.log(this);
  }
}

    
    
customElements.define('mon-element',MonElement);
})();   