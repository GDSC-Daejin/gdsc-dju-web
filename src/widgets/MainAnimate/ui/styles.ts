import { fontWeight, sizes } from '../../../shared/ui/styles/tokens.stylex';
import stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    position: 'relative',
  },

  darkBg: {
    backgroundColor: 'black',
  },

  lightBg: {
    backgroundColor: 'white',
  },

  logo: {
    position: 'absolute',
    zIndex: 1,
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100px',
  },

  text: {
    position: 'absolute',
    zIndex: 1,
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: fontWeight.heading_bold,
    fontSize: 90,
  },
});
