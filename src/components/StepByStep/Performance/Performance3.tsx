import React from "react";
import StepByStepWrap from "../StepByStepWrap";
import img3 from "../../../img/ProgressBar/Performance3.png";
import WritingPageBtnWrap from "../../WritingPageBtn";

//Step by Step Performance 회고 페이지 3
interface Performance3Props {
  content: string[];
  handleComplete: () => void;
  inputContent: string;
  setInputContent: (inputContent: string) => void;
  isContentFilled: boolean; // isContentFilled 속성 추가
  setContent: (content: string[]) => void; // setContent 속성 추가
}

export default function Performance3({
  content,
  handleComplete,
  inputContent,
  setInputContent,
  isContentFilled, // isContentFilled 속성 추가
  setContent, // setContent 속성 추가
}: Performance3Props) {
  const handleNext = () => {
    if (inputContent.trim().length > 0) {
      const updatedContent = [...content, inputContent];
      setContent(updatedContent);
      setInputContent("");
      handleComplete();
    }
  };

  return (
    <>
      <StepByStepWrap>
        <div className="progressBar_container">
          <img src={img3} alt="progressBar" />
        </div>
        <div className="mainContent_container">
          <div className="main_text_container">
            <p>
              목표를 달성하는 과정에서의{" "}
              <span style={{ fontWeight: 700 }}>기여 요인</span>은 무엇인지
              작성해주세요.
            </p>
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
            onClick={handleNext}
          >
            다음
          </button>
        </WritingPageBtnWrap>
      </StepByStepWrap>
    </>
  );
}
