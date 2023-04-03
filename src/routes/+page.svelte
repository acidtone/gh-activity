<script>
  export let data;
  let count = data.events.reduce((previous, item) => {
    if (item.type === 'PushEvent') return previous + 1;
    return previous;
  }, 0);
</script>

<h1>GitHub Activity Tracker</h1>
<p>Recent <code>PushEvents</code> from <code>@acidtone</code>: {count}</p>
<p>See console log for raw data.</p>
<ul>
  {#each data.events as event}
  <li>{event.created_at}: {event.type}</li>
  {/each}
</ul>
