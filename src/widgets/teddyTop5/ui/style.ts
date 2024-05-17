import * as stylex from '@stylexjs/stylex';
import {
  colors,
  sizes,
  fontWeight,
} from '../../../shared/ui/styles/tokens.stylex';

export const styles = stylex.create({
  container: {
    width: '1200px',
    margin: '0 auto',
    paddingLeft: '120px',
    paddingTop: '115px',
  },

  TopContainer: {
    display: 'flex',
    gap: '24px',
    boxSizing: 'border-box',
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    display: 'flex',
    gap: '3px',
    fontSize: sizes.heading_bold,
    fontWeight: fontWeight.heading_bold,
  },

  fontColor: {
    // color: colors.yellowCore,
    color: 'black',
  },

  subTitle: {
    fontSize: sizes.body1_medium,
  },

  Image: {
    borderRadius: '10px',
  },

  ImageContainer: {
    display: 'flex',
    gap: '24px',
    paddingTop: '73px',
  },
});
