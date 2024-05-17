import stylex from '@stylexjs/stylex';
import { colors } from '../../../shared/ui/styles/tokens.stylex';

export const styles = stylex.create({
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    padding: 14,
    width: '100%',
    color: colors.grey900,
  },
  category: {
    textDecoration: 'none',
  },
  categoryHover: {
    color: {
      default: 'black',
      ':hover': colors.blueCore,
    },
    borderBottomWidth: {
      ':hover': '1px',
    },
    borderColor: {
      ':hover': colors.blueCore,
    },
    borderStyle: {
      ':hover': 'solid',
    },
  },
});
