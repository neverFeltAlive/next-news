import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledOption = styled.div<{ isSelected: boolean }>`
  position: relative;
  background-color: ${(props) => props.theme.lightColor};
  color: ${(props) =>
    props.isSelected
      ? rgba(props.theme.mainColor, 0.5)
      : props.theme.mainColor};
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  pointer-events: ${(props) => (props.isSelected ? 'none' : 'all')};
  min-height: 40px;
  text-transform: capitalize;

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }

  &:active {
    color: ${(props) => props.theme.shadowColor};
  }

  &:first-child {
    padding-top: 10px;
  }
`;
