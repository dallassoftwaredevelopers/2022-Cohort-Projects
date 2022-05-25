// This function was designed to get the name of the page
// and add it to the components array (below) in order to
// render the page dynamically.
function addPageToComponentsArray() {
    var path = window.location.pathname
    var pageName = path.substring(0, path.lastIndexOf(".html")).substring(path.lastIndexOf("/")+1);
    
    components.push(`content/${pageName}/${pageName}.js`);
}

// This is a generic function to load a js
// file that the page is required to inherit.
function loadScript(location, fileName) {
    var script = document.createElement("script")

    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", location + fileName);
    document.getElementsByTagName("head")[0].appendChild(script);
}

// List of components required to be loaded to render
// the page
const components = [
    "base/head.js",
    "base/navbar.js",
    "base/footer.js"
];

// Add the current page to the components array
addPageToComponentsArray();
// Load components
components.map(file => loadScript("./src/components/", file));
// Load project.js file
loadScript("../", "./src/project.js");