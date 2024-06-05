import * as stylex from '@stylexjs/stylex';
import {
  sizes,
  fontWeight,
  colors,
} from '../../../../shared/ui/styles/tokens.stylex';

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

  dummyData: {
    width: '282px',
    height: '312px',
    backgroundColor: colors.white,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: ' 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },

  image: {
    borderRadius: '10px',
  },
});
