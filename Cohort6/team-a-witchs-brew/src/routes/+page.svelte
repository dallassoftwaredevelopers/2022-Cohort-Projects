<script>
  import heroPicture from "../static/hero area picture.jpeg";
  import yumSoups from "../static/yum soups picture.jpeg";
  import holidayMenu from "../static/holiday menu picture.jpeg";
  import warmPies from "../static/pumpkin pie.jpeg";
  import picFrame from "../static/frame.png";

  import Jacob from "../static/Jacob.jpg";
  import Mike from "../static/Mike.png";
  import Sabina from "../static/Sabina.jpg";


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

    <div class="team-pictures flex justify-evenly items-center">
      <div class="pics">
      <img class="w-[350px] h-[350px] Jacob team-members " src={Jacob} alt="picture of Jacob">
      <h4>Jacob</h4>
    </div>

    <div class="pics">
      <img class="w-[350px] h-[350px] Mike team-members" src={Mike} alt="picture of Mike">
      <h4>Mike</h4>
    </div>

    <div class="pics">
      <img class="w-[300px] h-[350px] Sabina team-members" src={Sabina} alt="picture of Sabina">
      <h4>Sabina</h4>
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

  h2, h3, h4 {
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
    font-weight: 500;
    padding-top: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 0.10em;
  }

  h4 {
    font-size: 50px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 0.10em;
  }

  .images {
    border-radius: 20px;
    filter: drop-shadow(5px 5px 3px #2d081f);
  }

  .images:hover {
    width: 600px;
    height: 400px;
    transition: 500ms ease;
  }

  h3:hover {
    font-size: 50px;
  }


  /* -webkit-transform: scaleY(-1);
    -moz-transform: scaleY(-1);
    -ms-transform: scaleY(-1);
    -o-transform: scaleY(-1);
    transform: scaleY(-1);*/

  
  .footer {
    background-image: url("../static/footer picture.jpeg");
    background-size: auto 100%;
    transform: rotateX(180deg);
  }

  .unflip {
    transform: rotateX(180deg);
    padding-bottom: 230px;
  }

  .team-pictures {
    padding-top: 0px;
    padding-bottom: 40px;
  }

  .team-members {
    border: 40px solid transparent;
    border-image: url("../static/frame.png") 12% fill round;
  }

  /*
  .footer * {
    -webkit-transform: scaleY(-1);
    -moz-transform: scaleY(-1);
    -ms-transform: scaleY(-1);
    -o-transform: scaleY(-1);
    transform: scaleY(-1);
  }
*/

/*  
.team {
    position: absolute;
    top: 80%;
    left: 40%;
    margin: 0;
    padding: 0;
  }*/

 
  </style>