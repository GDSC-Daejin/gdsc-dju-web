import stylex from '@stylexjs/stylex';

export const TeddyPage = () => {
  return (
    <>
      <h1 {...stylex.props(style.heading)}>GDSC DJU Teddy</h1>
      <p {...stylex.props(style.paragraph)}>Teddy 사이트</p>
    </>
  );
};

const style = stylex.create({
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
  },
});
