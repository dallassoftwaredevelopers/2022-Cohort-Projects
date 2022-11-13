<script async>
  import RecipeCard from "./RecipeCard.svelte";
  import { onMount } from "svelte";
  import footerPic from "../../static/pumpkins.png";
  import navLogo from "../../static/logo.png";

  /**
   * @type {any}
   */
  let cards = [];
  let topLevelModal = false;
  let results
  let query = ""


  onMount(async function () {
    const response = await fetch("http://127.0.0.1:5173/api/recipes/halloween");
    const data = await response.json();

    cards = data.default;

    // @ts-ignore
    // document.getElementById("recipe-card-container").addEventListener("click", () =>{
    //     topLevelModal = false

    //     console.log("Set to false")
    // })
  });

  /**
   * @param {{ preventDefault: () => void; }} e
   */
   async function getResults(e) {
    e.preventDefault()
      let formData = new FormData();
      formData.append('query', query);

      const response = await fetch("/api/recipes",{
          method: "POST",
          body: formData,
      });

      results = await response.json();
      results = results.results


      // @ts-ignore
      await results.map(async (prev) =>{
        let formData = new FormData();
        let instructions
        let query = prev.id

        formData.append('id', query);
        const response = await fetch("/api/recipes/detail",{
          method: "POST",
          body: formData,
        })
        instructions = await response.json();
        instructions = instructions[0].steps
        let ingredients = []
        // console.log(instructions[0].ingredients[0].name)

        for(let i = 0 ; i < instructions.length; i++){///Goes through steps
          for(let j = 0; j < instructions[i].ingredients.length; j++){///Goes through ingredients
              ingredients.push(instructions[i].ingredients[j].name)
          }
        }
        // console.log(ingredients)
        prev.ingredients = ingredients
        prev.instructions = instructions
      })

      console.log(results)
      cards = results
  }


</script>



      <nav class="prop flex items-center text-center flex-wrap p-4">
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
              <a
                href="/"
                class="block mt-4 lg:inline-block lg:mt-0 mr-4"
              >
                Home
              </a>
              <a
                href="/recipes"
                class="block mt-4 lg:inline-block lg:mt-0  mr-4"
              >
                Recipes
              </a>
              <a
                href="/featured"
                class="block mt-4 lg:inline-block lg:mt-0 mr-4"
              >
                Featured
              </a>
              <a
                href="/about"
                class="block mt-4 lg:inline-block lg:mt-0 mr-4"
              >
                About Us
              </a>
            </div>
        
            <form on:submit={getResults} class="flex items-center">
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
                  bind:value={query}
                />
              </div>
            </form>
            <!-- <button on:click={getResults} id="submit-button">Search</button> -->
          </div>
        </nav>
        
        <slot />



<main>
  <!-- svelte-ignore a11y-click-events-have-key-events -->

  <div id="recipe-card-container" class="recipe-card-container">
    {#each cards as card (card.id)}
      <RecipeCard {getResults} topLevelModal={topLevelModal} card={card} />
    {/each}
  </div>


<footer>
  <img src={footerPic} alt="picture of pumpkins" class="footer-picture">
</footer>

</main>
