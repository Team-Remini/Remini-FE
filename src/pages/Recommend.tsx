import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { pageAtom, isCheckedAtoms } from "../store/atom";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Page1 } from "../components/Recommend/Page1";
import { Page2a } from "../components/Recommend/Page2a";
import { Page2b } from "../components/Recommend/Page2b";
import { Page2c } from "../components/Recommend/Page2c";
import { Page3a } from "../components/Recommend/Page3a";
import { Page3b } from "../components/Recommend/Page3b";

export default function Recommend() {
  const [page, setPage] = useAtom(pageAtom);
  const [isChecked, setIsChecked] = useAtom(isCheckedAtoms);

  // 컴포넌트가 마운트될 때 isChecked 상태 초기화
  useEffect(() => {
    resetChecked();
  }, [page]);

  // 체크상태 초기화 함수
  const resetChecked = () => {
    setIsChecked(() => [false, false, false]);
  };

  // 다른 페이지 갔다가 왔을때 페이지1으로
  useEffect(() => {
    setPage("Page1");
  }, []);

  // 중복 체크 방지
  const preventDuplication = (checkboxIndex: number) => {
    setIsChecked((it) => it.map((_, i) => i === checkboxIndex - 1));
  };

  // 다음 버튼 클릭 시 페이지 이동 처리
  // setPage("") 이 부분은 다른 페이지 이동 처리 해야 됨
  const nextPage = () => {
    switch (page) {
      case "Page1":
        if (isChecked[0]) setPage("Page2a");
        else if (isChecked[1]) setPage("Page2b");
        else if (isChecked[2]) setPage("Page2c");
        break;
      case "Page2a":
        if (isChecked[0]) setPage("");
        else if (isChecked[1]) setPage("");
        else if (isChecked[2]) setPage("");
        break;
      case "Page2b":
        if (isChecked[0]) setPage("");
        else if (isChecked[1]) setPage("");
        break;
      case "Page2c":
        if (isChecked[0]) setPage("Page3a");
        else if (isChecked[1]) setPage("Page3b");
        break;
      case "Page3a":
        if (isChecked[0]) setPage("");
        else if (isChecked[1]) setPage("");
        break;
      case "Page3b":
        if (isChecked[0]) setPage("");
        else if (isChecked[1]) setPage("");
        break;
      default:
    }
  };

  return (
    <div>
      <Header />
      <RecommendWrap>
        <div className="recommend_title">맞춤 회고 유형 추천</div>
        {page === "Page1" && <Page1 pd={preventDuplication} />}
        {page === "Page2a" && <Page2a pd={preventDuplication} />}
        {page === "Page2b" && <Page2b pd={preventDuplication} />}
        {page === "Page2c" && <Page2c pd={preventDuplication} />}
        {page === "Page3a" && <Page3a pd={preventDuplication} />}
        {page === "Page3b" && <Page3b pd={preventDuplication} />}
        <button
          className={`next_btn ${
            // isChecked 배열 내에서 하나 이상의 요소가 true인 경우에만 some 메서드가 true를 반환
            isChecked.some((isChecked) => isChecked) ? "active" : ""
          }`}
          onClick={nextPage}
          // 버튼 비활성화(모든 체크박스가 선택되지 않았거나 현재 페이지가 설정되지 않았을 때)
          disabled={!isChecked.some((isChecked) => isChecked) || !page}
        >
          다음
        </button>
      </RecommendWrap>
    </div>
  );
}

const RecommendWrap = styled.div`
  height: 742px;
  background: var(--Background, #121212);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  .recommend_title {
    width: 100%;
    height: 90px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    text-align: center;
    padding: 26px 0;
    box-sizing: border-box;

    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .next_btn {
    width: 152px;
    height: 53px;
    border: none;
    border-radius: 8px;
    background: var(--primary-800, #305d40);

    color: #000;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .next_btn.active {
    background: var(--primary-400, #79cd96);
  }
`;
