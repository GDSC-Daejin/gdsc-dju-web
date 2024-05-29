import { GetMemberData } from '@/entities/member';
import { MemberType } from '@/shared/types/memberType';
import Image from 'next/image';
import { styles } from './style';
import stylex from '@stylexjs/stylex';

export const MLPage = async () => {
  const data = await GetMemberData('members');

  return (
    <main {...stylex.props(styles.container)}>
      <p {...stylex.props(styles.textStyle)}>Machine Learning</p>
      <ul {...stylex.props(styles.imageContainer)}>
        {data.data.map((member: MemberType) =>
          member.Position === 'Machine Learning' ? (
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
  );
};