class IndexPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <main>
    
            <section id="home-first">
                <div class="container">

                        <div class="headerWrap">
                            <div class="headerText">
                            <h1 class="section-header">
                                What do you want to do today?
                            </h1>
                            <p class="section-text">
                                In a busy world of possibilities it can be hard to choose. Let <span class="idea-jar-ref">Idea Jar</span> help! 
                            </p>
                        </div>
                        
                        <div class="section-img">
                        </div>
                    </div>

                </div>
                <div class="wave-top">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </section>
    
            <!--Second-->
            <section id="home-second">
                <div class="container split alt-split">
                    <div class="polaroid-space">
                        <figure class="polaroid">
                            <img class="" src="./src/img/people-sitting-park.jpg" alt="">
                            <figcaption></figcaption>
                        </figure>
                        <figure class="polaroid">
                            <img class="" src="./src/img/people-on-river.jpg" alt="">
                            <figcaption></figcaption>
                        </figure>
                        
                    </div>
                        
                    <div class="section-space card">
                        <h1 class="section-header">
                            Explore your world
                        </h1>
                        <p class="section-text">
                            <span class="idea-jar-ref">Idea Jar</span> allows you to keep track of resturants you want to try and fun activities you'd like to do. 
                        </p>
                    </div>
                </div>
                <!--Bottom SVG wave-->
                <div class="wave-bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>                
            </section>
    
            <section id="home-third">
                <div class="container">

                        <div class="section-space">
                            <h1 class="section-header">
                                Try Idea Jar out!
                            </h1>
                            <p class="section-text">
                                <section class="containerExplain">

                                    <section>
                                        <div class="putIdeaExplain outdoor">Add an Idea</div>
                                        <p>Add resturants and fun activities when you learn about them.</p>
                                    </section>
                                    <section>
                                        <div class="takeIdeaExplain indoor">Get an Idea</div>
                                        <p>Have <span class="idea-jar-ref">Idea Jar</span> randomly select from the ideas
                                            you've entered</p>
                                    </section>
                                </section>
                            </p>
                            <button class="form-btn stay-home" onclick="location.href='./login-signup.html'">
                                Sign Up
                            </button>
                        </div>
                        
                        <div class="section-img index-jar-shake">
                            <img src="./src/img/jar_2.png" alt="The Idea Jar">
                        </div>

                </div>
                
            </section>
    
        </main>
        `;
    }
}

customElements.define('x-index-page', IndexPage);

