<script>
    import ExpandedRecipe from "./ExpandedRecipe.svelte";

    // /**
    // * @type {{name: string; ingredients: string | any[]; image: any; stars: any; instructions: string | any[]; }}
    // */
    // export let card;
    let {card, topLevelModal} =$$props

    let showModal = false

    function openModal(){
        showModal = !showModal
    }
    function closeModal(){
        showModal = false
    }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={openModal} class="recipe-card">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img class="recipe-image" alt="Recipe Image" src={card.image} />

    <h3 class="recipe-name">{card.name}</h3>
    <p class="recipe-rating">Rating: {card.stars}</p>
    <p class="recipe-steps"># of steps: {card.instructions.length}</p>
</div>


{#if showModal}
    <ExpandedRecipe closeModal={closeModal} card={card}/>
{/if}