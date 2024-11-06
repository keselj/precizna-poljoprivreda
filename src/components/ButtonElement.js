import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

// Styled-component for LinkRouter with button styles
export const Button = styled(LinkRouter)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#FFCA00" : "rgb(17, 29, 30);")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#FFCA00")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center; // Fixed typo from "aling-items" to "align-items"
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#000" : "#FFCA00")};
    white-space: nowrap;
    color: ${({ dark }) => (dark ? "#FFCA00" : "#000")};
  }
`;
