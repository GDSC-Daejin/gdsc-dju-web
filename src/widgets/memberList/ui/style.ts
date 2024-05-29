import * as stylex from '@stylexjs/stylex';
import { sizes, fontWeight } from '../../../shared/ui/styles/tokens.stylex';

export const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    paddingTop: '48px',
  },

  coreContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  imageContainer: {
    display: 'flex',
    gap: '24px',
  },

  image: {
    borderRadius: '10px',
  },

  ImageContainer: {
    paddingTop: '48px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 282px)',
    rowGap: '24px',
    columnGap: '24px',
  },

  textStyle: {
    fontSize: sizes.title1_bold,
    fontWeight: fontWeight.title1_bold,
  },
});
