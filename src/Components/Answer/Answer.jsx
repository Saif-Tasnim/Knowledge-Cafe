import React from 'react';
import '../Answer/Answer.css';

const Answer = () => {
    return (
        <div>
            <h1> 1. Props vs State ? </h1>
            <p><b>ANS : </b>

                In React, both props and state are fundamental concepts used to manage data within components. However, they have different purposes and usage scenarios: <br />

                <b>Props</b>(short for properties):
                <ul>
                    <li>Props are used to pass data from a parent component to its child component(s).</li>

                    <li>Props are immutable, meaning they cannot be modified within the child component.</li>

                    <li>
                        They are passed as parameters to the child component when it is rendered.</li>

                    <li>Changes in props trigger re-rendering of the child component.</li>

                    <li>Props are typically used for data that is meant to be shared across multiple components or to configure the behavior of a child component.</li>
                </ul>




                <b>State:</b>

                <ul>

                    <li>    State represents the internal data of a component that can change over time.
                        State is mutable, and components can modify their own state using the setState method.</li>

                    <li>  Changes in state trigger re-rendering of the component.</li>

                    <li>
                        State is typically used for managing dynamic data that is specific to a component and may change based on user interactions, API responses, or other events.   </li>

                    <li> State is declared and initialized within the component using the useState hook or as a class property when using class components.

                    </li>
                </ul>
                In summary, props are used for passing data from parent to child components, while state is used to manage and update data within a component itself. Props are read-only and provided by a parent component, while state is mutable and managed internally by the component.

            </p>

            <h1> 2. How does useState work ? </h1>
            <p><b>ANS : </b>  The useState is a built-in hook in React that allows functional components to have and manage state. It provides a way to declare and update state variables within a functional component. Heres how useState works:

                <ol>
                    <li>Importing the hook: <br></br>
                        To use useState, you need to import it from the react module in your component file. </li>

                    <li> Initializing state: <br></br>
                        Inside your functional component, call the useState hook and provide an initial value for the state variable. It returns an array with two elements: the current state value and a function to update the state. </li>

                    <li>Accessing state: <br />
                        You can access the current value of the state variable using the state variable in your components code.</li>

                    <li>Updating state: <br />
                        To update the state, you use the provided state update function (setState). It accepts a new value and triggers a re-render of the component with the updated state.
                    </li>
                </ol>
                Thats the basic usage of the useState hook. By using useState, functional components can now manage their own state, allowing for more flexible and reusable code. Remember to import the hook, initialize state, access it, and update it using the state update function provided by useState.
            </p>

            <h1> 3. Purpose of useEffect other than fetching data ? </h1>
            <p><b>ANS : </b>
                While fetching data is a common use case for the useEffect hook in React, it serves a broader purpose beyond data fetching. Here are a few additional purposes and scenarios where the useEffect hook can be beneficial:

                <ol>
                    <li>
                        Side Effects: <br /> The useEffect hook is useful for handling side effects that occur in your components. Side effects can include tasks like modifying the DOM, subscribing to external events, setting up timers, working with local storage, or integrating with third-party libraries. useEffect allows you to perform these side effects after the component has rendered.

                    </li>

                    <li>

                        Lifecycle Events: <br /> The useEffect hook provides a way to emulate some of the class component lifecycle methods, such as componentDidMount, componentDidUpdate, and componentWillUnmount. By specifying dependencies and cleanup functions, you can control when the effect runs and performs certain actions based on component lifecycle changes.
                    </li>

                    <li>
                        State and Prop Changes: <br /> You can use useEffect to react to changes in state or props within your component. By specifying dependencies in the dependency array, you can ensure that the effect runs whenever the specified dependencies change. This allows you to update the component or trigger certain actions based on the changes in state or props.
                    </li>

                    <li>

                        Event Listeners: <br /> useEffect can be utilized to add and remove event listeners in your components. You can set up event listeners within the effects callback function and clean them up when the component unmounts by returning a cleanup function. This helps avoid memory leaks and ensures proper event handling.

                    </li>
                </ol>
            </p>

            <h1> 4. PHow Does React work ? </h1>
            <p><b>ANS : </b>
            React is a JavaScript library for building user interfaces, specifically focused on creating reusable UI components. It follows a component-based architecture and relies on a virtual DOM (Document Object Model) for efficient rendering and updating of the user interface.

Heres an overview of how React works: <br/>

<ol>
    <li>
    Component Structure: <br/> React applications are built using components, which are modular and reusable pieces of code that encapsulate the UI logic and behavior. Components can be divided into smaller, more manageable components, forming a component tree or hierarchy.
    </li>

    <li>
        
    </li>
</ol>


Virtual DOM: React introduces a virtual representation of the DOM, called the virtual DOM. Its a lightweight copy of the actual DOM maintained by React. The virtual DOM allows React to efficiently update and render only the necessary parts of the user interface, minimizing expensive DOM operations.

JSX Syntax: React uses JSX (JavaScript XML) as a syntax extension, which allows you to write HTML-like code within JavaScript. JSX enables a declarative and intuitive way to describe the structure and appearance of components.

Component Rendering: When a React component is rendered, it generates a virtual DOM representation of its structure and content. This virtual DOM is compared with the previous virtual DOM snapshot to identify the differences (known as the diffing process).

Reconciliation: Reacts reconciliation process analyzes the differences between the previous and current virtual DOM and efficiently updates only the necessary parts in the actual DOM. This minimizes the number of DOM manipulations and enhances performance.
            </p>




        </div>
    );
};

export default Answer;