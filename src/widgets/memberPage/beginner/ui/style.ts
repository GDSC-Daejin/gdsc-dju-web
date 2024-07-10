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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  imageContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    rowGap: '24px',
    columnGap: '24px',
    width: '100%',
  },

  textStyle: {
    paddingTop: '48px',
    fontSize: sizes.title1_bold,
    fontWeight: fontWeight.title1_bold,
  },

  dummyData: {
    backgroundColor: colors.white,
    display: 'flex',
    boxShadow: ' 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    height: '90%',
  },

  image: {
    width: '100%',
    height: '90%',
  },
});
