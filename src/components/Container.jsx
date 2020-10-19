import React, { useState } from 'react';
import styled from 'styled-components';
import Dragdrop from './Dragdrop';
import Uploaded from './Uploaded';
import Uploading from './Uploading';

import firebase from 'firebase/app';
import 'firebase/storage';

const ContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #e8e8ee;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 402px;
  height: 469px;

  .container__title {
    width: 165px;
    height: 26.99px;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.035em;
    color: #4f4f4f;
  }
  .container__subtitle {
    width: 121px;
    height: 14.99px;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.035em;
    color: #828282;
  }
  .container__text {
    width: 14px;
    height: 17.99px;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.035em;
    color: #bdbdbd;
  }
  .input-file {
    display: none;
  }
  .input-label {
    width: 101px;
    height: 31.98px;
    border-radius: 8px;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    background-color: #2f80ed;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const Container = () => {
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [link, setLink] = useState('');
  


  const updateImage = (image) => {
    setLoading(true);
    const storageRef = firebase.storage().ref();
    const file = image[0];

    let uploadTask = storageRef.child('images/' + file.name).put(file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        console.log('Upload is ' + progress + '% done');
        // eslint-disable-next-line default-case
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      },
      function (error) {
        console.log(error);
      },
      function () {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL);
          setLink(downloadURL)
          setLoading(false)
          setUploaded(true)
        });
      }
    );
  };

  const handleInput=(e)=>{
    e.preventDefault()
    const file=e.target.files
    updateImage(file);
  }

  return (
    <>
      {uploaded && <Uploaded value={link}/>}
      {loading && <Uploading value={progress} />}
      {!loading && !uploaded && (
        <ContainerStyled>
          <h1 className="container__title">Upload your image</h1>
          <p className="container__subtitle">File should be Jpeg, Png,...</p>
          <Dragdrop updateImage={updateImage} />
          <p className="container__text">Or</p>
          <label htmlFor="file-upload" className="input-label">
            Choose a file
          </label>
          <input
          onChange={(e)=>handleInput(e)}
            id="file-upload"
            type="file"
            className="input-file"
            accept="image/*"
            defaultValue=''
          />
        </ContainerStyled>
      )}
    </>
  );
};

export default Container;
