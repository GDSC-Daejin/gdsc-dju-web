import type { Metadata } from 'next';

import '@/shared/styles/globals.css';
import stylex from '@stylexjs/stylex';
import React from 'react';
import { Navbar } from '@/widgets/Navbar';

export const metadata: Metadata = {
  title: 'GDSC DJU',
  description: 'GDSC DJU official website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html {...stylex.props(styles.html)} lang="en">
      <body {...stylex.props(styles.body)}>
        <Navbar />
        <main {...stylex.props(styles.main)}>{children}</main>
      </body>
    </html>
  );
}

const styles = stylex.create({
  html: {
    colorScheme: 'light dark',
  },
  reset: {
    height: '100vh',
    margin: 0,
    padding: 0,
  },
  body: {
    color: 'rgb(20, 22, 27)',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
    padding: 16,
    gap: 16,
  },
});
