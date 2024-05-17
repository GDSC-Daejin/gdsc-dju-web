import * as stylex from '@stylexjs/stylex';
import {
  colors,
  sizes,
  fontWeight,
} from '../../../shared/ui/styles/tokens.stylex';

export const styles = stylex.create({
  container: {
    width: "1200px",
    margin: '0 auto',
    paddingTop: '215px',
  },

  image: {
    width: '282px',
    height: '312px',
    borderRadius: '10px',
    backgroundColor: colors.grey450,
  },

  imageContainer: {
    display: 'flex',
    gap: '24px',
    height: '170px',
  },
});
