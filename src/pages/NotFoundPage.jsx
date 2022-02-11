import React from 'react'
import styled from 'styled-components'

const NotFoundPage = () => {
  return (
    <Wrapper>
      Error Page
    </Wrapper>
  
  )
}

const Wrapper = styled.div`
    .error-container {
        width:100%;
        height:0;
        padding-bottom:100%;
        position:relative;
    }
`

export default NotFoundPage