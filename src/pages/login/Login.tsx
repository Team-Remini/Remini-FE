import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import axios from "axios";

// 로그인/회원가입 페이지
export default function Login() {
  const REST_API_KEY = "4d9aacde53f8f2b4edd1d27d4ddf98e9";
  const REDIRECT_URI = "http://localhost:8080";
  const kakaoOAuthLink = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = kakaoOAuthLink;
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      console.log(code);

      if (code) {
        const tokenResponse = await axios.post(
          `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`
        );
        const access_token = tokenResponse.data.access_token;

        // 로그인 성공 시, 로그인된 상태로 표시
        setIsLoggedIn(true);

        // Store the access token in a safer place like HTTPOnly cookies or in the backend
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <div>
      <Header />
      <LoginWrap>
        <h3 className="login_text">로그인</h3>
        <button onClick={loginHandler} className="kakao">
          카카오 계정으로 계속하기
        </button>
      </LoginWrap>
      {isLoggedIn ? (
        <div>
          <h3>로그인 성공</h3>
        </div>
      ) : null}
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
    background: #fee500;

    color: #371d1e;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
