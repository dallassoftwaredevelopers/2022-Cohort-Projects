class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }
    
    render() {
        this.innerHTML = `
        <header>
            <nav>
                <div class="container">
                    <img id="nav-logo" src="./src/img/logo.png" alt="Idea jar logo">
                    <div id="mobile-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul class="nav-list">
                        <li class="nav-item">
                            <a href="./index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="./add-idea.html">Add Idea</a>
                        </li>
                        <li class="nav-item">
                            <a href="./get-idea.html">Get Idea</a>
                        </li>
                        <li>
                            <a class="nav-btn" href="./login-signup.html">Sign In</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        `;
    }
}


customElements.define('x-navbar', Navigation);
