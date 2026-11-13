Phase 0 Response

To build this application, I will first populate a structured array of the game objects. Next, I will write helper functions to handle core data management (adding, updating, and modifying records) and implement dynamic filtering and sorting logic. I will also apply a responsive CSS grid layout and custom styling to transform the raw data into a polished, card-based web page.

What is the most confusing part of the challenge as it’s described right now? What part of your plan are you most unsure about?

From the desciption the part that presents a challenge is the React components, props, and JSX. I haven't had as much practice with these concepts to be confident in applying them.

Phase 1 Response

Explain why using .filter() and .map() is an example of “Abstraction.” How does this make your code easier to read compared to a standard for loop?

.filter() and .map() are prime examples of abstraction because they encapsulate complex looping mechanics behind clean, descriptive method names. By eliminating repetitive boilerplate code, they promote a clean, functional programming style while preventing common manual errors, such as off-by-one bugs, that frequently occur with standard for loops.

Phase 2 Response

Describe your experience with the terminal. What was one thing that surprised you about using npm or the Vite installation process? Why is the .gitignore file important when working with npm?

Because I already have experience working in the command line, navigating the terminal setup felt natural. I did take some time to research static code analyzers, weighing ESLint against Oxlint, before making a choice, which led to a smooth installation. .gitignore file is essential since npm downloads thousands of package files into node_modules, .gitignore prevents those heavy dependencies from overloading the Git repository.


Phase 3 Response

What is the main difference between writing standard HTML and writing JSX? How do props allow the GameItem component to be reusable?

The difference is HTML is native markup language read directly by the web browser, while JSX is a syntax extension that gets compiled into standard Java before the browser processes it. Props make components reusable, meaning you only have to write a single GameItem component blueprint that dynamically handles any number of unique game objects.


Phase 4 Response

What challenges did you face when connecting your JavaScript logic to your React components? How did you debug the data flow from the raw array to the final screen?

After accidentally overwriting some source files, my application suffered a persistent blank white screen and connection errors. I debugged the issue by checking the console for red error messages, which helped me isolate two problems: GameItem.jsx was missing its default export, and logic.js was placed outside the src directory, blocking module resolution. 



Phase 5 Response 

What bugs or unexpected behaviors did you catch while testing your program? If you asked an AI tutor for feedback, what did it suggest, and did you choose to make any changes? Explain your reasoning.


The program responded as expected by updating objects in the array. The AI confirmed that my use of props and .map() followed best practices by cleanly separating business logic, data, and UI components. It also recommended introducing useState in App.jsx for interactive state management and utilizing localStorage for data persistence across page refreshes. I implemented the useState recommendation to gain hands-on practice writing JSX and handling dynamic state changes.