# Check screen size

For this prep exercise we are actually going to use an online exercise. Have a look at the [following prompt](https://epic-react-exercises.vercel.app/react/advanced-hooks/4). To summarize:

> Create a hook to determine the window user's window screen size and update the view based on it. Use the [useDebugValue hook](https://reactjs.org/docs/hooks-reference.html#usedebugvalue) so that when a component uses the hook three different times, you'll be able to differentiate them on the The React DevTools browser extension.

In the link you will see some more details about the steps to take. There is also their solution, but try to only look at that if you are really stuck. Preferably ask some cohort mates first as that will teach you more than just copying over their solution.

The solution given is also not necessarily the only solution, compare it to yours and see if you can get some good ideas from theirs. Because they want to show just one file, you will notice they put a lot of different functionality in one component. It is generally better to do it in separate components so good job if you thought of that!

## Things to think about

- Why do you think their solution has two different hooks?

They serve different purposes.

- What is the difference between using a custom hook to handle state, to using a context API with some logic? When would you use which one?

Hooks are special functions to trace and modify state of a component. Context API is the way to pass the state from the parent component to the child. Those things serve different purposes and cannot be used one instead of another.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
