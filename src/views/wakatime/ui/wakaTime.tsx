import { SelectDay } from '@/widgets/SelectDay/ui/selectDay';
import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    paddingLeft: '120px',
    paddingTop: '59px',
  },
});

export const WakaTimeHome = () => {
  return (
    <div {...stylex.props(styles.container)}>
      <SelectDay />
    </div>
  );
};
