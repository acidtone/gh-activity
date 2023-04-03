export async function load({ fetch }) {
  const res = await fetch('https://api.github.com/users/acidtone/events?per_page=100');
  const events = await res.json();
  console.log(events);
  return {
    events
  };
}