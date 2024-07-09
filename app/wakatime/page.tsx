'use client';

import WakatimeMain from "@/views/wakatime/ui/wakatime-main"
import { styles } from "./style"
import stylex from '@stylexjs/stylex';

// <WakatimeMain/> 에 나중에 병합

const Wakatime = () => {

  const Profile = [
    {
      name: "Peony", name2: "정명주", position: "Lead", daily: "2hrs 47 mins", time: "19hrs 29mins" 
    },
    {
      name: "Peony", name2: "정명주", position: "Lead", daily: "2hrs 47 mins", time: "19hrs 29mins" 
    },
    {
      name: "Peony", name2: "정명주", position: "Lead", daily: "2hrs 47 mins", time: "19hrs 29mins" 
    }
  ]

  return (
    <div {...stylex.props(styles.wakatimeCategoryContainer)}>
      <div {...stylex.props(styles.wakatimeMonth)}>
        <p>🔚</p>
        <p>&#160;&#160;April&#160;&#160;</p>
        <p>🔜</p>
      </div>

      <div {...stylex.props(styles.wakatimeProfileContainer)}>
        {Profile.map((item, index) => (
          <div key={index} {...stylex.props(styles.wakatimeProfileBox)}>
          <h1 {...stylex.props(styles.wakatimeH1)}>{item.name}</h1>
          <h1 {...stylex.props(styles.wakatimeH1)}>{item.name2}</h1>
          <p {...stylex.props(styles.wakatimeP)}>{item.position}</p>
          </div>
        ))}
      </div>

      <div {...stylex.props(styles.wakatimeUserIntro)}>
        <div {...stylex.props(styles.wakatimeUserIntroText)}>
          <p {...stylex.props(styles.wakatimeUserIntroTextP)}>#</p>
          <p>USERNAME</p>
        </div>
        <div {...stylex.props(styles.wakatimeUserIntroText)}>
          <p>DAILY AVERAGE</p>
          <p {...stylex.props(styles.wakatimeUserIntroTextTime)}>TIME</p>
        </div>
      </div>

      {Profile.map((item, index) => (
        <div key={index} {...stylex.props(styles.wakatimeUserIntroBox)}>
          <div {...stylex.props(styles.wakatimeUserIntroBoxText)}>
            <p {...stylex.props(styles.wakatimeUserIntroTextP)}>{index + 1}</p>
            <p>{item.name}</p>
          </div>
          <div {...stylex.props(styles.wakatimeUserIntroBoxText)}>
            <p>{item.daily}</p>
            <p {...stylex.props(styles.wakatimeUserIntroBoxTextTime)}>{item.time}</p>
            <button {...stylex.props(styles.wakatimeUserIntroBoxButton)}>Github</button>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Wakatime