<script>
  import "../app.css";

  import navLogo from "../static/logo.png";

  import heroPicture from "../static/hero area picture.jpeg";

  import yumSoups from "../static/yum soups picture.jpeg";

  import holidayMenu from "../static/holiday menu picture.jpeg";

  import warmPies from "../static/pumpkin pie.jpeg";

  import picFrame from "../static/frame.png";


</script>

<body>
  <nav class="flex items-center text-center flex-wrap p-4">
    <div>
      <img class="w-[250px] h-[100px]" src={navLogo} alt="logo" />
    </div>

    <!-- ----------------------------- -->

    <!-- TODO SR: make interactive -->

    <!-- <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div> -->

    <!-- ----------------------------- -->

    <div
      class="nav-options w-full block flex-grow lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-sm lg:flex-grow">
        <a href="/" class="block mt-4 lg:inline-block lg:mt-0 mr-4"> Home </a>
        <a href="/recipes" class="block mt-4 lg:inline-block lg:mt-0  mr-4">
          Recipes
        </a>
        <a href="/featured" class="block mt-4 lg:inline-block lg:mt-0 mr-4">
          Featured
        </a>
        <a href="/about" class="block mt-4 lg:inline-block lg:mt-0 mr-4">
          About Us
        </a>
      </div>

      <form class="flex items-center">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="magnifying-glass w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              /></svg
            >
          </div>
          <input
            type="text"
            id="simple-search"
            class="nav-search-bar text-sm block pl-10 p-2.5"
            placeholder="Search..."
          />
        </div>
      </form>
    </div>
  </nav>

  <div class="hero-area">
  <div class="hero w-full h-[800px] bg-cover bg-center flex items-center"></div>
    <div class="hero-slogan">
      <h1 class="slogan-1">The perfect</h1>
      <h1 class="slogan-2">wether to cook...</h1>
    </div>
  </div>

  
  <div class="second-part">
    <h2 class="feautured">Featured Recipes</h2>
  <div class="recipies w-full h-[600px] flex justify-around items-center">

    <div class="soups">
      <img class="w-[500px] h-[300px] images" src={yumSoups} alt="picture of soup">
      <h3>Yum Soups</h3>
    </div>

      <div class="holiday">  
        <img class="w-[500px] h-[300px] images" src={holidayMenu} alt="picture of holiday menu">
        <h3>Holiday Menu</h3>
      </div>

        <div class="pies">
          <img class="w-[500px] h-[300px] images" src={warmPies} alt="picture of pumpkin pie">
          <h3>Warm Pies</h3>
        </div>

  </div>
</div>

<div class="footer w-full h-[800px]">
<h2 class="team">Meet the team</h2>
<div class="team-pictures">
  <div class="frames flex justify-around items-center">
  <div class="">
    <img class="w-[300px] h-[400px] frame" src="{picFrame}" alt="picture of a frame">
  </div>
  
  <div>
    <img class="w-[300px] h-[400px] frame" src="{picFrame}" alt="picture of a frame">
  </div>

  <div>
    <img class="w-[300px] h-[400px] frame" src="{picFrame}" alt="picture of a frame">
  </div>
</div>
</div>

</body>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Princess+Sofia&display=swap');

  nav {
    background-color: #2d081f;
  }

  .nav-options a {
    color: #f1886d;
    font-weight: 500;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    letter-spacing: 0.12em;
    font-size: 20px;
    margin: auto 10px;
  }

  .nav-options a:hover {
    color: #e5e975;
    text-decoration: underline;
    font-size: 22px;
  }

  .nav-options a:active {
    color: #972e3f;
  }

  .nav-search-bar {
    border-radius: 25px;
  }

  .nav-search-bar {
    background-color: #2d081f;
  }

  .nav-search-bar {
    border-color: #f1886d;
    background-color: transparent;
    color: #f1886d;
    border-radius: 25px;
    border-width: 2px;
    width: 80%;
  }

  .nav-search-bar:focus {
    outline: none !important;
    border: 3px solid #e5e975;
    color: #e5e975;
  }

  .nav-search-bar::placeholder {
    color: #f1886d;
  }

  .magnifying-glass {
    fill: #f1886d;
  }

  .nav-search-bar:focus::placeholder {
    color: #e5e975;
  }

  .magnifying-glass:focus {
    fill: #e5e975;
  }

  .hero {
    background-image: url('../static/hero area picture.jpeg');
    transform: scaleX(-1);
  }

.slogan-1, .slogan-2 {
  font-family: 'Princess Sofia', cursive;
  font-size: 100px;
  color:#2d081f;
  letter-spacing: 0.1em;
}

.slogan-1 {
  position:absolute;
  top: 35%;
  left: 5%;
}

.slogan-2 {
  position: absolute;
  top: 50%;
  left: 5%;
}

.second-part {
  background-image: url('../static/recipies-bg.jpeg');
  padding: 10 px, auto;
}

h2, h3 {
  font-family: 'Princess Sofia', cursive;
  color: #972e3f;
  text-align: center;
}

h2 {
  font-size: 60px;
  font-weight: 600;
  padding-top: 100px;
  padding-bottom: 0;
  margin: 0;
}

h3 {
  font-size: 30px;
  font-weight: 600;
  padding-top: 30px;
}

.images {
  border-radius: 20px;
  filter:drop-shadow(5px 5px 3px #2d081f);
  padding: 0;
  margin: 0;
}

.images:hover {
  width: 600px;
  height: 400px;
}

h3:hover {
  font-size: 50px;
}

.footer {
background-image: url('../static/footer picture.jpeg');
background-size: auto 800px;
-webkit-transform:scaleY(-1);
-moz-transform:scaleY(-1);
-ms-transform:scaleY(-1);
-o-transform:scaleY(-1);
transform:scaleY(-1);
}

.footer * {
-webkit-transform:scaleY(-1);
-moz-transform:scaleY(-1);
-ms-transform:scaleY(-1);
-o-transform:scaleY(-1);
transform:scaleY(-1);
}
</style>
