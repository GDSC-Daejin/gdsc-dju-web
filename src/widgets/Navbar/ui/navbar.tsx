import React from 'react';
import Link from 'next/link';
import stylex from '@stylexjs/stylex';
import Image from 'next/image';
import Logo from '@/shared/ui/icons/GDSCLogo.svg';
import { styles } from './styles';
import { ChangeNavBarColor } from '@/features/update-button/ui/change-navbarCategory';

export const Navbar = () => {
  return (
    <header {...stylex.props(styles.navbar)}>
      <Link href="/" role="navigation" aria-label="홈으로 가기">
        <Image src={Logo} alt="홈 GSDC 로고" />
      </Link>
      <ChangeNavBarColor />
    </header>
  );
};
