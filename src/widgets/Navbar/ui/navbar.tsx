"use client";

import React from 'react';
import Link from 'next/link';
import stylex from '@stylexjs/stylex';
import Image from 'next/image';
import Logo from '@/shared/ui/icons/GDSCLogo.svg';
import { styles } from './styles';


export const Navbar = () => {


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
          <p>wakatime</p>
        </Link>
        <Link
          href="/teddy"
          {...stylex.props(styles.category, styles.categoryHover)}
        >
          <span >teddy</span>
        </Link>
        <Link
          href="/members"
          {...stylex.props(styles.category, styles.categoryHover)}
        >
          <span>members</span>
        </Link>
        <Link
          href="/blog"
          {...stylex.props(styles.category, styles.categoryHover)}
        >
          <span>blog</span>
        </Link>
      </nav>
    </header>
  );
};
