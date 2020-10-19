import React from 'react';
import styled from 'styled-components';
import image from '../assets/image.svg';


const DragdropStyled = styled.div`
  width: 338px;
  height: 218.9px;
  background:  #e8e8ee;
  border: 2px dashed #97bef4;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .dragdrop__image {
    width: 114.13px;
    height: 88.24px;
  }
  .dragdrop__text {
    width: 166.01px;
    height: 17.99px;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.035em;
    color: #bdbdbd;
  }
`;

const Dragdrop = ({updateImage}) => {

  const drop_handler = (ev) => {
    console.log('drop');
    let dt = ev.dataTransfer;
    let file = dt.files;
    ev.preventDefault();
    updateImage(file);
    ev.currentTarget.style.background = 'lightyellow';
    //suelta el ratón
    // ev.target.appendChild(document.getElementById(data));
  };

  const dragover_handler = (ev) => {
    //entra en la zona
    console.log('dragOver');
    ev.preventDefault();
  };
  return (
    <DragdropStyled
      onDrop={(e) => drop_handler(e)}
      onDragOver={(e) => dragover_handler(e)}
    >
      <img src={image} alt="imagen_default" className="dragdrop__image" />
      <p className="dragdrop__text">Drag & Drop your image here</p>
    </DragdropStyled>
  );
};

export default Dragdrop;
