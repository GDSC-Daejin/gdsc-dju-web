import { GetMemberData } from '@/entities/member';
import { MemberType } from '@/shared/types/memberType';
import Image from 'next/image';
import { styles } from './style';
import stylex from '@stylexjs/stylex';
import Icon from '@/shared/ui/icons/defaultImg.svg';
import { MemberCategory } from '@/features/update-button';

export const AlumNightPage = async () => {
  const data = await GetMemberData('members');

  const AlumNightMembers = data.data.filter(
    (member: MemberType) => member.Position === 'AlumNight',
  );

  const dummyMember = Array.from({
    length: Math.max(0, 3 - AlumNightMembers.length),
  });

  return (
    <div {...stylex.props(styles.container)}>
      <MemberCategory />
      <main {...stylex.props(styles.mainContainer)}>
        <p {...stylex.props(styles.textStyle)}>AlumNight</p>
        <ul {...stylex.props(styles.imageContainer)}>
          {AlumNightMembers.map((member: MemberType) => (
            <li key={member.SlackID}>
              <Image
                src={member.Image512}
                alt={member.Nickname}
                width={282}
                height={312}
                {...stylex.props(styles.image)}
              ></Image>
            </li>
          ))}
          {dummyMember.map((_, index) => (
            <div key={index} {...stylex.props(styles.dummyData)}>
              <Image
                src={Icon}
                alt="기본 이미지"
                {...stylex.props(styles.image)}
              />
            </div>
          ))}
        </ul>
      </main>
    </div>
  );
};
