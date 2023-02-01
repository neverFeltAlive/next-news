import { rgba } from 'polished';
import styled from 'styled-components';

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  border: 16px solid ${(props) => rgba(props.theme.shadowColor, 0.5)};
  border-top: 16px solid ${(props) => props.theme.accentColor};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
