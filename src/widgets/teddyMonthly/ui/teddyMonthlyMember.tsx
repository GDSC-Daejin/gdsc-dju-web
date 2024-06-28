import { GetTeddyData } from "@/entities/teddy";
import { styles } from './style';
import stylex from '@stylexjs/stylex';

export const TeddyMonthlyMember = async() => {
    const TeddyData = await GetTeddyData('Monthly');
    const dummyData = Array.from({ length: 4});

    return (
        <div {...stylex.props(styles.container)}>
            {TeddyData.data == null ? (
                <div {...stylex.props(styles.imageContainer)}>
                    {dummyData.map((_, index) => (
                        <div key={index} {...stylex.props(styles.image)}></div>
                    ))}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};