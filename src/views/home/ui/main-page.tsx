import stylex from '@stylexjs/stylex';

export const MainPage = () => {
  return (
    <>
      <h1 {...stylex.props(style.heading)}>GDSC DJU</h1>
      <p {...stylex.props(style.paragraph)}>
        Welcome to the official website of GDSC DJU.
      </p>
    </>
  );
};

const style = stylex.create({
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
  },
});
