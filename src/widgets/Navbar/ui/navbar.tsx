"use client";

import React from 'react';
import Link from 'next/link';
import stylex from '@stylexjs/stylex';
import Image from 'next/image';
import Logo from '@/shared/ui/icons/GDSCLogo.svg';
import { styles } from './styles';
import { useTheme } from 'next-themes';


export const Navbar = () => {
  const { theme } = useTheme();
  const spanClass = theme === 'dark' ? styles.spanDark : null;
  return (
    <header>
      <nav {...stylex.props(styles.navbar)}>
        <Link href="/" {...stylex.props(styles.category)}>
          <Image src={Logo} alt="GDSC로고" />
        </Link>
        <Link
          href="/wakatime"
          {...stylex.props(styles.category, styles.categoryHover)}
        >
          <span {...stylex.props(spanClass)}>wakatime</span>
        </Link>
        <Link
          href="/teddy"
          {...stylex.props(styles.category, styles.categoryHover)}
        >
          <span {...stylex.props(spanClass)}>teddy</span>
        </Link>
        <Link
          href="/members"
          {...stylex.props(styles.category, styles.categoryHover)}
        >
          <span {...stylex.props(spanClass)}>members</span>
        </Link>
        <Link
          href="/blog"
          {...stylex.props(styles.category, styles.categoryHover)}
        >
          <span {...stylex.props(spanClass)}>blog</span>
        </Link>
      </nav>
    </header>
  );
};
