import React from 'react';
import styled from 'styled-components';

const UploadingStyled = styled.div`
  width: 400.36px;
  height: 143.57px;
  background: #e8e8ee;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  .title-uploading {
    width: 100px;
    height: 27px;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.035em;
    color: #4f4f4f;
    text-align: left;
    margin-left: 2rem;
  }

  .progress-bar {
    -webkit-appearance: none;
    appearance: none;
    width: 340.71px;
    height: 8px;
    background-color: #f2f2f2;
    border-radius: 8px;
    margin-left: 2rem;
  }
  .progress-bar[value]::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }
  .progress-bar[value]::-webkit-progress-value {
    width: 100.93px;
    height: 8px;
    background: #2f80ed;
    border-radius: 8px;
  }
`;
const Uploading = ({value}) => {
  return (
    <UploadingStyled>
      <h1 className="title-uploading">Uploading...</h1>
      <progress className="progress-bar" max="100" value={value} />
    </UploadingStyled>
  );
};

export default Uploading;
