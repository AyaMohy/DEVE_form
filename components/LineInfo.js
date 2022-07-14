

class LineInfo extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const wrapper = document.createElement('div');

        const description = document.createElement('slot');
        description.setAttribute('name', 'left')

        const info = document.createElement('slot');
        description.setAttribute('name', 'right')
        
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', './css/style.css');

        // attach the created element to the shadow Dom
        shadow.appendChild(wrapper);
        shadow.appendChild(linkElem)
        wrapper.appendChild(description);
        wrapper.appendChild(info);
    }


}

window.customElements.define('line-info', LineInfo);






