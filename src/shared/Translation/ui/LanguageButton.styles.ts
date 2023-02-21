import Link from 'next/link';

import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.accentColor};
  background-color: ${(props) => props.theme.lightColor};
  font-weight: 600;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  width: 60px;

  &:hover {
    color: ${(props) => props.theme.lightColor};
    background-color: ${(props) => props.theme.accentColor};
  }
`;
