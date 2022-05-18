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
            <!-- google font -->
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Cambay:wght@400;700&family=Handlee&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="../project.css">
            <title>Team 2/B</title>
        </head>
        `;
    }
}

customElements.define('x-head', Head);

