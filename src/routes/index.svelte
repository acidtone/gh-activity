<script>
  export let events;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<ul>
  {#each events as event}
  <li>{event.created_at}: {event.type}</li>
  {/each}
</ul>
