import React from "react";
import ModalWrap from "./ModalWrap.tsx";

const ShareModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const closeBtn = () => {
    closeModal();
  };

  return (
    <ModalWrap>
      <h1>회고가 수정되었어요!</h1>
      <p>수정한 회고를 살펴보세요..</p>
      <div className="btn_container">
        <button className="main_btn" onClick={closeBtn}>
          확인
        </button>
      </div>
    </ModalWrap>
  );
};

export default ShareModal;
