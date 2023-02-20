import styled from 'styled-components';

export const NewsBar = styled.div`
  padding: 10px 5px;
  width: 80%;
  margin: auto auto 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: ${(props) => props.theme.breakPoints.laptopLarge}) {
    width: 100%;
    margin: 0 10px 10px;
  }

  @media (max-width: ${(props) => props.theme.breakPoints.laptop}) {
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: ${(props) => props.theme.breakPoints.mobileLarge}) {
    margin: 0;
    padding-top: 40px;
  }
`;

export const NewsSelects = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakPoints.mobileLarge}) {
    flex-direction: column;
    gap: 10px;
  }
`;
