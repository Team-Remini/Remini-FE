import React from "react";
import styled from "styled-components";

// 푸터 없는 경우 빈 푸터
export const EmptyFooter: React.FC = () => {
  return <FooterWrap></FooterWrap>;
};

const FooterWrap = styled.div`
  height: 156px;
  box-sizing: border-box;
  padding: 40px 0;
  background-color: #121212;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
