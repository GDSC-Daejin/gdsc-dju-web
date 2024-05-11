import { TeddyWeeklyMember } from '@/widgets/TeddyWeekly';
import { TeddyIntro } from '@/widgets/teddyIntro/index';
import stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    paddingLeft: '120px',
    paddingTop: '115px',
  },
});

export const TeddyWeekly = () => {
  return (
    <div {...stylex.props(styles.container)}>
      <TeddyIntro
        title={'The Teddy received this week '}
        content={
          '이번 주에 곰인형을 받은 구성원을 소개합니다. 매주 업데이트 되며, 이번 주에 공로를 인정받은 우수한 구성원들이 이곳에 자리하고 있습니다. 이들은 우리 동아리의 활동에 뛰어난 기여를 하였으며, 우리의 목표 달성을 위해 열심히 노력해 왔습니다. 그들의 헌신과 열정은 우리 모두에게 영감을 주고, 동시에 동아리 내의 긍정적인 분위기를 조성하는 데 큰 역할을 합니다. 이번 주에 곰인형을 받은 회원들을 통해 우리는 그들의 공로와 노력을 공식적으로 인정하고, 함께 성장하는 동아리로 나아가는 길을 함께합니다. '
        }
      />
      <TeddyWeeklyMember />
    </div>
  );
};
