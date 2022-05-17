function loadComponents(file) {
    var script = document.createElement("script");
    
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "src/components/" + file);

    document.getElementsByTagName("head")[0].appendChild(script);
}

const components = [
    // Pages
    "pages/index/index.js",

    // Components
    "base/head.js",
    "base/navbar.js",
    "base/footer.js"
];

components.map(file => loadComponents(file));