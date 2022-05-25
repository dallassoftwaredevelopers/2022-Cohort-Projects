class LoginSignUpPage extends HTMLElement {
    constructor() {
        super();
        this.loginProps = {
            username: "",
            password: "",
        };
        this.signupProps = {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    }

    login() {
        var form = document.getElementById('login');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            
            var requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            };

            fetch(`http://localhost:17510/Api/Auth/Login`, requestOptions)
            .then(response => console.log(response.json()))
            .catch(error => console.log(error));
        })
    }

    #loginForm = `
    <form id="login" class="">

        <h2 class="text-center">Login</h2>

        <div class="text-center form-message form-message-error form-message-success"></div>
        <!--Username/email-->
        <div class="form-input-group">
            <input class="form-input" placeholder="Username" autofocus required type="text" id="username">
            <div class="form-message"></div>
        </div>
        <!--Password-->
        <div class="form-input-group">
            <input class="form-input" placeholder="Password" type="password" required id="password">
            <div class="form-message"></div>
        </div>
        <!--Submit-->
        <button type="submit" class="form-btn">Continue</button>
        <p class="form-text text-center">
            <a href="">Forgot your password?</a>
        </p>
        <p class="form-text text-center">
            <a id="linkCreateAccount" href="">Don't have an account? Create account</a>
        </p>
    </form>
    `;

    #signupForm = `
    <form id="createAccount" class="hide-element" action="" method="">

        <h2 class="text-center">Create Account</h2>

        <div class="text-center form-message form-message-error"></div>
        <div class="form-input-group">
            <input 
                autocomplete="off" 
                class="form-input" 
                placeholder="Username" 
                autofocus 
                type="text" 
                name="" 
                id="createUsername">
            <div class="form-message"></div>
        </div>
        <!--Create password-->
        <div class="form-input-group">
            <div class="text-center form-message">Use at least one number and symbol @ # ! $</div>
            <input 
                class="form-input" 
                placeholder="Password" 
                type="password" 
                name="" 
                id="createPassword">
            
        </div>
        <div class="form-input-group">
            <input 
                class="form-input" 
                placeholder="Confirm password" 
                type="password" 
                name="" 
                id="createPasswordConfirm">
            <div class="form-message"></div>
        </div>
        <!--Submit-->
        <button type="submit" class="form-btn ">Continue</button>
        
        <p class="form-text text-center">
            <a id="linkLogin" href="">Already have an account? Sign in</a>
        </p>
    </form>
    `;
    
    connectedCallback() {
        this.render();

        this.login();
    }

    render() {
        this.innerHTML = `
        <main id="login-page" class="container">
        <section class="card card-login">
            ${this.#loginForm}

            ${this.#signupForm}
            
        </section>
    </main>
        `;
    }
}

customElements.define('x-login-signup-page', LoginSignUpPage);

