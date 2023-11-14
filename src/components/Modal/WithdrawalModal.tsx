import React from "react";
import ModalWrap from "./ModalWrap.tsx";
import ModalOverlay from "./ModalOverLay.tsx";

// 탈퇴하기 모달
const WithdrawalModal: React.FC<{ closeModal: () => void }> = ({
  closeModal,
}) => {
  return (
    <ModalOverlay>
      <ModalWrap>
        <h1>정말 탈퇴하시겠어요?</h1>
        <p>탈퇴 시 모든 정보가 삭제되며, 복구되지 않습니다.</p>
        <div className="btn_container">
          <button onClick={closeModal}>취소</button>
          <button onClick={closeModal}>탈퇴하기</button>
        </div>
      </ModalWrap>
    </ModalOverlay>
  );
};

export default WithdrawalModal;
