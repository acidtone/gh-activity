export async function get() {
  const res = await fetch('https://api.github.com/users/acidtone/events');
  const events = await res.json();

  return {
    body: {
      events: events
    }
  };
}