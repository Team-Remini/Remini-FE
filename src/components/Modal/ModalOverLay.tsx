import styled from "styled-components";

// 모달창 배치
const ModalOverlay = styled.div`
  position: fixed;
  top: 306px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(18, 18, 18, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export default ModalOverlay;
