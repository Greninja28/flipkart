import { LocalOffer } from '@mui/icons-material'
import { Box, Table, TableBody, TableCell, TableRow, Typography, styled } from '@mui/material'
import React from 'react'

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p{
    font-size: 14px;
    margin-top: 10px;
  }
`

const StyleBadge = styled(LocalOffer)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 13px;
`

const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td{
    font-size: 14px;
    margin-top: 10px;
    border: none;
  }
`

const ProductDetail = ({ product }) => {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))

  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: '5px', color: '#878787', fontSize: 14 }}>
        8 ratings & 1 review
        <Box component='span'>
          <img src={fassured} alt="" style={{ width: 77, marginLEft: 20 }} />
        </Box>
      </Typography>
      <Typography>
        <Box component='span' style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>&nbsp;&nbsp;&nbsp;
        <Box component='span' style={{ color: '#878787' }}>
          <strike>
            ₹{product.price.mrp}
          </strike>
        </Box>&nbsp;&nbsp;&nbsp;
        <Box component='span' style={{ color: '#388e3c' }}>
          {product.price.discount}
        </Box>
      </Typography>

      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography><StyleBadge />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
        <Typography><StyleBadge />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
        <Typography><StyleBadge />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
        <Typography><StyleBadge />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
      </SmallText>

      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>Delivery By: {date.toDateString()} | ₹40</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
            <TableCell style={{ fontWeight: 600 }}>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Seller</TableCell>
            <TableCell >
              <Box component='span' style={{ color: '#2874f0' }}>
                SuperComNet
              </Box>
              <Typography>GST Invoice Available</Typography>
              <Typography>View more sellers starting from {product.price.cost}</Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colSpan={2}>
              <img src={adURL} alt="flipkart Points" style={{ width: 390 }} />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Description</TableCell>
            <TableCell >{product.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  )
}

export default ProductDetail