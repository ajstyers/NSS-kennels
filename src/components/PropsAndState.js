import React, { useState } from "react"

/*
Goal: Display how many times a button has been clicked.

Within the PropsAndState component, we will define state and a function
to update state with the useState hook. We will also create a function to handleClick.
*/

export const PropsAndState = ({ yourName }) => {
  let [countClicks, setCountClicks] = useState(0)

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
    </>
  )
}

/*
Definition: useState() is what the React team calls a hook.
It is used to store data about the component.
You can translate its usage into English with the following statement:

"My component has its own state to maintain. Therefore, I will use the State hook to store it."
*/