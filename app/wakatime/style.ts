import * as stylex from '@stylexjs/stylex';
import { colors, sizes } from '../../src/shared/ui/styles/tokens.stylex';

export const styles = stylex.create({
  wakatimeCategoryContainer: {
    width: '1200px',
    margin: '0 auto',
    paddingLeft: '120px',
    color: colors.grey900,
    fontSize: sizes.body2_regular,
    gap: '24px',
    paddingTop: '32px',
  },
  wakatimeMonth: {
    display: "flex",
    alignItems: "center",
    padding: "20px 0px",
  },
  wakatimeProfileContainer: {
    display: 'flex',
    flexWrap: "wrap",
    gap: "20px",
  },
  wakatimeProfileBox: {
    width: "200px",
    height: "200px",
    backgroundColor: "green",
    borderRadius: "10px",
    padding: "50px",
  },
  wakatimeH1: {
    padding: "10px 0px",
  },
  wakatimeP: {
    color: "#6699ED"
  },

  wakatimeUserIntro: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "50px 10px 20px",
    borderBottomWidth: "1px",
    borderBottomColor: "#65717E",
    borderBottomStyle: "solid",
  },

  wakatimeUserIntroBox: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "40px 10px",
    borderBottomWidth: "1px",
    borderBottomColor: "#65717E",
    borderBottomStyle: "solid",
  },
  wakatimeUserIntroBoxText: {
    display: "flex",
    color: "white",
  },
  wakatimeUserIntroBoxTextTime: {
    padding: "0px 100px 0px 200px",
  },
  wakatimeUserIntroBoxButton: {
    backgroundColor: "#4285F4",
    padding: "6px 10px",
    outline: "none",
    borderStyle: "none",
    borderRadius: "5px"
  },
  wakatimeUserIntroText: {
    display: "flex",
    color: "#65717E",
  },
  wakatimeUserIntroTextP: {
    paddingRight: "50px",
  },
  wakatimeUserIntroTextTime: {
    padding: "0px 200px",
  }

});
