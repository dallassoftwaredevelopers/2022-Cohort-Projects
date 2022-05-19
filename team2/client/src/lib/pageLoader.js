function addPageToComponentsArray() {
    var path = window.location.pathname
    var pageName = path.substring(0, path.lastIndexOf(".html")).substring(path.lastIndexOf("/")+1);
    
    components.push(`content/${pageName}/${pageName}.js`);
}

function loadScript(location, fileName) {
    var script = document.createElement("script")

    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", location + fileName);
    document.getElementsByTagName("head")[0].appendChild(script);
}

const components = [
    // Components
    "base/head.js",
    "base/navbar.js",
    "base/footer.js"
];

// Add the current page to the components array
addPageToComponentsArray();
// Load components
components.map(file => loadScript("../components/", file));
// Load project.js file
loadScript("../", "project.js");