import * as stylex from '@stylexjs/stylex';
import { sizes, fontWeight } from '../../../../shared/ui/styles/tokens.stylex';

export const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  imageContainer: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    rowGap: '24px',
    columnGap: '24px',
  },

  textStyle: {
    paddingTop: '48px',
    width: '100%',
    fontSize: sizes.title1_bold,
    fontWeight: fontWeight.title1_bold,
  },

  image: {
    borderRadius: '10px',
  },
});
