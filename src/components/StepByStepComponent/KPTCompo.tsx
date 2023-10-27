import React from "react";
import styled from "styled-components";
import { Header } from "../Header";

//Step by Step KPT 회고 페이지 컴포넌트
export default function KPTCompo() {
  return (
    <>
      <KPTCompoWrap>
        <Header />
        <div className="KPT_title_container">
          <div className="KPT_title_main">KPT</div>
          <div className="KPT_title_content">
            회고 3가지 관점에서 업무를 돌아보고, 다음 액션 아이템을 도출해내는
            데 도움이 되는 회고예요
          </div>
        </div>
      </KPTCompoWrap>
    </>
  );
}

const KPTCompoWrap = styled.div`
  background-color: #121212;
  padding: 0px 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .KPT_title_container {
    display: inline-flex;
    align-items: center;
    gap: 30px;
    margin: 80px 48px 40px 110px;
  }
  .KPT_title_main {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .KPT_title_content {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
