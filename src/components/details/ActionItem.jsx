import { FlashOn, ShoppingCart } from '@mui/icons-material'
import { Box, Button, styled } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions/cartActions'

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down('lg')]: {
    padding: '20px 40px'
  }
}))


const Image = styled("img")({
  padding: '15px 20px',
  width: '90%',
  border: '1px solid #f0f0f0',
})

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: "50px",
  borderRadius: "2px",
  [theme.breakpoints.down('lg')]: {
    width: '46%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '48%'
  }
}))


const ActionItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = product

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity))
    navigate('/cart')
  }

  const buyNow = async () => {
    navigate('/')
  }

  return (
    <LeftContainer>
      <Box style={{
        padding: '15px 20px',
      }}>
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <StyledButton variant='contained' style={{ marginRight: 10, background: '#ff9f00' }} onClick={() => addItemToCart()}>
        <ShoppingCart /> Add to Cart
      </StyledButton>
      <StyledButton variant='contained' style={{ background: "#fb641b" }} onClick={() => buyNow()}>
        <FlashOn /> Buy Now
      </StyledButton>
    </LeftContainer>
  )
}

export default ActionItem