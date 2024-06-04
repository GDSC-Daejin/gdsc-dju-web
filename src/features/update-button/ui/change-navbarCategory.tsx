'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as stylex from '@stylexjs/stylex';
import { colors } from '../../../shared/ui/styles/tokens.stylex';

export const styles = stylex.create({
  category: {
    textDecoration: 'none',
  },
  categoryHover: {
    color: {
      default: 'black',
      ':hover': colors.blueCore,
    },
    borderBottomWidth: {
      ':hover': '1px',
    },
    borderColor: {
      ':hover': colors.blueCore,
    },
    borderStyle: {
      ':hover': 'solid',
    },
  },
  active: {
    color: colors.blueCore,
  },
});

export const ChangeNavBarColor = () => {
  const NavBarPath = usePathname();

  const NavBarData = [
    { name: 'wakatime', path: '/wakatime' },
    { name: 'teddy', path: '/teddy' },
    { name: 'members', path: '/members' },
    { name: 'blog', path: '/blog' },
  ];

  const pathName = NavBarData.map((item) => item.name);

  return (
    <>
      {NavBarData.map((category, index) => (
        <Link
          href={category.path}
          key={index}
          role="navigation"
          aria-label={`${pathName}로 바로가기`}
          {...stylex.props(
            styles.category,
            styles.categoryHover,
            NavBarPath === category.path ? styles.active : undefined,
          )}
        >
          {category.name}
        </Link>
      ))}
    </>
  );
};
