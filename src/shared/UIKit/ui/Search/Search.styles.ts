import { rgba } from 'polished';
import styled from 'styled-components';

//region Styled
export const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: fit-content;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.lightColor};
  color: ${(props) => props.theme.mainColor};

  @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    width: 100%;
  }
`;

export const Button = styled.button<{ isActive: boolean }>`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${(props) => (!props.isActive ? 'none' : 'all')};
  color: ${(props) =>
    props.isActive
      ? props.theme.accentColor
      : rgba(props.theme.mainColor, 0.5)};

  transition: all 0.3s ease-in-out;
`;

export const ClearButton = styled(Button)`
  opacity: ${(props) => (props.isActive ? 1 : 0)};
`;
//endregion
