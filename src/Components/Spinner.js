import React from 'react';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: #1c2260;
`;
 
const Spinner=(props)=> {
  const {size}=props;
    return (
      <div className='sweet-loading m-auto'>
      <br/>
      <br/>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={size}
          color={'#123abc'}
          loading={props.loading}
        />
      </div> 
    )

}

export default Spinner;