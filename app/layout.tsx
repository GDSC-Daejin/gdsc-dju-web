import type { Metadata } from 'next';

import '@/shared/ui/styles/globals.css';
import stylex from '@stylexjs/stylex';
import React from 'react';
import { Navbar } from '@/widgets/navbar';
import { ThemeProvider } from 'next-themes';
import ThemeToggle from '@/widgets/ThemeToggle';

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
      <body {...stylex.props(styles.body)} className={`${styles.body} dark: ${styles.dark}`}>
        <ThemeProvider attribute='class'>
          <Navbar />
          <ThemeToggle/>
          <main>{children}</main>
        </ThemeProvider>
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
    backgroundColor: "white",
    color: 'rgb(20, 22, 27)',
  },
  dark: {
    backgroundColor: "black",
    color: 'white',
  },
  span: {
    color: 'rgb(20, 22, 27)', // Default span color in light mode
  },
  spanDark: {
    color: 'white', // Span color in dark mode
  },

});
