import styled from "styled-components";

export const SingleTrend = styled.div`
  position: relative;
  animation: move 35s forwards infinite;
  animation-delay: 5s;
  @keyframes move {
    0% {
      transform: translateX(0);
    }
    14% {
      transform: translateX(-150%);
    }
    28% {
      transform: translateX(-150%);
    }
    56% {
      transform: translateX(-270%);
    }
    71% {
      transform: translateX(-270%);
    }
    85% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0);
    }
  }

  img {
    width: 240px;
    height: 140px;
    border-radius: 8px;
  }
  h3 {
    font-size: 14px;
    font-family: Outfit;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: white;
    position: absolute;
    left: 15px;
    bottom: 15px;
  }
  @media screen and (min-width: 755px) {
    img {
      width: 470px;
      height: 230px;
    }
    h3 {
      font-size: 24px;
    }
  }
`;
export const OverlayTrend = styled.div`
  width: 240px;
  height: 140px;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  &:hover {
    opacity: 1;
  }
  @media screen and (min-width: 755px) {
    width: 470px;
    height: 230px;
  }
`;
export const DescriptionTrend = styled.div`
  display: flex;
  gap: 8px;
  font-size: 11px;
  font-family: Outfit;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  opacity: 0.75;
  color: white;
  align-items: center;
  height: 30px;
  position: absolute;
  bottom: 33px;
  left: 15px;
  @media screen and (min-width: 755px) {
    font-size: 15px;
    bottom: 40px;
  }
`;
export const Icon = styled.div`
  opacity: 0.75;
  display: grid;
  place-content: center;
`;
export const DotTrend = styled.div`
  width: 3px;
  height: 3px;
  background-color: white;
  opacity: 0.75;
  border-radius: 50%;
`;

export const PlayButtonTrend = styled.div`
  width: 117px;
  height: 48px;
  border-radius: 29px;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  padding-left: 9px;

  margin-top: 5px;
`;
export const PlayArrowTrend = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  p {
    font-size: 18px;
    font-family: Outfit;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: white;
    margin-left: 19px;
  }
`;
export const BookmarkTrend = styled.div`
  width: 32px;
  background-color: rgba(0, 0, 0, 0.5);
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  position: absolute;
  right: 8px;
  top: 7px;
  z-index: 3;
  svg {
    cursor: pointer;
  }
`;
