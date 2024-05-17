import { TeddyCategory } from '@/features/update-button/index';
import type { Metadata } from 'next';

import React from 'react';

export const metadata: Metadata = {
  title: 'GDSC DJU | Teddy',
  description: 'GDSC DJU Teddy website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TeddyCategory />
      <main>{children}</main>
    </>
  );
}
