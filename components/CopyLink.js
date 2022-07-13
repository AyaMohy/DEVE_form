

class CopyLink extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class','input-block')
        const copiedLink=document.createElement('p')
        copiedLink.textContent=this.getAttribute('linkAddress')
        copiedLink.setAttribute('class', 'copiedLink')
        const copyIcon=document.createElement('slot')
        copyIcon.setAttribute('name', 'copyIcon')
        const button=document.createElement('button')
        button.appendChild(copyIcon)

       
        
        const styleElem = document.createElement('link');
        styleElem.setAttribute('rel', 'stylesheet');
        styleElem.setAttribute('href', './css/style.css');

        // attach the created element to the shadow Dom
        shadow.appendChild(wrapper);
        shadow.appendChild(styleElem)
        wrapper.appendChild(copiedLink);
        wrapper.appendChild(button);
       
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






