'use client';

import * as stylex from '@stylexjs/stylex';
import { colors, sizes } from '../../../shared/ui/styles/tokens.stylex';
import { useState } from 'react';
import Link from 'next/link';

export const styles = stylex.create({
  container: {
    paddingTop: '32px',
    display: 'flex',
    gap: '24px',
    width: '1200px',
    justifyContent: 'flex-start',
  },

  categoryContainer: {
    textDecoration: 'none',
  },

  category: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '27px',
    width: '78px',
    textDecoration: 'none',
    height: '30px',
    cursor: 'pointer',
    fontSize: sizes.title2_medium,
    backgroundColor: colors.grey200,
    color: colors.grey900,
  },

  isActive: {
    backgroundColor: colors.redCore,
    color: colors.grey50,
  },
});

export const MemberCategory = () => {
  const [isClick, setIsClick] = useState('');

  const memberCategory = [
    { name: 'Backend', path: '/backend' },
    { name: 'Frontend', path: '/frontend' },
    { name: 'Android', path: '/android' },
    { name: 'ML', path: '/ml' },
    { name: 'Designer', path: '/designer' },
    { name: 'Beginner', path: '/beginner' },
    { name: 'Alumnight', path: '/alumnight' },
  ];

  return (
    <>
      <ul {...stylex.props(styles.container)}>
        {memberCategory.map((member, index) => (
          <Link
            href={`/members/${member.path}`}
            key={index}
            {...stylex.props(styles.categoryContainer)}
          >
            <li
              onClick={() => setIsClick(member.name)}
              {...stylex.props(
                styles.category,
                isClick === member.name ? styles.isActive : undefined,
              )}
            >
              {member.name}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};
