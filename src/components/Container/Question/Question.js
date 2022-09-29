import React from 'react';

const Question = () => {
    return (
        <div className='p-3 md:px-16 mt-11'>
            <h1 className="text-2xl my-4">React Interviwe Question</h1>
      
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
  <div className="collapse-title text-xl font-medium">
  How does the React app work?
  </div>
  <div className="collapse-content"> 
    <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
  <div className="collapse-title text-xl font-medium">
  2. what is the Main difference between props and state ?
  </div>
  <div className="collapse-content"> 
    <p>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.
Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
  <div className="collapse-title text-xl font-medium">
  3. what is exactly useeffect work except api call ?
  </div>
  <div className="collapse-content"> 
    <p>What does useEffect do?
By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API
useEffect work
1.The useEffect Hook allows you to perform side effects in your components.
2.Some examples of side effects are :fetching data, directly updating the DOM, and timers.</p>
  </div>
</div>
            
        </div>
    );
};

export default Question;