import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import lottie from "lottie-web";
import Arrow from "../../img/anim/arrow.json";

export const Main: React.FC = () => {
  const navigate = useNavigate();
  const arrowAnimationRef = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (arrowAnimationRef.current) {
      lottie.loadAnimation({
        container: arrowAnimationRef.current,
        animationData: Arrow,
        renderer: "svg",
        loop: true,
        autoplay: true,
      });
    }
    // 페이지 로드 후 0.4초 뒤에 나타나도록 설정
    setTimeout(() => {
      setFadeIn(true);
    }, 400);
  }, []);

  const goToRecommend = () => {
    navigate("/recommend");
  };

  return (
    <MainWrap>
      <p className={`title ${fadeIn ? "fade-in" : ""}`}>
        <span>Remini</span> : 맞춤 회고 유형 추천 및 가이드
      </p>
      <div className={`font ${fadeIn ? "fade-in" : ""}`}>
        <p>상황에 맞는 맞춤 회고 유형을 추천하고 가이드라인을 제공함으로써</p>
        <p>
          더 나은 자신, 더 나은 팀이 되어 함께 성장해 나갈 수 있도록 합니다.
        </p>
      </div>
      <button
        className={`font ${fadeIn ? "fade-in" : ""}`}
        onClick={goToRecommend}
      >
        맞춤 회고 유형 알아보기
      </button>
      <div
        className={`arrow-container ${fadeIn ? "fade-in" : ""}`}
        ref={arrowAnimationRef}
      ></div>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  height: 742px;
  //background 피그마 디자인 코드 안 맞음
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 39.37%,
    rgb(121, 200, 150)
  );
  padding-top: 208px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 52px;

  p {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    margin: 0;
  }
  .title {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .title span {
    color: var(--primary-400, #79cd96);
  }
  .font {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  button {
    width: 289px;
    height: 53px;
    color: black;
    border: none;
    border-radius: 8px;
    background: var(--primary-400, #79cd96);
  }

  .arrow-container {
    margin-block-end: 30dp;
    width: 200px;
    height: 150px;
  }

  .title,
  .font,
  .arrow-container {
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .fade-in {
    opacity: 1;
  }
`;
