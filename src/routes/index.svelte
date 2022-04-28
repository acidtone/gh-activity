<script>
  export let events;
  export let count = events.reduce((previous, item) => {
    if (item.type === 'PushEvent') return previous + 1;
    return previous;
  }, 0);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<strong>Total Push Events: {count}</strong>
<ul>
  {#each events as event}
  <li>{event.created_at}: {event.type}</li>
  {/each}
</ul>
