import styled, { css } from "styled-components";

type TContent = {
  align: "left" | "right";
  isActive?: boolean;
};

export const ButtonContainer = styled.div`
  height: fit-content;
  width: fit-content;
  position: relative;
`;

export const Button = styled.button`
  background-color: #2d2f3a;
  border: none;
  padding: 1px 2px;
  cursor: pointer;
`;

export const Content = styled.div<TContent>`
  display: flex;
  flex-direction: column;
  visibility: ${({ isActive }) => isActive ? 'visible' : 'hidden'};
  opacity: ${({ isActive }) => isActive ? '1' : '0'};;
  background-color: #2d2f3a;
  transition: all 0.4s ease;
  position: absolute;
  ${({ align }) =>
    align === "right" &&
    css`
      right: 0;
    `}
  z-index: 999;
`;
