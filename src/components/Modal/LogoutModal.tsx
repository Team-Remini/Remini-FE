import React from "react";
import ModalWrap from "./ModalWrap.tsx";
import ModalOverlay from "./ModalOverLay.tsx";

// 로그아웃 모달
const LogoutModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  return (
    <ModalOverlay>
      <ModalWrap>
        <h1>정말 로그아웃 하시겠어요?</h1>
        <div className="btn_container">
          <button onClick={closeModal}>취소</button>
          <button onClick={closeModal}>탈퇴하기</button>
        </div>
      </ModalWrap>
    </ModalOverlay>
  );
};

export default LogoutModal;
