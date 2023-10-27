import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import KPTStepOne from "../../../img/ProgressBar/KPTStepOne.png";
import KPTCompo from "../../../components/StepByStepComponent/KPTCompo";
import { EmptyFooter } from "../../../components/emptyFooter";

//Step by Step KPT 회고 페이지 1
export default function KPT1() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const isContentFilled = content.trim().length > 0;

  return (
    <>
      <KPTCompo />
      <KPT1Wrap>
        <div className="progressBar_container">
          <img className="KPTStepOne" src={KPTStepOne} alt="progressBar" />
        </div>
        <div className="mainConten_container">
          <div className="mainContent_Btn">Keep</div>
          <div className="main_text_container">
            <p>좋은 결과를 만들었고,</p>
            <p>계속해서 유지해 나가야할 것을 작성해주세요.</p>
          </div>
          <textarea
            className="mainContent_Input"
            placeholder="텍스트를 입력해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="KPT_btn_container">
          <button
            className="temporary_btn"
            onClick={() => {
              if (isContentFilled) {
                navigate("/");
              } else {
                // 텍스트 내용이 비어있으면 아무 동작도 하지 않음
              }
            }}
            disabled={!isContentFilled}
          >
            임시저장
          </button>
          <button
            className="completed_btn"
            onClick={() => {
              if (isContentFilled) {
                //다음 페이지로 이동
                navigate("/nextpage");
              } else {
                // 텍스트 내용이 비어있으면 아무 동작도 하지 않음
              }
            }}
            style={{
              backgroundColor: isContentFilled ? "#79CD96" : " #305D40",
            }}
            disabled={!isContentFilled}
          >
            작성완료
          </button>
        </div>
      </KPT1Wrap>
      <EmptyFooter />
    </>
  );
}

const KPT1Wrap = styled.div`
  background-color: #121212;
  padding: 0px 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .progressBar_container {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
  }

  .KPTStepOne {
  }

  .mainConten_container {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 53px;
  }

  .mainContent_Btn {
    display: flex;
    width: 320px;
    padding: 16px 60px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .main_text_container {
    margin-top: 24px;
    margin-bottom: 24px;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .mainContent_Input {
    display: flex;
    width: 320px;
    height: 320px;
    padding: 24px;
    align-items: flex-start;
    gap: 30px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid #fff;
    background: var(--Background, #121212);
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .KPT_btn_container {
    text-align: center;
    margin-top: 92px;
    margin-bottom: 60px;
  }

  .temporary_btn {
    display: inline-flex;
    padding: 16px 60px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.77);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: var(--Background, #121212);
  }
  .completed_btn {
    margin-top: 30px;
    display: inline-flex;
    padding: 16px 60px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: var(--primary-800, #305d40);
    color: #000;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
