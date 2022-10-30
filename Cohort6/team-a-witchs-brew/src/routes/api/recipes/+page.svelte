<script lang="ts">
    import {json} from "@sveltejs/kit";

    let query = "";
    let results = "";

    async function getResults() {
        let formData = new FormData();
        formData.append('query', query);
        // const response = await fetch("/api/recipes/halloween", {
        //     method: "GET",
        //     // body: formData,
        // });
        const response = await fetch("/api/recipes",{
            method: "POST",
            body: formData,
        });
        // results = await response.text();
        results = await response.json();
        // results = JSON.stringify(results);
        console.log(results);
    }
</script>

<input type="text" bind:value={query}>
<br>
<br>
<button on:click={getResults}>Send</button>
<br/>
{results}