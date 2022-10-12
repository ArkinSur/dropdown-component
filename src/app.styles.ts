import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 4rem;
`;

export const ContentButton = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  height: 48px;
  width: 136px;
  color: white;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 16px;
  transition: background-color 0.7s ease;
  box-sizing: border-box;

  &:hover {
    background-color: #0054a7;
  }
`;

export const ContentAnchor = styled.a`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  height: 48px;
  width: 136px;
  color: white;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.7s ease;
  box-sizing: border-box;

  &:hover {
    background-color: #0054a7;
  }
`;
