import styled from 'styled-components';
import { rgba } from 'polished';

//region Styled
export const StyledSelect = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.lightColor};
  width: 200px;
  padding: 5px 10px;
  border-radius: 10px;
  box-sizing: border-box;
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
  padding-top: 10px;
  position: absolute;
  overflow: hidden;
  width: 200px;
  z-index: 10;
  left: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
  background-color: ${(props) => props.theme.lightColor};
  height: ${(props) => (props.isOpen ? 'fit-content' : '0')};
  transition: all 1s ease-in-out;
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
