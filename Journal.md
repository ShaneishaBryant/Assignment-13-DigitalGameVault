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
