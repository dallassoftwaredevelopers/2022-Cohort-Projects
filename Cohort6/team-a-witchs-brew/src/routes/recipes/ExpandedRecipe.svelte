<script>
    // /**
    //  * @type {{ name: string; ingredients: string | any[]; image: any; stars: any; instructions: string | any[]; }}
    //  */
    //   export let card;

    let {card, closeModal} =$$props

</script>



<!-- <div class="positioning-modal-container"> -->
    <div class="recipe-modal-container">
        <div class="modal-top-half">
            <div class="modal-top-left">
                <h2 class="modal-ingredients">Ingredients:</h2>
                <ul style="list-style-type: circle;">
                    {#each card.ingredients as ingredient}
                        <li>{ingredient}</li>
                    {/each}                    
                </ul>
            </div>
            <div class="modal-top-right">
                <span class="x" on:click={closeModal} style="float: right;">&#x2716;</span>
                <!-- svelte-ignore a11y-missing-attribute -->
                <img class="modal-image" src={card.image} />
            </div>
        </div>
        <div class="modal-bottom-half">
            <h2 class="modal-instructions">Instructions</h2>
            <ul style="list-style-type: circle;">
                {#each card.instructions as instruction}
                    <li>{instruction.directions ? instruction.directions : instruction.step}</li>
                {/each}                
            </ul>
        </div>
    </div>
<!-- </div> -->
