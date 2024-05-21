'use client';

import { useState } from 'react';
import Image from 'next/image';
import LeftButton from '@/shared/ui/icons/leftButton.svg';
import RightButton from '@/shared/ui/icons/rightButton.svg';
import stylex from '@stylexjs/stylex';
import { sizes, fontWeight } from '../../../shared/ui/styles/tokens.stylex';

export const styles = stylex.create({
  container: {
    display: 'flex',
    gap: '16px',
    fontSize: sizes.title1_bold,
    fontWeight: fontWeight.title1_bold,
  },
});

export const ChangeDay = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    new Date().getMonth(),
  );

  const handleMinus = () => {
    setCurrentMonthIndex(
      (prevIndex) => (prevIndex - 1 + months.length) % months.length,
    );
  };

  const handlePlus = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % months.length);
  };

  return (
    <>
      <div {...stylex.props(styles.container)}>
        <Image src={LeftButton} alt="이전 버튼" onClick={handleMinus} />
        <p>{months[currentMonthIndex]}</p>
        <Image src={RightButton} alt="다음 버튼" onClick={handlePlus} />
      </div>
    </>
  );
};
