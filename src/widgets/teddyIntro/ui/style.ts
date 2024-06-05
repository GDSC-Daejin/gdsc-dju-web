import * as stylex from '@stylexjs/stylex';
import {
  colors,
  sizes,
  fontWeight,
} from '../../../shared/ui/styles/tokens.stylex';

export const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },

  titleContainer: {
    display: 'flex',
    gap: '3px',
    fontSize: sizes.heading_bold,
    fontWeight: fontWeight.heading_bold,
  },

  title: {
    display: 'flex',
    gap: '3px',
    fontSize: sizes.heading_bold,
    fontWeight: fontWeight.heading_bold,
  },

  fontColor: {
    color: colors.yellowCore,
  },

  content: {
    fontSize: sizes.body1_medium_16,
    lineHeight: '130%',
  },

  contentsContainer: {
    fontSize: sizes.body1_medium,
    width: '792px',
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '100px',
    gap: '24px',
  },

  otherTitle: {
    width: '1100px',
    display: 'flex',
    height: '170px',
    flexDirection: 'column',
    gap: '24px',
  },
});
