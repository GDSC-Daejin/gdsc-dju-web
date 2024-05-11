import * as stylex from '@stylexjs/stylex';
import { fontWeight, sizes } from '../../../shared/ui/styles/tokens.stylex';

export const styles = stylex.create({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '920px',
  },

  title: {
    fontSize: '50px',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: fontWeight.title1_bold,
  },

  subTitle: {
    fontSize: sizes.body2_regular,
    textAlign: 'center',
  },
});
