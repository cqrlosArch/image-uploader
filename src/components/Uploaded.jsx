import React, { useRef } from 'react';
import styled from 'styled-components';
import icon from '../assets/icon.png';

const UploadedStyled = styled.div`
  width: 400.36px;
  min-height: 454.96px;
  background: #e8e8ee;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem 0;
  .uploaded-icon {
    display: block;
    width: 10%;
  }
  .uploaded-title {
    width: 198px;
    height: 27px;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.035em;
    color: #4f4f4f;
  }
  .form-copy {
    position: relative;
    width: 338px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  .uploaded-image {
    display:block;
    width: 338px;
    object-fit: contain;
    object-position: center;
    border-radius: 12px;
    margin-bottom: 1rem;

  }

  .copy-input {
    width: 338px;
    height: 34px;
    background: #f6f8fb;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 8px;
    position: absolute;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    letter-spacing: -0.035em;
    color: #4f4f4f;
    padding: 0.5rem;
    outline:none;
  }
  .copy-button {
    position: absolute;
    right: 0;
    border: none;
    outline: none;
    width: 74px;
    height: 30px;
    background: #2f80ed;
    border-radius: 10px;
    position: absolute;
    font-size: 8px;
    line-height: 12px;
    text-align: center;
    letter-spacing: -0.035em;
    color: #ffffff;
    cursor: pointer;
  }
`;

const Uploaded = ({ value }) => {
  const refInput = useRef('');
  const handleCopyLink = () => {
    refInput.current.select();
    document.execCommand("copy");
  };
  return (
    <UploadedStyled>
      <img src={icon} alt="check-icon" className="uploaded-icon" />
      <h2 className="uploaded-title">Uploaded Successfully!</h2>
      <img src={value} alt="" className="uploaded-image" />
      <form action="" className="form-copy">
        <input
          type="text"
          className="copy-input"
          defaultValue={value}
          name="link"
          ref={refInput}
        />
        <button className="copy-button" type="button" onClick={handleCopyLink}>
          Copy Link
        </button>
      </form>
    </UploadedStyled>
  );
};

export default Uploaded;
