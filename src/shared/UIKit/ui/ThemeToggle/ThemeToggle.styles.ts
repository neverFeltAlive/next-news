import styled from 'styled-components';

export const StyledToggle = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  position: relative;
  width: 60px;
  height: 30px;
  background-color: ${(props) => props.theme.lightColor};
  border-radius: 30px;

  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: ${(props) =>
      props.isActive
        ? `inset 9px -5px 0px 0px ${props.theme.mainColor}`
        : 'none'};
    transition: 0.3s;
    background-color: ${(props) =>
      props.isActive ? props.theme.lightColor : props.theme.mainColor};

    transform: ${(props) =>
      props.isActive ? 'translateX(30px)' : 'translateX(0px)'};
  }
`;
