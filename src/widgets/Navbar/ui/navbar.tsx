import React from 'react';
import Link from 'next/link';
import stylex from '@stylexjs/stylex';
import Image from 'next/image';
import Logo from '@/shared/ui/icons/GDSCLogo.svg';
import { styles } from './styles';
import { ChangeNavBarColor } from '@/features/update-button/ui/change-navbarCategory';

export const Navbar = () => {
  const NavBarData = [
    { name: ' wakatime', path: '/wakatime' },
    { name: 'teddy', path: '/teddy' },
    { name: 'members', path: '/members' },
    { name: 'blog', path: '/blog' },
  ];

  return (
    <header {...stylex.props(styles.navbar)}>
      <Link href={'/'}>
        <Image src={Logo} alt="GDSC로고" />
      </Link>
      <ChangeNavBarColor />
    </header>
  );
};
