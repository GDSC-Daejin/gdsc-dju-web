import Image from 'next/image';
import { styles } from './style';
import stylex from '@stylexjs/stylex';
import { GetTeddyData } from '@/entities/teddy';
import { TeddyIntro } from '@/widgets/teddyIntro/index';

interface User {
  profileImage: string;
  nickname: string;
}

export const TeddyTop5Home = async () => {
  const teddyData = await GetTeddyData('all');
  const TeddyUsersData = teddyData.data.map((users: User) => users);

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.TopContainer)}>
        <div {...stylex.props(styles.titleContainer)}>
          <TeddyIntro
            title={'Top 5 Teddy Recipients !'}
            content={
              '우리가 소개하는 ‘ top 5 teddy recipients’는 우리 동아리에서' +
              '높은 평가를 받은 특별한 구성원들 입니다. 이들은 우리의 활동에 지속적으로 많은 도움을 주고 있는 멤버들 중에서 상위' +
              '5명으로 선정되었습니다. 이들은 우리 동아리의 성장과 발전에 큰 기여를 하고 있으며, 우리 모두에게 영감을 주고 있습' +
              '니다. 이들의 열정과 노력은 우리의 활동을 더욱 풍요롭고 의미있게 만들어주고 있으며, ' +
              '우리 동아리의 목표를 달성하는데 중요한 역할을 하고 있습니다.'
            }
          />
        </div>
        {TeddyUsersData.slice(0, 1).map((users: User) => (
          <Image
            key={users.nickname}
            src={users.profileImage}
            width={282}
            height={312}
            alt={users.nickname}
            {...stylex.props(styles.Image)}
          />
        ))}
      </div>
      <div {...stylex.props(styles.ImageContainer)}>
        {TeddyUsersData.slice(1, 5).map((users: User) => (
          <Image
            key={users.nickname}
            src={users.profileImage}
            width={282}
            height={312}
            alt={users.nickname}
            {...stylex.props(styles.Image)}
          />
        ))}
      </div>
    </div>
  );
};
