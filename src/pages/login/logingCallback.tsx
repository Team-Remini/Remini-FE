import React, { useEffect } from "react";
import loadingImg from "../../img/UI/RedirectImg.svg";
import styled from "styled-components";

//KakaoRedirect 저장 페이지
function logingCallback() {
  return (
    <>
      <script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js"
        integrity="sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH"
        crossorigin="anonymous"
      ></script>
      <script></script>
      <logingCallbackWrap>
        <img src="loadingImg" />
      </logingCallbackWrap>
    </>
  );
}

export default logingCallback;

const logingCallbackWrap = styled.div`
  display: flex;
  width: 1280px;
  height: 832px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: var(--Background, #121212);
`;
