import { colors, spacing } from '@/shared/styles/tokens.stylex';
import stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  navmenu: {
    display: 'flex',
    gap: 16,
  },
  navitem: {
    padding: 8,
    borderRadius: 8,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
  navitemActive: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: 16,
    gap: 16,
    fontFamily: 'sans-serif',
  },
});
