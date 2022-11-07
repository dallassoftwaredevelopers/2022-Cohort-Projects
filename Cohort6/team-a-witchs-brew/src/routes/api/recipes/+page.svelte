<script lang="ts">

    let query = "";
    let results = "";

    async function getResults() {
        let formData = new FormData();
        formData.append('query', query);

        const response = await fetch("/api/recipes",{
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