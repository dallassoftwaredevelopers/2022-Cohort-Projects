class Head extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!--Font awesome cdn-->
            <script src="https://kit.fontawesome.com/d828ae233c.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="src/project.css">
            <script defer src="./src/project.js"></script>

            <title>Team 2/B</title>
        </head>
        `;
    }
}

customElements.define('x-head', Head);

