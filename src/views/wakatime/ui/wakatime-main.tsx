import Image from 'next/image';
import { styles } from './style';
import stylex from '@stylexjs/stylex';

const WakatimeMain = () => {
  return (
    <div {...stylex.props(styles.container)}>
      wakatime-main
    </div>
  )
}

export default WakatimeMain