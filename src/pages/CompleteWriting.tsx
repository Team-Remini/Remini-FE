import React from "react";
import { Header } from "../components/Header";
import styled from "styled-components";
import CompleteImg from "../img/UI/CompleteRectangleImagepng.png";

// 페이지 처음 렌더링시 GET 요청(회고 조회)
// isMine == true -> 공유|삭제|수정 버튼
// isMine == false -> 기획 논의 필요
function CompleteWriting() {
  return (
    <>
      <CompleteWritingWrap>
        <Header />
        <div className="title_container">
          <div className="title_content">제목제목제목제목제목</div>
        </div>
        <div className="WritingKind_container">
          <div className="WritingKind_title">회고 종류</div>
          <div className="WritingKind_content">
            어떤 회고 있가요?어떤 회고 있가요?어떤 회고 있가요?어떤 회고 있가요?
          </div>
        </div>
        <div className="Image_container">
          <img src={CompleteImg} alt="CompleteImg" className="CompleteImg" />
        </div>
        <div className="completeButtom-contaner">
          <button className="shareBtn">공유</button>
          <button className="deleteBtn">삭제</button>
          <button className="editBtn">수정</button>
        </div>
      </CompleteWritingWrap>
    </>
  );
}

export default CompleteWriting;

const CompleteWritingWrap = styled.div`
  background: var(--Background, #121212);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .title_container {
    width: 100%;
    height: 90px;
    flex-shrink: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
  }
  .title_content {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .WritingKind_container {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .WritingKind_title {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .WritingKind_content {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .Image_container {
    width: 280px;
    height: 200px;
    flex-shrink: 0;
    border-radius: 16px;
    background: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0) 68.25%,
      rgba(18, 18, 18, 0.35) 100%
    );
  }
  .completeButtom-contaner {
    width: 1280px;
    height: 1338px;
    flex-direction: row;
  }
  .shareBtn {
    display: inline-flex;
    padding: 13px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .deleteBtn {
    display: inline-flex;
    padding: 13px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: rgba(207, 102, 121, 0.5);
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 30dp;
  }
  .editBtn {
    display: inline-flex;
    padding: 13px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: var(--primary-900, #233e2c);
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 30dp;
  }
`;
