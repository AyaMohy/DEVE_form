

class CardHeader extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        let imgUrl;
        const wrapper = document.createElement('div');
        wrapper.setAttribute("class", 'headerWrapper')
        const headerTitle = document.createElement('h2');
        headerTitle.textContent = this.getAttribute('headerTitle');
        headerTitle.setAttribute('class','headerTitle')

        const captionText = document.createElement('span');
        captionText.textContent = this.getAttribute('captionText');
        captionText.setAttribute('class','captionText')
        
        if(this.hasAttribute('avatar')){
            imgUrl=this.getAttribute('avatar')
        }else{
            imgUrl='img/default.png'
        }
        const img = document.createElement('img');
        img.src = imgUrl;

        // Apply external styles to the shadow DOM
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', './css/style.css');

        // attach the created element to the shadow Dom
        shadow.appendChild(wrapper);
        shadow.appendChild(linkElem)
        wrapper.appendChild(img);
        wrapper.appendChild(headerTitle);
        wrapper.appendChild(captionText);
        
    }


}

window.customElements.define('card-header', CardHeader);








