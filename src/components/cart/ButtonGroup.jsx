import { ButtonGroup, Button, styled } from '@mui/material'
import React, { useState } from 'react'

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`

const StyledButton = styled(Button)`
   border-radius: 50%;
   color: black;
   border: 1px solid black
`

const GroupedButton = () => {
  const [quantity, setQuantity] = useState(1)
  const increase = () => {
    setQuantity(quantity + 1)
  }

  const decrease = () => {
    setQuantity(quantity - 1)
  }

  return (
    <Component>
      {
        quantity > 0 &&
        <StyledButton onClick={() => decrease()}>-</StyledButton>
      }
      <Button style={{ color: 'black', border: '1px solid black' }}>{quantity}</Button>
      <StyledButton onClick={() => increase()}>+</StyledButton>
    </Component>
  )
}

export default GroupedButton