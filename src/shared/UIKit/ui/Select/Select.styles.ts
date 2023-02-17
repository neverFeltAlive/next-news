import { rgba } from 'polished';
import styled from 'styled-components';

//region Styled
export const StyledSelect = styled.div<{ isOpen: boolean }>`
  position: relative;
  background-color: ${(props) => props.theme.lightColor};
  width: 200px;
  padding: 5px 10px;
  border-radius: 10px;
  box-sizing: border-box;
  border-bottom-right-radius: ${(props) => (props.isOpen ? 0 : '10px')};
  border-bottom-left-radius: ${(props) => (props.isOpen ? 0 : '10px')};
  border: ${(props) =>
    props.isOpen
      ? `1px solid ${props.theme.accentColor}`
      : '1px solid transparent'};
  border-bottom: none;
  transition: all 0.3s ease-in-out;
`;

export const SelectHead = styled.div<{ isSelected: boolean }>`
  color: ${(props) =>
    props.isSelected
      ? props.theme.mainColor
      : rgba(props.theme.mainColor, 0.5)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectOptions = styled.div<{ isOpen: boolean }>`
  position: absolute;
  overflow: hidden;
  width: 200px;
  z-index: 10;
  left: -1px;
  box-sizing: border-box;
  //opacity: ${(props) => (props.isOpen ? 1 : 0)};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
  background-color: ${(props) => props.theme.lightColor};
  height: ${(props) => (props.isOpen ? '120px' : '0')};
  border: ${(props) =>
    props.isOpen
      ? `1px solid ${props.theme.accentColor}`
      : '1px solid transparent'};
  transition: all 0.3s ease-in-out;
  border-top: none;

  ${(props) =>
    !props.isOpen &&
    `
    border-bottom: none;
  `}
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Icon = styled.button<{ isOpen: boolean }>`
  border: none;
  background: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => props.theme.mainColor};
  transform: rotate(${(props) => (props.isOpen ? '180deg' : '0deg')});
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;
//endregion
