import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
const Spinner=(props)=> {
    return (
      <div className='sweet-loading m-auto'>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={60}
          color={'#123abc'}
          loading={props.loading}
        />
      </div> 
    )

}

export default Spinner;