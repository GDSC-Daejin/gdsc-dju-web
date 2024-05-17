'use client';

import stylex from '@stylexjs/stylex';
import { styles } from './style';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const TeddyCategory = () => {
  const teddyCategorys = [
    { name: 'intro', route: '/teddy' },
    { name: 'Top 5', route: '/teddy/top5' },
    { name: 'Weekly', route: '/teddy/weekly' },
    { name: 'Monthly', route: '/teddy/monthly' },
  ];

  const router = useRouter();

  const [isClick, setIsClick] = useState(0);

  const handleClick = (index: number) => {
    setIsClick(index);
    router.push(teddyCategorys[index].route);
  };

  return (
    <div {...stylex.props(styles.teddyCategoryContainer)}>
      {teddyCategorys.map((category, index) => (
        <ul key={index}>
          <li
            {...stylex.props(
              isClick === index ? styles.isClickButton : styles.teddyCategory,
            )}
            onClick={() => handleClick(index)}
          >
            {category.name}
          </li>
        </ul>
      ))}
    </div>
  );
};
