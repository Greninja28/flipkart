import { Box, Button, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import TotalView from './TotalView'
import EmptyCart from './EmptyCart'
import { useNavigate } from 'react-router-dom'

const Container = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  [theme.breakpoints.down('md')]: {
    padding: '15px 0'
  }
}))

const Header = styled(Box)`
  padding: 15px 24px;
  background: white;
`

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: '15px',
  [theme.breakpoints.down('md')]: {
    marginBottom: 0
  }
}))

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: white;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb631b;
  color: white;
  width: 250px;
  height: 50px;
  border-radius: 2px;
`

const Cart = () => {
  const cartDetails = useSelector(state => state.cart);
  const { cartItems } = cartDetails;
  const navigate = useNavigate()

  return (
    <>
      {
        cartItems.length ?
          <Container container>
            <LeftComponent item lg={9} md={9} sm={12} xs={12}>
              <Header >
                <Typography>My Cart ({cartItems?.length})</Typography>
              </Header >
              {
                cartItems.map(item => (
                  <CartItem item={item} />
                ))
              }
              <ButtonWrapper>
                <StyledButton onClick={() => navigate('/')}>Place Order</StyledButton>
              </ButtonWrapper>
            </LeftComponent>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <TotalView cartItems={cartItems} />
            </Grid>
          </Container>
          : <EmptyCart />
      }
    </>
  )
}

export default Cart