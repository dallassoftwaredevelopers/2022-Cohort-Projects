<script async>
    import RecipeCard from "./RecipeCard.svelte";
    import { onMount } from "svelte";
    /**
     * @type {any}
     */
    let cards = []
    let topLevelModal = false

    onMount(async function(){
        const response = await fetch("http://127.0.0.1:5173/api/recipes/halloween");
        const data = await response.json();
        cards = data.default

        // @ts-ignore
        // document.getElementById("recipe-card-container").addEventListener("click", () =>{
        //     topLevelModal = false
            
        //     console.log("Set to false")
        // })
    })




</script>

<h1>Welcome to the Recipes page</h1>

<main>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div id="recipe-card-container" class="recipe-card-container">
        {#each cards as card (card.id)}
            <RecipeCard topLevelModal={topLevelModal} card={card} />

            <!-- <div class="recipe-card">
                <img class="recipe-image" alt="Recipe Image" src={card.image} />

                <h3 class="recipe-name">{card.name}</h3>
                <p class="recipe-rating">Rating: {card.stars}</p>
                <p class="recipe-steps"># of steps: {card.instructions.length}</p>
            </div> -->
        {/each}
    </div>
</main>
