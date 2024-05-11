import { styles } from './style';
import stylex from '@stylexjs/stylex';

export const TeddyHome = () => {
  return (
    <div {...stylex.props(styles.container)}>
      <h1 {...stylex.props(styles.title)}>What is Teddy System?</h1>
      <p {...stylex.props(styles.subTitle)}>
        테디 시스템은 동아리 멤버들이 적극적으로 참여하고 소중한 노력과 열정을
        기<br /> 울인 데 감사의 마음을 전하는 혜택을 제공합니다. 이러한 혜택은
        동아리 활동에 열심히 참여하고 공헌하는 학생들에게 특별한 보상으로 주어
        <br />
        지며, 이는 그들의 개인적인 성장과 역량 향상을 위한 자원을 목표로 합니다.
        더블어 테디 시스템은 동아리 내에서
        <br /> 긍정적인 분위기를 조성하고, 멤버들 간의 협력과 친목을 높이는 데
        큰 역할을 합니다.
      </p>
    </div>
  );
};
