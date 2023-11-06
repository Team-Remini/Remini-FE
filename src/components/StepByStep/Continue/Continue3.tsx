import React from "react";
import StepByStepWrap from "../StepByStepWrap";
import img3 from "../../../img/ProgressBar/Continue3.png";
import WritingPageBtnWrap from "../../WritingPageBtn";
import { useNavigate } from "react-router-dom";

//Continue 회고 페이지 3
interface Continue3Props {
  content: string[];
  handleComplete: () => void;
  inputContent: string;
  setInputContent: (inputContent: string) => void;
  isContentFilled: boolean; // isContentFilled 속성 추가
  setContent: (content: string[]) => void; // setContent 속성 추가
}

export default function Continue3({
  content,
  inputContent,
  setInputContent,
  isContentFilled, // isContentFilled 속성 추가
}: Continue3Props) {
  const navigate = useNavigate();

  const goToCompleteWriting = () => {
    navigate("/attachPicture");
  };

  const handleNext = () => {
    if (inputContent.trim().length > 0) {
      const updatedContent = [...content, inputContent]; // content 배열에 inputContent 추가
      localStorage.setItem(
        "StepByStep_Continue",
        JSON.stringify(updatedContent)
      ); // 작성 완료 시 content 배열을 localStorage에 저장
    }
  };

  return (
    <>
      <StepByStepWrap>
        <div className="progressBar_container">
          <img src={img3} alt="progressBar" />
        </div>
        <div className="mainContent_container">
          <div className="mainContent_Btn">Start</div>
          <div className="main_text_container">
            <p>우리가 무엇을 시작하여야 할 지에 대해 작성해주세요.</p>
          </div>
          <div>
            <textarea
              className="mainContent_Input"
              placeholder="텍스트를 입력해주세요"
              value={inputContent}
              onChange={(e) => setInputContent(e.target.value)}
              style={{ resize: "none" }} // 사이즈 조절 방지
            ></textarea>
            <p className="text_num">{inputContent.length}/200</p>
          </div>
        </div>
        <WritingPageBtnWrap>
          <button className="temporary_btn" disabled={!isContentFilled}>
            임시 저장
          </button>
          <button
            className="completed_btn"
            style={{
              backgroundColor: isContentFilled ? "#79CD96" : " #305D40",
            }}
            disabled={!isContentFilled}
            onClick={() => {
              handleNext();
              goToCompleteWriting();
            }}
          >
            작성 완료
          </button>
        </WritingPageBtnWrap>
      </StepByStepWrap>
    </>
  );
}
