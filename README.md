# Shopping List
This repository is my solution to frontendeval's [Shopping List prompt](https://frontendeval.com/questions/shopping-list).

## Requirements
- [x] Entering more than two characters in the input should show a list of partially matching items (starting with the same characters)
- [x] Clicking an item in the list of partially matching items should add it to the list
- [x] Adding the same item multiple times is allowed
- [x] Pressing the 'X' next to an item should delete it from the list
- [x] Pressing the '✓' next to an item should check it off (i.e. strikethrough text and partially grey out text/buttons)
- [x] Pressing the '✓' next to a checked-off item should uncheck it again
- [x] When hitting the API endpoint, be sure to debounce your input.

## Technologies
For my solution, I've chosen to use [Vite](https://vitejs.dev/guide/) with [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/docs/). Vite is incredibly fast and easy to spin up, and can be easily deployed to [Vercel](https://vercel.com/) for a simple hosting solution.

## TODOs
I tried to limit myself to the 90 minute time constraint. If I had more time, I would have liked to...
- Add some color and better typographical hierarchy to the UI
- Add some CSS transitions to the hover effects / check + uncheck status
- Improve the UX of the dropdown, such as closing it on ESC keypress or clickaway