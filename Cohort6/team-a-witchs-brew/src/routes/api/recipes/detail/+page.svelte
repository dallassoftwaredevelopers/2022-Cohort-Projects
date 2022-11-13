<script lang="ts">
    import {json} from "@sveltejs/kit";

    let query = "";
    let results = "";

    async function getResults() {
        let formData = new FormData();
        formData.append('id', query);
        const response = await fetch("/api/recipes/detail",{
            method: "POST",
            body: formData,
        });
        results = await response.json();
    }
</script>

<input type="text" bind:value={query}>
<br>
<br>
<button on:click={getResults}>Send</button>
<br/>
{results}