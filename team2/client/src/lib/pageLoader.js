
function addPageToComponentsArray() {
    var splitPath = window.location.pathname.split("/");
    var page = splitPath[splitPath.length - 1].split(".")[0];
    
    components.push(`content/${page}/${page}.js`);
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


addPageToComponentsArray();
// Load components
components.map(file => loadScript("../components/", file));
// Load project.js file
loadScript("../", "project.js");