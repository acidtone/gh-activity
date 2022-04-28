# GitHub API: Activity Endpoint
Relevant Notes
- [April 27, 2022](https://acidtone.github.io/code-journal/#github-api-activity)

## User Stories
> As a coding instructor, I want to track the number of commits learners push so that I can give out Code Warrior trophies at the end of a course.

> As a coding instructor, I want to find commits with two parents so that I can evaluate if someone has resolved a merge conflict.

> As an event organizer, I want to count alternating commits between two coders on a single repo so that I can see if attendees have successfully completed a pair code session.

---

To start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy the app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
