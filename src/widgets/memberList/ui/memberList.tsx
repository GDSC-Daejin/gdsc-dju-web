'use client';

import Image from 'next/image';
import { GetMemberData } from '@/entities/member/index';
import { styles } from './style';
import stylex from '@stylexjs/stylex';
import { MemberType } from '@/shared/types/memberType';
import { MemberCategory } from '@/features/update-button';

export const MemberList = async () => {
  const allMemberData = await GetMemberData('members');
  const coreMemberData = await GetMemberData('admin-members');

  return (
    <>
      <MemberCategory />
      <main {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.coreContainer)}>
          <h1 {...stylex.props(styles.textStyle)}>Core</h1>
          <div {...stylex.props(styles.imageContainer)}>
            {coreMemberData.data.map((member: MemberType) => (
              <Image
                src={member.Image512}
                alt={member.Nickname}
                key={member.SlackID}
                width={282}
                height={312}
                {...stylex.props(styles.image)}
              />
            ))}
          </div>
        </div>
        <div {...stylex.props(styles.memberContainer)}>
          <h1 {...stylex.props(styles.textStyle)}>Member</h1>
          <div {...stylex.props(styles.ImageContainer)}>
            {allMemberData.data.map((member: MemberType) =>
              member.Role === 'Member' ? (
                <Image
                  src={member.Image512}
                  alt={member.Nickname}
                  key={member.SlackID}
                  width={282}
                  height={312}
                  {...stylex.props(styles.images)}
                />
              ) : undefined,
            )}
          </div>
        </div>
      </main>
    </>
  );
};
