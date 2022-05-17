class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer>
            <div class="containerFooter">
                <div>
                    <h3 class="text-center">
                        <a href="./src/team-2b/team-page.html">
                            The Unstoppable Team 2B
                        </a>
                    </h3>
                    <p class="text-center names">
                        Ariel, Jennifer, <br> Michelle, John
                    </p>
                </div>

                <div>
                    <h3 class="text-center">
                        Check out our work
                    </h3>
                    <div class=" text-center media-tray">

                        <a target="_blank" href="https://fcc-dallas.com/">
                            <i class="fab fa-brands fa-free-code-camp fa-2x"></i>
                        </a>
                        <a target="_blank" href="https://github.com/jgvargas/2022-Cohort-Projects">
                            <i class="fab fa-brands fa-github fa-2x" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('x-footer', Footer);

