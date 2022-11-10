<script>
  import heroPicture from "../static/hero area picture.jpeg";
  import yumSoups from "../static/yum soups picture.jpeg";
  import holidayMenu from "../static/holiday menu picture.jpeg";
  import warmPies from "../static/pumpkin pie.jpeg";
  import picFrame from "../static/frame.png";
</script>


<div class="hero-area">
    <div class="hero w-full h-[800px] bg-cover bg-center flex items-center" />
    <div class="hero-slogan">
      <h1 class="slogan-1">The perfect</h1>
      <h1 class="slogan-2">weather to cook...</h1>
    </div>
  </div>

  <div class="second-part">
    <h2 class="feautured">Featured Recipes</h2>
    <div class="recipies w-full h-[600px] flex justify-around items-center">
      <div class="soups">
        <img
          class="w-[500px] h-[300px] images"
          src={yumSoups}
          alt="picture of soup"
        />
        <h3>Yum Soups</h3>
      </div>

      <div class="holiday">
        <img
          class="w-[500px] h-[300px] images"
          src={holidayMenu}
          alt="picture of holiday menu"
        />
        <h3>Holiday Menu</h3>
      </div>

      <div class="pies">
        <img
          class="w-[500px] h-[300px] images"
          src={warmPies}
          alt="picture of pumpkin pie"
        />
        <h3>Warm Pies</h3>
      </div>
    </div>
  </div>

  <div class="footer w-full h-[800px]">
    <h2 class="team">Meet the team</h2>
    <div class="team-pictures">
      <div class="frames flex justify-around items-center">
        <div class="">
          <img
            class="w-[300px] h-[400px] frame"
            src={picFrame}
            alt="picture of a frame"
          />
        </div>

        <div>
          <img
            class="w-[300px] h-[400px] frame"
            src={picFrame}
            alt="picture of a frame"
          />
        </div>

        <div>
          <img
            class="w-[300px] h-[400px] frame"
            src={picFrame}
            alt="picture of a frame"
          />
        </div>
      </div>
    </div>
  </div>

  <slot />

  <style>
    .hero {
    background-image: url("../static/hero area picture.jpeg");
    transform: scaleX(-1);
  }

  .slogan-1,
  .slogan-2 {
    font-family: "Princess Sofia", cursive;
    font-size: 100px;
    color: #2d081f;
    letter-spacing: 0.1em;
  }

  .slogan-1 {
    position: absolute;
    top: 35%;
    left: 5%;
  }

  .slogan-2 {
    position: absolute;
    top: 50%;
    left: 5%;
  }

  .second-part {
    background-image: url("../static/recipies-bg.jpeg");
    padding: 10 px, auto;
  }

  h2,
  h3 {
    font-family: "Princess Sofia", cursive;
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
    filter: drop-shadow(5px 5px 3px #2d081f);
    padding: 0;
    margin: 0;
  }

  .images:hover {
    width: 600px;
    height: 400px;
    transition: 500ms ease;
  }

  h3:hover {
    font-size: 50px;
  }

  .footer {
    background-image: url("../static/footer picture.jpeg");
    background-size: auto 800px;
    -webkit-transform: scaleY(-1);
    -moz-transform: scaleY(-1);
    -ms-transform: scaleY(-1);
    -o-transform: scaleY(-1);
    transform: scaleY(-1);
  }

  .footer * {
    -webkit-transform: scaleY(-1);
    -moz-transform: scaleY(-1);
    -ms-transform: scaleY(-1);
    -o-transform: scaleY(-1);
    transform: scaleY(-1);
  }

  .team {
    position: absolute;
    top: 80%;
    left: 40%;
    margin: 0;
    padding: 0;
  }

 
  </style>