import styled from 'styled-components';
import { rgba } from 'polished';

export const Article = styled.article`
  background-color: ${(props) => props.theme.lightColor};
  border: 2px solid transparent;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  padding: 15px;
  color: ${(props) => props.theme.mainColor};
  transition: all 0.3s ease-in-out;
  height: 500px;
  box-shadow: 0 0 15px ${(props) => props.theme.secondAccentColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 0 15px ${(props) => props.theme.mainColor};
  }
`;

export const ArticleTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 22px;
  word-break: break-word;
  color: ${(props) => props.theme.mainColor};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ArticleBody = styled.div``;

export const ArticleImage = styled.div`
  width: 100%;
`;

export const ArticleDescription = styled.h5`
  margin: 10px 0 0;
  padding: 0;
  font-size: 14px;
  color: ${(props) => rgba(props.theme.mainColor, 0.7)};
`;

export const ArticleFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
`;

export const ArticleAuthor = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin: 0;
  padding: 10px 0 0;
`;
