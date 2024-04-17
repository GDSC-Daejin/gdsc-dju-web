import React from 'react';
import Link from 'next/link';
import stylex from '@stylexjs/stylex';
import { styles } from './styles';

export const Navbar = () => {
  return (
    <header>
      <nav {...stylex.props(styles.navbar)}>
        <div {...stylex.props(styles.logo)}>GDSC DJU</div>
        <div {...stylex.props(styles.navmenu)}>
          <Link href="/" {...stylex.props(styles.navitem)}>
            Home
          </Link>
          <Link href="/teddy" {...stylex.props(styles.navitem)}>
            Teddy
          </Link>
        </div>
      </nav>
    </header>
  );
};
