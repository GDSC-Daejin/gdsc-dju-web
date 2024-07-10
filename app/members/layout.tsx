import type { Metadata } from 'next';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const metadata: Metadata = {
  title: 'GDSC DJU | Members',
  description: 'GDSC DJU Members website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div {...stylex.props(styles.container)}>
      <main {...stylex.props(styles.container)}>{children}</main>
    </div>
  );
}
