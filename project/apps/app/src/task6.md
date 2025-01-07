# Code Challenge: Task6 Questions - 

## Question no 7:
explain the use of useEffect hook in React 
## Answer no 7: 
The useEffect hook in React is a powerful tool for handling side effects in functional components. It allows you to perform actions after rendering, such as making API calls, setting timers, or updating the DOM.
Side effects are any actions that can change the state of your application outside of the component's render cycle. Examples include:
1. Making API calls
2. Setting timers
3. Updating the DOM
4. Logging events
5. Subscribing to events

```
    import { useEffect } from 'react';

    function MyComponent() {
    useEffect(() => {
        // side effect code here
    }, []);
    }
```

## Question no 8:
What is A High Order Component? 
## Answer no 8:
Higher order components are advanced techniques for reusing component logic. it can be a function that takes a 
component as input and returns a new component, helps in managing cross-cutting concerns like authentication and permissions.

## Question no 9:
What use cases would a HOC be usefull? 
## Answer no 9:
1. Code reuse and logic abstraction.
2. Managing cross-cutting concerns.
3. Handling statefull behaviour and passing props dynamically.

## Question no 10:
What does it indicate when a component is prefixed with use and with 
## Answer no 10:
The use prefix is associated with React Hooks, Hooks are basically the functions that allow you to use react features. we can have pre-defined hooks and can create custom hooks.

## Question no 11:
What is a Generic type in typescript? 
## Answer no 11:
The term Generic type refers to a feature that allows you to create components, functions or classes that can
work with any data type. the specifics of generic type in a Transcipt depends on the context in which the Transcipt is being used.

## Question no 12:
Whats the difference between a controlled and uncontrolled input in React?
## Answer no 12:
Controlled input is a form element whose value is controlled by react state and uncontrolled input is a form
element whose value is managed by the DOM itself, not but the react state.


