import { ActivityTheme } from '../models/activity-theme';
import { getPublicUrl } from './get-public-url';

export function GetActivityTheme(theme: ActivityTheme) {
  switch (theme) {
    case 'Work':
      return { color: 'bg-light-orange', icon: getPublicUrl('/img/icon-work.svg') };
    case 'Play':
      return { color: 'bg-soft-blue', icon: getPublicUrl('/img/icon-play.svg') };
    case 'Study':
      return { color: 'bg-light-red', icon: getPublicUrl('/img/icon-study.svg') };
    case 'Exercise':
      return { color: 'bg-lime-green', icon: getPublicUrl('/img/icon-exercise.svg') };
    case 'Social':
      return { color: 'bg-violet', icon: getPublicUrl('/img/icon-social.svg') };
    case 'Self Care':
      return { color: 'bg-soft-orange', icon: getPublicUrl('/img/icon-self-care.svg') };

      return undefined;
  }
}
