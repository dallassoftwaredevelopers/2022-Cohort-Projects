function loadComponents(file) {
    var script = document.createElement("script");
    
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "../components/" + file);

    document.getElementsByTagName("head")[0].appendChild(script);
}

function loadProjectFile() {
    var script = document.createElement("script");

    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "../project.js")
    document.getElementsByTagName("head")[0].appendChild(script);
}

const components = [
    // Pages
    "content/index/index.js",
    "content/get-idea/index.js",
    "content/add-idea/index.js",
    "content/login-signup/index.js",

    // Components
    "base/head.js",
    "base/navbar.js",
    "base/footer.js"
];

loadProjectFile();
components.map(file => loadComponents(file));