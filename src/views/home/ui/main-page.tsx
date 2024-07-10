import { MainAni } from '@/widgets/MainAnimate/index';
import stylex from '@stylexjs/stylex';

export const MainPage = () => {
  return (
    <div style={styles.container}>
      <MainAni />
    </div>
  );
};

const styles = stylex.create({
  container: {
    width: '100%',
    height: '100vh',
  },

  heading: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
