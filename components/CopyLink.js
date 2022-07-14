const template = document.createElement('template');
template.innerHTML=
    `
        <div class="copiedWrapper">
            <p class="copiedLink px-2"> </p>
            <button class="iconCopy px-2"><slot name="copyIcon"> </slot> </button>
        </div>
    `;

class CopyLink extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('linkAddress');


       
        
        const styleElem = document.createElement('link');
        styleElem.setAttribute('rel', 'stylesheet');
        styleElem.setAttribute('href', './css/style.css');
        shadow.appendChild(styleElem)
       
    }

    copyToClipboard(){
        const linkAddress = this.getAttribute('linkAddress'); 
        navigator.clipboard.writeText(linkAddress);  
        // console.log(linkAddress)   
    }

    connectedCallback() {
        this.shadowRoot.querySelector('button').addEventListener('click', () => this.copyToClipboard());
       
    }
     
}

window.customElements.define('copy-link', CopyLink);






