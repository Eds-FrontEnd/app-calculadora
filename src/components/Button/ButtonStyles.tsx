import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 20px;
  border: 1px solid #7f8c8d;
  background-color: #95a5a6;
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  flex: 1;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #7f8c8d;
    opacity: 0.8;
  }

  &:active {
    background-color: #34495e;
  }

  &:nth-child(4),
  &:nth-child(8),
  &:nth-child(12),
  &:nth-child(16) {
    background-color: #e67e22;
  }

  &:nth-child(4):hover,
  &:nth-child(8):hover,
  &:nth-child(12):hover,
  &:nth-child(16):hover {
    background-color: #d35400;
  }

  &:nth-child(4):active,
  &:nth-child(8):active,
  &:nth-child(12):active,
  &:nth-child(16):active {
    background-color: #c0392b;
  }

  &:nth-child(16) {
    background-color: #2ecc71;
  }

  &:nth-child(16):hover {
    background-color: #27ae60;
  }

  &:nth-child(16):active {
    background-color: #1abc9c;
  }
`;
