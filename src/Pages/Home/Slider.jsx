import React from 'react';
import styled from 'styled-components';

const SplitView = styled.div`
 
  body {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font-family: Arial, Helvetica, sans-serif;
  }

 
  .splitview {
    position: relative;
    width: 100%;
    min-height: 45vw;
    overflow: hidden;
  }

  .panel {
    position: absolute;
    width: 100vw;
    min-height: 45vw;
    overflow: hidden;
  }

  .panel .content {
    position: absolute;
    width: 100vw;
    min-height: 45vw;
    color: #FFF;
  }

  .panel .description {
    width: 25%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
  }

  .panel img {
    box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.15);
    width: 35%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .bottom {
    background-color: rgb(44, 44, 44);
    z-index: 1;
  }

  .bottom .description {
    right: 5%;
  }

  .top {
    background-color: rgb(77, 69, 173);
    z-index: 2;
    width: 50vw;
  }

  .top .description {
    left: 5%;
  }

  
  .handle {
    height: 100%;
    position: absolute;
    display: block;
    background-color: rgb(253, 171, 0);
    width: 5px;
    top: 0;
    left: 50%;
    z-index: 3;
  }

  
  .skewed .handle {
    top: 50%;
    transform: rotate(30deg) translateY(-50%);
    height: 200%;
    -webkit-transform-origin: top;
    -moz-transform-origin: top;
    transform-origin: top;
  }

  .skewed .top {
    transform: skew(-30deg);
    margin-left: -1000px;
    width: calc(50vw + 1000px);
  }

  .skewed .top .content {
    transform: skew(30deg);
    margin-left: 1000px;
  }
`;

const Slider = () => {
  return (
    <SplitView className="splitview skewed">
      <div className="panel bottom">
        <div className="content">
          <div className="description">
            <h1>The original image.</h1>
            <p>This is how the image looks like before applying a duotone effect.</p>
          </div>
          <img src="https://i.ibb.co/tYhrtxy/wp9378570-valorant-pc-hd-wallpapers.png" alt="Original" />
        </div>
      </div>
      <div className="panel top">
        <div className="content">
          <div className="description">
            <h1>The duotone image.</h1>
            <p>This is how the image looks like after applying a duotone effect.</p>
          </div>
          <img src="https://i.ibb.co/92Tf7DC/wp7821721-valorant-pc-hd-wallpapers.png" alt="Duotone" />
        </div>
      </div>
      <div className="handle"></div>
    </SplitView>
  );
};

export default Slider;
