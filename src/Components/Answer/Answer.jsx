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

            <h1> 1. Props vs State ? </h1>
            <p><b>ANS : </b> </p>

        </div>
    );
};

export default Answer;