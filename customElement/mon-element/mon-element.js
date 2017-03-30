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
     this.innerHTML = "<p>Je suis un super WebComponent</p>";
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