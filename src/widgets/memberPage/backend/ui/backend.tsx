import { GetMemberData } from '@/entities/member';
import { MemberType } from '@/shared/types/memberType';
import Image from 'next/image';
import { styles } from './style';
import stylex from '@stylexjs/stylex';
import { MemberCategory } from '@/features/update-button';

export const BackendPage = async () => {
  const data = await GetMemberData('members');

  return (
    <div {...stylex.props(styles.container)}>
      <MemberCategory />
      <main {...stylex.props(styles.mainContainer)}>
        <p {...stylex.props(styles.textStyle)}>BackEnd</p>
        <ul {...stylex.props(styles.imageContainer)}>
          {data.data.map((member: MemberType) =>
            member.Position === 'Backend' ? (
              <li key={member.SlackID}>
                <Image
                  src={member.Image512}
                  alt={member.Nickname}
                  width={282}
                  height={312}
                  {...stylex.props(styles.image)}
                ></Image>
              </li>
            ) : undefined,
          )}
        </ul>
      </main>
    </div>
  );
};
