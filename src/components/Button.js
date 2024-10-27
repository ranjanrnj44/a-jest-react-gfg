import React from 'react'

const Button = ({toggle, setToggle}) => {
  return (
    <>
    <button data-testid="show-hide-button" onClick={setToggle}>show/hide</button>
    { toggle && <h2>Ranjan is writing UT using JEST!!!</h2>}
    </>
  )
}

export default Button