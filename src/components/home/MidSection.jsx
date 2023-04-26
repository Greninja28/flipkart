import { Grid, styled } from '@mui/material'
import React from 'react'
import { imageURL } from '../../constants/data'

const Wrapper = styled(Grid)`
  margin-top: 10px;
  justify-content: space-between;
`

const MidSection = () => {
  return (
    <Wrapper lg={12} sm={12} md={12} xs={12} container>
      {
        imageURL.map(image => (
          <Grid lg={4} sm={12} md={4} xs={12} item>
            <img src={image} alt="Banner" style={{ width: '100%' }} />
          </Grid>
        ))
      }
    </Wrapper>
  )
}

export default MidSection