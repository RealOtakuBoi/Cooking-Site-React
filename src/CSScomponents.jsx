import styled from "styled-components";





const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    transform: scale(0.8);
    border-radius: 2rem;
    position: absolute;
    object-fit: cover;
    z-index: 9;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    color: white;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  height: 100%
  width: 100%
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));`;
