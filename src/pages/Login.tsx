import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// 로그인/회원가입 페이지
export default function Login() {
  return (
    <div>
      <Header />
      <LoginWrap>
        <h3 className="login_text">로그인</h3>
        <button className="kakao">카카오 계정으로 계속하기</button>
      </LoginWrap>
      <Footer />
    </div>
  );
}

const LoginWrap = styled.div`
  height: 505px;
  box-sizing: border-box;
  padding: 172.5px 0;
  background-color: #121212;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  .login_text {
    margin: 0;
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .kakao {
    width: 530px;
    height: 62px;
    border: none;
    border-radius: 8px;
    background: #fae100;

    color: #371d1e;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
