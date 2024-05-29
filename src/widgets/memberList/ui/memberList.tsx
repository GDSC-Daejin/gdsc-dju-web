'use client';

import Image from 'next/image';
import { GetMemberData } from '@/entities/member/index';
import { styles } from './style';
import stylex from '@stylexjs/stylex';
import { MemberType } from '@/shared/types/memberType';

export const MemberList = async () => {
  const allMemberData = await GetMemberData('members');
  const coreMemberData = await GetMemberData('admin-members');

  return (
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
      <div {...stylex.props()}>
        <h1 {...stylex.props(styles.textStyle)}>Member</h1>
        <div {...stylex.props(styles.ImageContainer)}>
          {allMemberData.data.map((member: MemberType) =>
            member.Role === 'Member' ? (
              <Image
                src={member.Image512}
                alt={member.Name}
                key={member.SlackID}
                width={282}
                height={312}
                {...stylex.props(styles.image)}
              />
            ) : undefined,
          )}
        </div>
      </div>
    </main>
  );
};
