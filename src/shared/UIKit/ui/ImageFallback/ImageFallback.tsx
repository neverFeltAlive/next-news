import { Container, Wrapper } from './ImageFallback.styles';
import NoImage from './NoImage.svg';

export const ImageFallback = () => {
  return (
    <Wrapper>
      <Container>
        <NoImage />
      </Container>
    </Wrapper>
  );
};
