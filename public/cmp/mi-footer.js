class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Monreal Eusebio Jose Luis.`;
    }
}
customElements.define("mi-footer", MiFooter);