import { useRouter } from 'next/router';

import { StyledLink } from './LanguageButton.styles';

export const LanguageButton = () => {
  const router = useRouter();
  const newLang = router.locale === 'ru' ? 'en' : 'ru';

  return (
    <StyledLink href={router.pathname} locale={newLang}>
      {newLang}
    </StyledLink>
  );
};
