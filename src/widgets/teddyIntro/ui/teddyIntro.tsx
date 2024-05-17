import { styles } from './style';
import stylex from '@stylexjs/stylex';

interface TeddyIntroProps {
  title: string;
  content: string;
}

export const TeddyIntro: React.FC<TeddyIntroProps> = ({ title, content }) => {
  const isTop5 = title.includes('Top 5');

  if (isTop5) {
    title.slice(0, 4);
  }

  return (
    <div {...stylex.props(styles.container)}>
      {isTop5 ? (
        <div {...stylex.props(styles.contentsContainer)}>
          <div {...stylex.props(styles.title)}>
            <p {...stylex.props(styles.fontColor)}>{title.slice(0, 5)}</p>
            <p>{title.slice(5)}</p>
          </div>
          <p {...stylex.props(styles.content)}>{content}</p>
        </div>
      ) : (
        <div {...stylex.props(styles.otherTitle)}>
          <h1 {...stylex.props(styles.title)}>{title}</h1>
          <p {...stylex.props(styles.content)}>{content}</p>
        </div>
      )}
    </div>
  );
};
