import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import WritingPageBtnWrap from "../components/WritingPageBtn";

//회고 작성완료 후 사진 첨부 페이지

export default function AttachPicture() {
  const navigate = useNavigate();

  const [pictureContent, setPictureContent] = useState("");

  const goToCompleteWriting = () => {
    navigate("/completeWriting");
  };
  return (
    <>
      <Header />
      <AttachPictureWrap>
        <div className="titleText">
          <p>첨부하고 싶은 사진을 선택해주세요</p>
        </div>
        <div className="picture_container">
          <p className="picture_input_text">파일을 여기로 드래그 해주세요</p>
        </div>
        <WritingPageBtnWrap>
          <button className="temporary_btn">첨부 안 함</button>
          <button
            className="completed_btn"
            style={{
              backgroundColor: pictureContent ? "#79CD96" : " #305D40",
            }}
            disabled={!setPictureContent}
            onClick={() => {
              goToCompleteWriting();
            }}
          >
            회고 완료
          </button>
        </WritingPageBtnWrap>
      </AttachPictureWrap>
    </>
  );
}

const AttachPictureWrap = styled.div`
  background-color: #121212;
  padding: 0px 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  .titleText {
    margin-top: 90px;
    margin-bottom: 60px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .picture_container {
    width: 437px;
    height: 280px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 2px dashed var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
  }

  .picture_input_text {
    margin-top: 129px;
    margin-bottom: 130px;
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;