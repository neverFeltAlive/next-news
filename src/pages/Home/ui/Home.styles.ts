import styled from 'styled-components';

//region Styled
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: 100px auto auto;

  @media (max-width: ${(props) => props.theme.breakPoints.laptop}) {
    width: 100%;
    margin: 0;
  }
`;

export const ToggleContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
`;

export const LanguageContainer = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
`;
//endregion
