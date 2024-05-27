"use client";

import stylex from '@stylexjs/stylex';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button {...stylex.props(styles.themeButton)} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
};

const styles = stylex.create({
  themeButton: {
    position: "absolute",
    right: 50,
    top: 20
  }
});

export default ThemeToggle;
