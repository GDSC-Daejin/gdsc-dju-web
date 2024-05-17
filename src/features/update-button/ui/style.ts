import * as stylex from '@stylexjs/stylex';
import { colors, sizes } from '../../../shared/ui/styles/tokens.stylex';

export const styles = stylex.create({
  teddyCategoryContainer: {
    width: "1200px",
    margin: '0 auto',
    display: 'flex',
    paddingLeft: '120px',
    color: colors.grey900,
    fontSize: sizes.body2_regular,
    gap: '24px',
    paddingTop: '32px',
  },

  teddyCategory: {
    backgroundColor: colors.grey450,
    width: '78px',
    cursor: 'pointer',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100px',
    color: colors.grey900,
    textDecoration: 'none',
  },

  isClickButton: {
    backgroundColor: colors.yellowCore,
    color: colors.white,
    width: '78px',
    cursor: 'pointer',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100px',
    textDecoration: 'none',
  },
});
