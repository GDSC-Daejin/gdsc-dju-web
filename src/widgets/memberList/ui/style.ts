import * as stylex from '@stylexjs/stylex';
import { sizes, fontWeight } from '../../../shared/ui/styles/tokens.stylex';

export const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    paddingTop: '48px',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  coreContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  imageContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', // 열의 비율을 줄임
    columnGap: '24px',
    width: '100%',
  },

  image: {
    borderRadius: '10px',
    boxShadow: ' 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    width: '100%', // 부모 컨테이너의 너비에 맞춤
    height: 'auto', // 높이를 자동으로 조정
    objectFit: 'cover',
  },

  ImageContainer: {
    paddingTop: '48px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', // 열의 비율을 줄임
    rowGap: '24px',
    columnGap: '24px',
  },

  images: {
    width: '100%', // 부모 컨테이너의 너비에 맞춤
    height: 'auto', // 높이를 자동으로 조정
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: ' 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },

  textStyle: {
    fontSize: sizes.title1_bold,
    fontWeight: fontWeight.title1_bold,
  },

  memberContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '90%',
  },
});
