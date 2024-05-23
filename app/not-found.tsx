import Link from 'next/link';
import * as stylex from '@stylexjs/stylex';
import { sizes } from '../src/shared/ui/styles/tokens.stylex';

export const styles = stylex.create({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  header: {
    fontSize: sizes.title1_bold,
  },
});

export default function NotFound() {
  return (
    <div {...stylex.props(styles.container)}>
      <h2 {...stylex.props(styles.header)}>찾을수 없습니다</h2>
      <p>잘못된 경로로 접근했습니다!!</p>
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}
