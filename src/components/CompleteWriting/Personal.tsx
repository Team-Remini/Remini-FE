import React, { useState } from "react";
import { Header } from "../../components/Header";
import styled from "styled-components";
import CompleteImg from "../../img/UI/basicImage.png";
import BasicProfile from "../../img/UI/basicProfile.png";
import GuideLinePersonalContent from "../../components/GuideLine/PersonalContent";

function CompleteWritingPersonal() {
  const [firstContent, setFirstContent] = useState("");
  const [secondContent, setSecondContent] = useState("");
  const [thirdContent, setThirdContent] = useState("");
  const [fourContent, setFourContent] = useState("");
  const [fifthContent, setFifthContent] = useState("");
  const [sixthContent, setSixthContent] = useState("");
  const [seventhContent, setSeventhContent] = useState("");
  const [eighthContent, setEighthContent] = useState("");
  const [ninthContent, setNinthContent] = useState("");
  const [tenthContent, setTenthContent] = useState("");
  const [eleventhContent, setEleventhContent] = useState("");

  return (
    <>
      <CompleteWritingWrap>
        <Header />
        <div className="title_container">
          <div className="title_content">Title</div>
        </div>
        <div className="content-container">
          <div className="WritingKind_container">
            <div className="WritingKind_title">개인적 회고</div>
            <div className="WritingKind_content">
              다섯 가지 차원(Five Dimensions)을 기반으로 순서대로 진행하는
              회고예요
            </div>
            <div className="userInfo-container">
              <div className="user-info">
                <img src={BasicProfile} />
              </div>
              <div className="user-name">레미니</div>
            </div>
            <div className="date-info">작성일: 2023.09.24</div>
          </div>
          <div className="Image_container">
            <img src={CompleteImg} alt="CompleteImg" className="CompleteImg" />
          </div>
        </div>
        <div className="mainContent-container">
          <GuideLinePersonalContent>
            <div className="AllmainConten_container">
              <div className="Content-Container">
                <div className="maintext_container">
                  올해 가장 자랑스러운 일을 작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={firstContent}
                  onChange={(e) => setFirstContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{firstContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  올해 가장 감사한 일을 작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={secondContent}
                  onChange={(e) => setSecondContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{secondContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  올해 가장 즐겼던 일을 작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={thirdContent}
                  onChange={(e) => setThirdContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{thirdContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  뭘 더 잘할 수 있을지 작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={fourContent}
                  onChange={(e) => setFourContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{fourContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  올해 극복해낸 챌린지는(난관은) 어떤 것인지 작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={fifthContent}
                  onChange={(e) => setFifthContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{fifthContent.length}/200</p>
              </div>
              {/* 6부터 */}
              <div className="Content-Container">
                <div className="maintext_container">
                  올해 얻은 교훈은 어떤 것인지, 어떻게 성장했을지 작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={sixthContent}
                  onChange={(e) => setSixthContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{sixthContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  하겠다고 해놓고 안 한 일은 어떤 것인지 작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={seventhContent}
                  onChange={(e) => setSeventhContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{seventhContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  다시 하고싶은 일은 어떤 것인지 작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={eighthContent}
                  onChange={(e) => setEighthContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{eighthContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  내가 집중했지만 내게 도움이 되지 않았던 일은 어떤 것인지
                  작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={ninthContent}
                  onChange={(e) => setNinthContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{ninthContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  삶에서 더 하고 싶은 일은 어떤 것인지 작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={tenthContent}
                  onChange={(e) => setTenthContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{tenthContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  삶에서 덜 하고 싶은 일은 어떤 것인지 작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={eleventhContent}
                  onChange={(e) => setEleventhContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{eleventhContent.length}/200</p>
              </div>
            </div>
          </GuideLinePersonalContent>
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

export default CompleteWritingPersonal;

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

  .content-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
    max-width: 1280px;
    margin: auto;
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
    line-height: 1.5;
    max-width: 800px;
    text-align: justify;
    margin: auto;
    padding: 20px;
  }

  .Image_container {
    width: 280px;
    height: 200px;
    flex-shrink: 0;
    border-radius: 16px;
    margin-left: 300px;
    background: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0) 68.25%,
      rgba(18, 18, 18, 0.35) 100%
    );
    flex: 0 0 auto;
  }

  .userInfo-container {
    margin-top: 60px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 21px;
  }

  .user-name {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .date-info {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .completeButtom-contaner {
    width: 1280px;
    display: inline-flex;
    justify-content: center;
    flex-direction: row;
  }
  .shareBtn {
    width: 92dp;
    height: 45dp;
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
    margin-left: 30dp;
    border: none;
  }
  .deleteBtn {
    width: 92dp;
    height: 45dp;
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
    border: none;
  }
  .editBtn {
    width: 92dp;
    height: 45dp;
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
    border: none;
  }
`;